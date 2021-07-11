<template>
  <section
    id="sertifikasi">
        <!-- :src="require('../../assets/wave(8).svg')" -->
        <div class="text-center mt-16">
          <h1 class="text-h3 font-weight-medium text-center mb-4 primary--text">Sertifikasi</h1>
        </div>
        <v-container>
          <v-tabs vertical slider-color="accent">
            <template v-for="feature in features" >

              <v-tab active-class="secondary--text" :key="feature" class="primary--text">
                <v-icon left>
                  mdi-account
                </v-icon>
                <span class="d-none d-sm-flex">
                Option 1
                </span>
              </v-tab>

              <v-tab-item :key="feature" >
                <v-card flat>
                  <v-row>
                    <v-col
                      cols="12"
                      md="6"
                    >
                      <v-img width="300" class="d-none d-lg-block mx-auto" :src="require('@/assets/001-drawkit-content-man-colour.svg')"/>
                    </v-col>
                    <v-col
                      cols="12"
                      md="6"
                    >
                    <template>
                      <v-row justify="center">
                        <v-expansion-panels accordion v-model="panel" class="mt-4">
                          <v-expansion-panel
                            active-class="accent--text"
                            v-for="(item,i) in 5"
                            :key="i"
                            class="quaternary"
                          >
                            <v-expansion-panel-header>Item</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                      </v-row>
                    </template>
                    </v-col>
                  </v-row>
                  <v-card-text>
                  </v-card-text>
                </v-card>
              </v-tab-item>
            </template>
          </v-tabs>
        </v-container>
    
  </section>
</template>
<script>
  export default {

    data: () => ({
      panel: [0, 1],
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
    }),
  }
</script>