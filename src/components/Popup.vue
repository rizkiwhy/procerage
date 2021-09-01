<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on }">
        <v-btn rounded outlined color="text-primary" v-on="on">
          <v-icon left>mdi-account-cog</v-icon>
          Profile</v-btn>
      </template>
      <v-card>
        <v-card-title>
          <span class="headline">Profile</span>
        </v-card-title>
         <v-form class="px-3" ref="form">
        <v-card-text>
          <v-text-field
            label="Name"
            name="Name"
            prepend-icon="mdi-account"
            type="text"
            color="primary"
            class="mx-3"
            v-model="profileForm.name"
            @keyup.enter="register"
            :rules="[rules.required, rules.min]"
          />
          <v-text-field
            label="Email"
            name="Email"
            prepend-icon="mdi-email"
            type="text"
            color="primary"
            class="mx-3"
            v-model="profileForm.email"
            @keyup.enter="register"
            :rules="[rules.required, rules.email]"
          />
          <v-text-field
            label="Password"
            name="Password"
            prepend-icon="mdi-lock"
            :append-icon="show ? 'mdi-eye' : 'mdi-eye-off'"
            :type="show ? 'text' : 'password'"
            @click:append="show = !show"
            color="primary"
            class="mx-3"
            v-model="profileForm.password"
            @keyup.enter="register"
            hint="Leave blank if you don't want to change password"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="error" dark rounded @click="dialog = false">Close
            <v-icon>
              mdi-cancel
            </v-icon>
          </v-btn>
          <v-btn color="success" dark rounded @click="save">Save
            <v-icon>
              mdi-content-save-outline
            </v-icon>
          </v-btn>
        </v-card-actions>
         </v-form>
      </v-card>
    </v-dialog>
  </v-row>
</template>

<script>
// let token = localStorage.getItem("token");

import { getItem } from '@/util/localStorage'

const Swal = require('sweetalert2')

import axios from "axios";

export default {
    data: () => ({
      url: "http://localhost:3000/api/v1",
      show: false,
      dialog: false,
      rules: {
        required: value => !!value || 'Required.',
        min: v => v.length >= 6 || 'Min 6 characters',
        email: value => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          return pattern.test(value) || 'Invalid e-mail.'
        },
      },
      // _id : getItem("_id"),
      profileForm: {
        // _id : getItem("_id"),
        name: '',
        email: '',
        password: '',
      },
      snackbar: {
        active: false,
        text: "",
        timeout: 5000,
        color: "",
      },
    }),
    created() {
      this.initialize();
    },
    methods: {
      initialize() {
        axios
          .get(`${this.url}/auth/${localStorage.getItem('_id')}`, {
            headers: {
              Authorization: getItem("token"),
            },
          })
          .then((response) => {
            this.profileForm.name = response.data.data.name
            this.profileForm.email = response.data.data.email
          })
          .catch((error) => console.log(error));
      },
      close() {
        this.dialog = false;
      },

      save() {
        axios
          .put(`${this.url}/auth/${localStorage.getItem('_id')}`, this.profileForm, {
            headers: {
              Authorization: getItem("token"),
            },
          })
          .then((response) => {
            if (response.data.status === "success") {
              console.log(response.data.status)
              const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                // didOpen: (toast) => {
                  //   toast.addEventListener('mouseenter', Swal.stopTimer)
                //   toast.addEventListener('mouseleave', Swal.resumeTimer)
                // }
              })
              // location.reload();

              Toast.fire({
                icon: 'success',
                title: 'Signed out successfully'
              })
            } else {
              this.$swal('Hello Vue world!!!');

              console.log("tidak")
              // Vue.swal('Hello Vue world!!!');
              
            }
            // if (response.data.data.tatus === "success") {
            //   this.snackbar = {
            //     active: true,
            //     text: response.data.message,
            //     color: "success",
            //   }
            //   location.reload();
            //     // console.log(this.profileForm._id);
            //   // localStorage.setItem("name", response.data.user.name);
            // } else if (response.data.status === "error") {
            //   this.snackbar = {
            //     active: true,
            //     text: response.data.message,
            //     color: "error",
            //   }
            // }
          })
          .catch((error) => console.log(error));
        
        this.close();
      }
    },
}
</script>