<template>
  <section
    id="tentangkami"
    class="primary"
  >
  <v-row no-gutters>
      <v-col
        md="12"
      >
        <v-container class="py-16 px-8">
          
          <!-- <v-img class="d-none d-lg-block" 
            max-width="250"
            :src="require('../../assets/001-drawkit-content-man-colour.svg')"/> -->
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            max-width="1185"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center secondary--text">Contact Information</h1>
          <v-row>
            <v-col cols="12" sm="12" md="5">
              <v-card
                elevation="0"
                class="d-flex justify-center transparent">

              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3961.0029431347148!2d107.55660431436716!3d-6.890249569338691!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e68e6bd6aaaaaab%3A0xf843088e2b5bf838!2sSMK%20Negeri%2011%20Bandung!5e0!3m2!1sen!2sid!4v1626397212583!5m2!1sen!2sid" 
              width="360" 
              height="360" 
              style="border:0;" 
              allowfullscreen="true" 
              loading="lazy" 
              />
              </v-card>
            </v-col>

            <v-col cols="12" sm="12" md="7">
              <v-list-item v-for="(feature, i) in features"
                  :key="i"
                  :href="feature.link"
                  target="_blank"
                  >
                <v-list-item-avatar>
                  <v-btn
                    color="accent"
                    fab
                    dark
                    x-small
                    bottom
                    left
                  >
                    <v-icon color="secondary">{{feature.icon}}</v-icon>
                  </v-btn>
                </v-list-item-avatar>
                <v-list-item-content class="white--text text-subtitle-1">
                  {{feature.title}}
                  <!-- <div class="text-overline mb-4">
                    OVERLINE
                  </div> -->
                  <!-- <v-list-item-title class="text-subtitle-1 mb-1 secondary--text">
                    {{feature.title}}
                  </v-list-item-title> -->
                  <!-- <v-list-item-subtitle> -->
                    <!-- <span class="h6 secondary--text"> -->
                    <!-- Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis illum veniam cum dolores ratione commodi beatae quas maxime, laboriosam excepturi solut!  -->
                    <!-- </span> -->
                  <!-- </v-list-item-subtitle> -->
                </v-list-item-content>

              </v-list-item>
            </v-col>
          
          </v-row>

          <!-- <h1 class="text-h6 font-weight-regular mb-4 text-left secondary--text">Jl. Budi Jl. Raya Cilember, Sukaraja, <br> Kec. Cicendo, Kota Bandung, Jawa Barat 40153</h1> -->
          <!-- <p class="text-body-1 grey--text">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae nobis neque aspernatur in quas iure id aliquid, esse debitis, quibusdam mollitia! Quia ea expedita magnam totam, earum omnis et perspiciatis?
          </p> -->
          <!-- <v-btn
            color="secondary"
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
          </v-btn> -->
            <!-- tile -->
          </v-responsive>
          
        </v-container>
      </v-col>
    </v-row>
    <!-- <v-row no-gutters>
      <v-col
        md="12"
      >
        <v-img
          height="100vh"
        >
        <v-container>
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            max-width="1185"
            width="100%"
          >
          
          </v-responsive>
        </v-container>
        </v-img>
      </v-col>
    </v-row> -->
  </section>
</template>
<script>
  export default {

    data: () => ({
      features: [
        {
          title: 'Jl. Budi Cilember, Sukaraja, Kec. Cicendo, Bandung, Jawa Barat 40153',
          icon: 'mdi-google-maps',
        },
        {
          title: '+62226652442',
          icon: 'mdi-phone',
        },
        {
          title: 'smkn11bdg@gmail.com',
          icon: 'mdi-email-multiple-outline',
        },
        {
          title: 'smkn11bdg',
          icon: 'mdi-skype-business',
        },
        {
          title: 'Senin - Jumat (08.00 - 16.00 WIB), Weekend & Tanggal Merah Tutup',
          icon: 'mdi-calendar-clock',
        },
        {
          title: "SMKN11BANDUNG",
          link: "https://www.youtube.com/c/SMKN11BANDUNG",
          icon: 'mdi-youtube',
        },
      ],
    }),
  }
</script>
