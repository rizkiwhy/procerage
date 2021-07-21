<template>
  <section
    id="kategorisertifikasi"
    class=""
  >
    <v-row no-gutters>
      <v-col
        md="12"
      >
        <!-- <v-img
          height="100vh"
        > -->

        <v-container class="py-16">
          <!-- <v-img class="d-none d-lg-block" :src="require('@/assets/001-drawkit-content-man-colour.svg')"/> -->
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            max-width="1185"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center primary--text">Sertifikasi</h1>
          <v-tabs vertical slider-color="accent">
            <template v-for="feature in features" >

              <v-tab active-class="secondary--text" :key="feature.title" 
              
              class="primary--text ">
                <v-icon left>
                  mdi-account
                </v-icon>
                <span class="d-none d-sm-flex">
                Teknik Komputer dan Jaringan
                </span>
              </v-tab>

              <v-tab-item :key="feature.title" >
                <v-card flat
                >
                  <v-row 
                  
                  >
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-img 
                      
                       :src="require('@/assets/001-drawkit-content-man-colour.svg')"/>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                    >
                    <template>
                      <!-- <v-row justify="center"> -->
                        <v-expansion-panels accordion class="mt-4">
                          <v-expansion-panel
                            v-for="(item,i) in 5"
                            :key="i"
                            class="senary"
                          >
                            <v-expansion-panel-header>Item</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      <!-- </v-row> -->
                    </template>
                    </v-col>
                  </v-row>
                  <!-- <v-card-text>
                  </v-card-text> -->
                </v-card>
              </v-tab-item>
            </template>
          </v-tabs>
          </v-responsive>
        </v-container>
        <!-- </v-img> -->
      </v-col>
    </v-row>
  </section>
</template>
<script>
export default {
  data: () => ({
    features: [
        {
          title: 'Pixel Perfect Design',
          icon: 'mdi-fountain-pen-tip',
        },
        {
          title: 'Retina Ready',
          icon: 'mdi-cellphone',
        },
        {
          color: 'primary',
          dark: true,
          title: 'Easily Customizable',
          icon: 'mdi-pencil-box-outline',
        },
        {
          title: 'Image Parallax',
          icon: 'mdi-image-size-select-actual',
        },
        {
          title: 'Seo Optimized',
          icon: 'mdi-ice-pop',
        },
        {
          title: '24/7 Support',
          icon: 'mdi-help-circle-outline',
        },
      ],
  })
}
</script>