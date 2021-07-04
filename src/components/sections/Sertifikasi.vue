<template>
  <section
    id="sertifikasi"
    class="overflow-hidden"
  >
      <!-- <v-parallax
            dark
            :src="require('@/assets/light.jpg')"
        > -->
    <v-row no-gutters>
      <v-col
        md="12"
      >
          <!-- :src="require('../../assets/wave(7).svg')" -->
        <!-- <v-img
          height="140vh"
        > -->
        <v-container>
        <div class="text-center mb-12">
          <h1 class="text-uppercase text-h5 font-weight-bold mt-16 mb-2 teal--text text-center">Sertifikasi</h1>
        </div>
        <template>

        <v-responsive
          class="mx-auto"
          max-width="1350"
        >
          <v-container fluid>
            <v-row>
              <v-col
                v-for="card in cards"
                :key="card.title"
                cols="12"
                sm="4"
                md="3"
              >
              <v-hover>
                <template v-slot:default="{ hover }">
                <v-card class="text-center" hover>
                  <!-- x-large  -->
                  <v-icon
                    class="mt-5"
                    color="teal" 
                    size="56">
                    {{card.icon}}
                  </v-icon>
                  <v-list-item-content class="mx-2">
                    <v-list-item-title class="text-h5 mb-2 teal--text">
                      {{card.title}}
                    </v-list-item-title>
                    <div v-text="card.text" class="mb-5 grey--text"/>
                  </v-list-item-content>
                  <v-fade-transition>
                    <v-overlay
                      v-if="hover"
                      absolute
                      color="teal"
                    >
                      <v-btn
                        color="teal"
                        depressed
                        min-width="164"
                        class="font-weight-bold white--text py-1"
                      >
                      See More Info
                      </v-btn>
                    </v-overlay>
                  </v-fade-transition>
                </v-card>
                </template>
              </v-hover>
              </v-col>
              <v-col
                class="text-center"
                cols="12"
              >
                <!-- {{ new Date().getFullYear() }} — <strong>Vuetify</strong> -->
                <v-btn
                  elevation="2"
                  outlined
                  large
                  color="teal"
                >
                Discover more
                </v-btn>
              </v-col>
            </v-row>
          </v-container>
        </v-responsive>
        </template>
        </v-container>

        <!-- </v-img> -->
      </v-col>
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
    </v-row>
      <!-- </v-parallax> -->
  </section>
</template>
<script>
  export default {
    data: () => ({
      cards: [
        {
          icon: 'mdi-keyboard-outline',
          title: 'Trendy Design',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          icon: 'mdi-camera-outline',
          title: 'Photography',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          icon: 'mdi-pencil-outline',
          title: 'Brand Making',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
        {
          icon: 'mdi-puzzle-outline',
          title: '24/7 Support',
          text: 'Efficiently unleash media information without cross-media value. Quickly maximize value timely deliverables schemas.',
        },
      ],
    }),
    props: {
      dark: Boolean,
      callout: String,
      color: {
        type: String,
        default: 'primary',
      },
      icon: String,
      subtitle: String,
      text: String,
      title: String,
    },
  }
</script>
