<template>
  <section
    id="testimonial">
    <!-- <v-img
        height="100vh"
        :src="require('../../assets/wave.svg')"
        class="fill-height bottom-gradient"> -->
<!-- <v-row no-gutters>
      <v-col
        md="12"
      > -->
         <!-- <v-col cols="12" sm="12">
        <v-container>
          <v-card class="px-2">
                <carousel-3d :height="280" :width="400" :border="1" :autoplay="true" :autoplay-timeout='3000'>

                    <slide v-for="(slide, i) in slides" :index="i" :key="i">
                        <img v-bind:src="slide.src" />
                    </slide>
                </carousel-3d>
          </v-card>
        </v-container>
        </v-col> -->
    <!-- </v-img> -->
  </section>
</template>
<script>
export default {
    data() {
        return {
            slides: [
                {src: require('../../assets/01.jpg')},
                {src: require('../../assets/02.jpg')},
                {src: require('../../assets/03.jpg')},
                {src: require('../../assets/04.jpg')},
                {src: require('../../assets/05.jpg')},
                {src: require('../../assets/06.jpg')},
            ]
        }
    }
}
</script>
<style>
.carousel-3d-slide {
    height: 100% !important;
}

</style>