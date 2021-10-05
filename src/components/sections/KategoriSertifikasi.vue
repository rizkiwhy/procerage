<template>
  <section
    id="kategorisertifikasi"
    class=""
  >
    <v-row no-gutters>
      <v-col
        md="12"
      >
        <v-container class="fill-height py-16 mx-auto">
         <v-responsive
            class="d-flex mx-auto"
            height="100%"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center primary--text">Skema</h1>
            <v-tabs horizontal slider-color="accent" >
                
                <v-tab active-class="secondary--text" v-for="expertise in expertises" :key="expertise._id"
                class="primary--text ma-0 pa-0 nxs mx-auto">
                    <v-icon center>
                      {{expertise.icon}}
                    </v-icon>
                      <span class="text-subtitle-2 d-none d-sm-flex">
                        {{expertise.abbr}}
                      </span>
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
                        <h6 class="text-h6 text-center font-weight-bold accent--text mt-6">
                          {{expertise.name}}
                        </h6>
                        <v-img
                        :src="'http://localhost:3000/'+expertise.image"/>
                      </v-col>
                      <v-col
                        cols="12"
                        md="8"
                      >
                      <template>
                          <v-expansion-panels accordion class="mt-4">
                            <v-expansion-panel
                              v-for="(item,i) in expertises[index].item"
                              :key="i"
                              class="senary"
                            >
                              <v-expansion-panel-header>
                                  {{item.name}}
                                <span class="d-none d-sm-flex">
                                  <v-chip
                                    :color="item.level!=='Dasar'?'red':'green'"
                                    dark
                                    x-small
                                    class="ma-1"
                                  >
                                    {{ item.level }}
                                  </v-chip>
                                </span>
                              </v-expansion-panel-header>
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
            </v-tabs>
          </v-responsive>
        </v-container>
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
        })
        .catch((error) => {
          console.error(error);
        });

      axios.get(`${this.url}/all-certifications`)
        .then((response) => {
          this.certifications = response.data.data
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
</script>
<style>
.xs {
  width: 30px !important;
  min-width: 30px !important;
  max-width: 30px !important;
}
.nxs {
  width: 10% !important;
  min-width: 10% !important;
  max-width: 10% !important;
}
</style>