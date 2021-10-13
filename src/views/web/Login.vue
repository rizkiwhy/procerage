<template>
<!-- <v-main> -->
  <v-container class="fill-height" fluid>
    <v-row align="center" justify="center">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-16">
                    <h1 class="text-center display-1 primary--text text--">
                      Sign in to App
                    </h1>
                    <div class="text-center mt-3">
                      <v-btn icon class="mx-2" rounded color="primary" outlined>
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>

                      <v-btn icon class="mx-2" rounded color="primary" outlined>
                        <v-icon>mdi-google-plus</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-2" rounded color="primary" outlined>
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-3">Ensure your email for registration</h4>
                    <v-form >
                      <v-container>
                        <v-text-field
                          label="Email"
                          name="Email"
                          prepend-icon="mdi-email"
                          type="text"
                          color="primary"
                          class="mx-3"
                          v-model="loginForm.email"
                          @keyup.enter="login"
                          :rules="[rules.required, rules.email]"
                        />
                        <v-text-field
                          label="Password"
                          name="Password"
                          prepend-icon="mdi-lock"
                          :append-icon="show1 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show1 ? 'text' : 'password'"
                          @click:append="show1 = !show1"
                          color="primary"
                          class="mx-3"
                          v-model="loginForm.password"
                          @keyup.enter="login"
                          :rules="[rules.required, rules.min]"
                        />
                      </v-container>
                      <div class="text-center mt-1">
                        <v-btn rounded color="primary " dark @click="login"
                          >SIGN IN
                          <v-icon right dark> mdi-login-variant </v-icon>
                        </v-btn>
                      </div>
                    </v-form>
                    <h3 class="text-center mt-1 mb-16">Forgot your password?</h3>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="4" class="primary">
                  <v-container class="fill-height" fluid>
                    <v-card-text class="white--text">
                      <v-row align="center" justify="center">
                        <h1 class="text-center display-1">Hello, Friend!</h1>
                      </v-row>
                      <v-row align="center" justify="center">
                        <h5 class="text-center mt-3">
                          Enter your personal details and start journay with us
                        </h5>
                      </v-row>
                      <v-row align="center" justify="center">
                        <v-btn class="mt-3" rounded outlined dark @click="toRegisterForm"
                          >SIGN UP
                          <v-icon right dark> mdi-chevron-right </v-icon>
                        </v-btn>
                      </v-row>
                    </v-card-text>
                  </v-container>
                </v-col>
              </v-row>
            </v-window-item>
            <v-window-item :value="2">
              <v-row class="fill-height">
                <v-col cols="12" md="4" class="primary">
                  <v-container class="fill-height" fluid>
                    <v-card-text class="white--text">
                      <v-row align="center" justify="center">
                        <h1 class="text-center display-1">Welcome Back!</h1>
                      </v-row>
                      <v-row align="center" justify="center">
                        <h5 class="text-center mt-3">
                          To Keep connected with us please login with your personnel info
                        </h5>
                      </v-row>
                      <v-row align="center" justify="center">
                        <v-btn class="mt-3" rounded outlined dark @click="toLoginForm">
                          <v-icon left dark> mdi-chevron-left </v-icon>
                          SIGN IN
                        </v-btn>
                      </v-row>
                    </v-card-text>
                  </v-container>
                </v-col>

                <v-col cols="12" md="8">
                  <v-card-text class="mt-11">
                    <h1 class="text-center display-1 primary--text text--">
                      Create Account
                    </h1>
                    <div class="text-center mt-3">
                      <v-btn icon class="mx-2" rounded color="primary" outlined>
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-2" rounded color="primary" outlined>
                        <v-icon>mdi-google-plus</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-2" rounded color="primary" outlined>
                        <v-icon>mdi-linkedin</v-icon>
                      </v-btn>
                    </div>
                    <h4 class="text-center mt-3">Ensure your email for registration</h4>
                    <v-form>
                      <v-container>
                        <v-text-field
                          label="Name"
                          name="Name"
                          prepend-icon="mdi-account"
                          type="text"
                          color="primary"
                          class="mx-3"
                          v-model="registerForm.name"
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
                          v-model="registerForm.email"
                          @keyup.enter="register"
                          :rules="[rules.required, rules.email]"
                        />
                        <v-text-field
                          label="Password"
                          name="Password"
                          prepend-icon="mdi-lock"
                          :append-icon="show2 ? 'mdi-eye' : 'mdi-eye-off'"
                          :type="show2 ? 'text' : 'password'"
                          @click:append="show2 = !show2"
                          color="primary"
                          class="mx-3"
                          v-model="registerForm.password"
                          @keyup.enter="register"
                          :rules="[rules.required, rules.min]"
                        />
                      </v-container>
                      <div class="text-center mt-1">
                        <v-btn rounded color="primary " dark @click="register"
                          >SIGN UP
                          <v-icon right dark> mdi-login-variant </v-icon>
                        </v-btn>
                      </div>
                    </v-form>
                    <h3 class="text-center mt-1 mb-10"></h3>
                  </v-card-text>
                </v-col>
              </v-row>
            </v-window-item>
          </v-window>
        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>

<script>
import axios from "axios";

const Swal = require('sweetalert2')
const Toast = Swal.mixin({
  showCloseButton: true,
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


export default {
  data: () => ({
    // url: "http://103.14.20.210:18081/api/v1",
    url: "https://beprocerage.herokuapp.com/api/v1",
    step: 1,
    show1: false,
    show2: false,
    loginForm: {
      email: "",
      password: "",
    },
    registerForm: {
      name: "",
      email: "",
      password: "",
    },
    rules: {
      required: value => !!value || 'Required.',
      min: v => v.length >= 6 || 'Min 6 characters',
      // counter: value => value.length <= 20 || 'Max 20 characters',
      email: value => {
        const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
        return pattern.test(value) || 'Invalid e-mail.'
      },
    },
  }),
  created() {
    this.initialize()
    // location.reload()
  },
  methods: {
    initialize() {
      // console.log(localStorage.getItem('token'))
    },
    toLoginForm(){
      this.step = --this.step
      this.registerForm = {
        name:"",
        email:"",
        password:""
      }
    },
    toRegisterForm(){
      this.step = ++this.step
      this.loginForm = {
        email:"",
        password:""
      }
    },
    login() {
      axios
        .post(`${this.url}/auth/login`, this.loginForm)
        .then((response) => {
          Toast.fire({
            icon: response.data.status,
            title: response.data.message
          })
            let newToken = response.data.token
            window.token = newToken
            localStorage.setItem("token", newToken)
            localStorage.setItem("_id", response.data.user._id)
            this.$router.push("/admin/dashboard")
        })
        .catch((error) => console.error(error));
    },
    register() {
      axios
        .post(`${this.url}/auth/register`, this.registerForm)
        .then((response) => {
          // console.log(response.data.status)
          Toast.fire({
            icon: response.data.status,
            title: response.data.message
          })
          if (response.data.status === "success") {
            this.step = --this.step;
            this.registerForm = {
              name: null,
              email: null,
              password: null,
            };
          }
        })
        .catch((error) => {
          console.log(error);
        });
    },
  },
};
</script>
