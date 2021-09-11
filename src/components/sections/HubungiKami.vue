<template>
  <section
    id="hubungikami"
  >
  <v-row no-gutters>
      <v-col
        md="12"
      >
        <v-container class="py-16">
          
          <!-- <v-img class="d-none d-lg-block" 
            max-width="250"
            :src="require('../../assets/001-drawkit-content-man-colour.svg')"/> -->
          <v-responsive
            class="d-flex align-center mx-auto"
            max-width="1000"
            height="100%"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center primary--text">Hubungi Kami</h1>
          
          <v-row>
            <v-col cols="12" sm="6" md="6" lg="6">
              <v-text-field
                append-icon="mdi-identifier"
                label="Nama Lengkap"
                outlined
                rounded />
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="6">
              <v-text-field
                append-icon="mdi-email"
                label="Email"
                outlined
                rounded />
            </v-col>
          </v-row>
            <v-row>
            <v-col cols="12" sm="6" md="6" lg="6">
              <v-text-field
                append-icon="mdi-phone"
                label="No. Telepon"
                outlined
                rounded />
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="6">
              <v-text-field
                append-icon="mdi-text-subject"
                label="Subjek"
                outlined
                rounded />
            </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  append-icon="mdi-comment-text-multiple-outline"
                  outlined
                  rounded
                  label="Pesan"
                />
              </v-col>
            </v-row>
            <v-row>
              <v-col cols="12" offset-xl="6" offset-lg="6" offset-md="6" offset-sm="6" xl="6" lg="6" md="6" sm="6" >
                <v-btn
                  x-large
                  block
                  color="primary"
                  rounded
                >Submit</v-btn>
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
