<template>
  <section
    id="profil"
  >
    <!-- class="overflow-hidden" -->
    <!-- <v-row no-gutters>
      <v-col
        md="12"
      > -->
        
        <v-img
          height="100vh"
          :src="require('../../assets/wave(3).svg')"
          class="fill-height bottom-gradient"
        >
        <!-- <v-carousel
    cycle
    height="400"
    hide-delimiter-background
    show-arrows-on-hover
  >
    <v-carousel-item
      v-for="(slide, i) in slides"
      :key="i"
    >
      <v-sheet
        color="transparent"
        height="100%"
      >
        <v-row
          class="fill-height"
          align="center"
          justify="center"
        >
          <div class="text-h2 white--text">
            {{ slide }} Slide
          </div>
        </v-row>
      </v-sheet>
    </v-carousel-item>
  </v-carousel> -->
        <!-- <v-container class="fill-height" fluid> -->
    <!-- <v-row align="center" justify="center" height="1000px">
      <v-col cols="12" sm="8" md="8">
        <v-card class="elevation-12">
          <v-window v-model="step">
            <v-window-item :value="1">
              <v-row>
                <v-col cols="12" md="8">
                  <v-card-text class="mt-16">
                    <h1 class="text-center display-1 teal--text text--">
                      Sign in to App
                    </h1>
                    <div class="text-center mt-3">
                      <v-btn icon class="mx-2" rounded color="teal" outlined>
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>

                      <v-btn icon class="mx-2" rounded color="teal" outlined>
                        <v-icon>mdi-google-plus</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-2" rounded color="teal" outlined>
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
                          color="teal"
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
                          color="teal"
                          class="mx-3"
                          v-model="loginForm.password"
                          @keyup.enter="login"
                          :rules="[rules.required, rules.min]"
                        />
                      </v-container>
                      <div class="text-center mt-1">
                        <v-btn rounded color="teal " dark @click="login"
                          >SIGN IN
                          <v-icon right dark> mdi-login-variant </v-icon>
                        </v-btn>
                      </div>
                    </v-form>
                    <h3 class="text-center mt-1 mb-16">Forgot your password?</h3>
                  </v-card-text>
                </v-col>
                <v-col cols="12" md="4" class="teal">
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
                <v-col cols="12" md="4" class="teal">
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
                    <h1 class="text-center display-1 teal--text text--">
                      Create Account
                    </h1>
                    <div class="text-center mt-3">
                      <v-btn icon class="mx-2" rounded color="teal" outlined>
                        <v-icon>mdi-facebook</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-2" rounded color="teal" outlined>
                        <v-icon>mdi-google-plus</v-icon>
                      </v-btn>
                      <v-btn icon class="mx-2" rounded color="teal" outlined>
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
                          color="teal"
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
                          color="teal"
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
                          color="teal"
                          class="mx-3"
                          v-model="registerForm.password"
                          @keyup.enter="register"
                          :rules="[rules.required, rules.min]"
                        />
                      </v-container>
                      <div class="text-center mt-1">
                        <v-btn rounded color="teal " dark @click="register"
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
    </v-row> -->
    <!-- <v-snackbar
      :color="snackbar.color"
      v-model="snackbar.active"
      :timeout="snackbar.timeout"
      absolute
      right
      top
      class="pt-10"
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn small color="white" text v-bind="attrs" @click="snackbar.active = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar> -->
  <!-- </v-container> -->
        </v-img>
      <!-- </v-col> -->
      <!-- <v-col
        md="6"
      >
        <v-img
          :src="require('@/assets/welcome.png')"
          height="100vh"
        />
      </v-col> -->

      <!-- <v-col
        class="align-content-space-between layout wrap"
        cols="12"
        md="6"
        :pa-5="$vuetify.breakpoint.smAndDown"
      >
        <base-bubble-1
          style="transform: rotate(180deg) translateY(25%)"
        />

        <v-row
          align="center"
          justify="center"
        >
          <v-col
            cols="10"
            md="6"
          >
            <base-heading>Welcome!</base-heading>
            <base-text>
              Lorem ipsum dolor sit amet, consectetur ad
              ipiscin elit. Etiam vulputate augue vel felis gra
              vida porta. Lorem ipsum dolor sit amet, cons
              ectetur adipiscing elit.<br>
              Lorem ipsum dolor sit amet, consectetur ad
              ipiscin elit. Etiam vulputate augue vel felis gra
              vida porta. Lorem ipsum dolor sit amet, cons
              ectetur adipiscing elit.
            </base-text>
            <base-btn class="mt-4">
              Learn More!
            </base-btn>
          </v-col>
        </v-row>

        <base-bubble-2
          style="transform: rotate(180deg) translate(-200px, -15%)"
        />
      </v-col> -->
    <!-- </v-row> -->
  </section>
</template>
<script>
  export default {
    data () {
      return {
        colors: [
          'indigo',
          'warning',
          'pink darken-2',
          'red lighten-1',
          'deep-purple accent-4',
        ],
        slides: [
          'First',
          'Second',
          'Third',
          'Fourth',
          'Fifth',
        ],
      }
    },
  }
</script>