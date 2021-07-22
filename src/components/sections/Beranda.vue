<template>
  <section
    id="beranda"
    class="overflow-hidden"
  >
    <v-row no-gutters>
      <v-col
        md="12"
      >
        <v-img
          height="100vh"
          :src="require('../../assets/wave (16).svg')"
        >
        <v-container class="fill-height px-16 py-12">
          <v-img class="d-none d-lg-block" 
            max-width="250"
            :src="require('../../assets/001-drawkit-content-man-colour.svg')"/>
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            max-width="700"
            width="100%"
          >
          <h1 class="text-h6 font-weight-regular mb-4 text-left secondary--text">WE LOVE MAKING THINGS SIMPLE AND AMAZING </h1>
          <h1 class="text-h4 font-weight-medium mb-4 text-left primary--text">Welcome to LSP SMKN11BDG</h1>
          <p class="text-body-1 grey--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis neque aspernatur in quas iure id aliquid, esse debitis, quibusdam mollitia! Quia ea expedita magnam totam, earum omnis et perspiciatis?
          </p>
          <v-btn
            color="primary"
            depressed
            rounded
            min-width="164"
            class="font-weight-bold white--text py-1 mt-1"
          >
          Discover More
          </v-btn>
            <span class="font-weight-bold grey--text ma-4">or</span>
          <v-btn
            outlined
            rounded
            color="accent"
            depressed
            min-width="164"
            class="font-weight-bold white--text py-1 mt-1"
          >
          Get Started Now
          </v-btn>
            <!-- tile -->
          </v-responsive>
        </v-container>
        </v-img>
      </v-col>
    </v-row>
  </section>
</template>
