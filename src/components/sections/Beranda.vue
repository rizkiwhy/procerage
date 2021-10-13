<template>
  <section
    id="beranda"
    class="overflow-hidden"
  >
    <v-row 
      no-gutters 
      v-for="(blog, i) in blogs"
      :key="i">
      <v-col
        md="12"
      >
        <v-img
          height="100vh"
          :src="require('../../assets/wave(33).svg')"
          :lazy-src="require('../../assets/wave(33).svg')"
        >
        <v-container class="fill-height py-16 px-6" style="max-width:900px">
          <div data-aos="fade-right">

          <v-img class="d-none d-md-block" 
            max-width="250"
            :lazy-src="'https://beprocerage.herokuapp.com/'+blog.image"
            :src="'https://beprocerage.herokuapp.com/'+blog.image"/>
          </div>
          <div data-aos="fade-left">

          <v-responsive
            class="d-flex align-center"
            height="100%"
            max-width="700"
            width="100%"
          >
          <h1 class="text-subtitle-2 font-weight-regular mb-4 text-left secondary--text">{{blog.subtitle}}</h1>
          <h1 class="text-h6 font-weight-medium mb-4 text-left primary--text">{{blog.title}}</h1>
          <p class="text-body-1 grey--text">
            {{blog.description}}
          </p>
          <v-btn
            href="#sertifikasi"
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
          </v-responsive>
          </div>

        </v-container>
        </v-img>
      </v-col>
    </v-row>
  </section>
</template>
<script>
import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();
import axios from "axios";

  export default {
    name: 'HomeBeranda',

    data: () => ({
      url: "https://beprocerage.herokuapp.com/api/v1",
      blogs: [],
    }),
    created() {
      this.initialize()
    },
    methods : {
      initialize() {
        axios.get(`${this.url}/beranda`)
          .then((response) => {
            this.blogs = response.data.data;
            // console.log(this.blogs)
          })
          .catch((error) => {
            console.error(error);
          });
      }
    }
  }
</script>
<style>
html {
  scroll-behavior: smooth;
}
</style>