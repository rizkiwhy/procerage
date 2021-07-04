<template>
  <v-row justify="center">
    <v-dialog v-model="dialog" persistent max-width="500px">
      <template v-slot:activator="{ on }">
        <v-btn rounded outlined color="text-teal" v-on="on">
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
            color="teal"
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
            color="teal"
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
            color="teal"
            class="mx-3"
            @keyup.enter="register"
            hint="Leave blank if you don't want to change password"
          />
        </v-card-text>
        <v-card-actions>
          <v-spacer></v-spacer>
          <v-btn color="red" dark rounded @click="dialog = false">Close
            <v-icon>
              mdi-cancel
            </v-icon>
          </v-btn>
          <v-btn color="teal" dark rounded>Save
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
import { getItem } from '@/util/localStorage'

export default {
    data: () => ({
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
      profileForm: {
        name: getItem("name"),
        email: getItem("email"),
        password: "",
      },
    }),
    methods: {
    },
}
</script>