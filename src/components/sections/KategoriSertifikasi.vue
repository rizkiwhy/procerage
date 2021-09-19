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
            class="d-flex align-left mx-auto"
            height="100%"
            max-width="1000"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center primary--text">Sertifikasi</h1>
          <v-tabs vertical slider-color="accent">
            <!-- <template > -->
              
              <v-tab active-class="secondary--text" v-for="expertise in expertises" :key="expertise._id"
              class="primary--text align-center">
                <v-row>
                  <v-col>
                    <v-icon left>
                      {{expertise.icon}}
                    </v-icon>
                  </v-col>
                  <v-col class="align-left">
                    <span class="d-none d-sm-flex overline align-left">
                      {{expertise.abbr}}
                    </span>
                  </v-col>
                </v-row>
              </v-tab>

              <v-tab-item v-for="(expertise, index) in expertises" :key="expertise._id">
                <v-card flat
                >
                  <v-row 
                  
                  >
                    <v-col
                      cols="12"
                      md="4"
                    >
                      <v-img
                       :src="'http://localhost:3000/'+expertise.image"/>
                    </v-col>
                    <v-col
                      cols="12"
                      md="8"
                    >
                    <span class="d-none d-sm-flex text-h6 align-center accent--text">
                      {{expertise.name}}
                    </span>
                    <template>
                        <v-expansion-panels accordion class="mt-4">
                          <v-expansion-panel
                            v-for="(item,i) in expertises[index].item"
                            :key="i"
                            class="senary"
                          >
                            <v-expansion-panel-header>{{item.name}}</v-expansion-panel-header>
                            <v-expansion-panel-content>
                              {{item.description}}
                            </v-expansion-panel-content>
                          </v-expansion-panel>
                        </v-expansion-panels>
                    </template>
                    </v-col>
                  </v-row>
                </v-card>
              </v-tab-item>
            <!-- </template> -->
          </v-tabs>
          </v-responsive>
        </v-container>
        <!-- </v-img> -->
      </v-col>
    </v-row>
  </section>
</template>
<script>
import axios from "axios";

export default {
  data: () => ({
    url: "http://localhost:3000/api/v1",
    expertises: [],
    certifications: [],
  }),
  created() {
    this.initialize()
  },
  methods : {
    initialize() {
      axios.get(`${this.url}/all-expertises`)
        .then((response) => {
          this.expertises = response.data.data;
          console.log(this.expertises)
        })
        .catch((error) => {
          console.error(error);
        });

      axios.get(`${this.url}/all-certifications`)
        .then((response) => {
          this.certifications = response.data.data
          // console.log(this.certifications)

          // const arrCertifications = this.certifications.map(c => {
          //   return {
          //     title: c.name,
          //     desc: c.description,
          //     tags: c.tags,
          //     level: c.level
          //   }
          // }).filter(c => c.tags.includes("TKJ"))
          // console.log(arrCertifications)
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
</script>