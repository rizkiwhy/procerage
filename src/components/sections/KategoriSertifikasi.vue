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


                <v-tab-item v-for="(expertise) in expertises" :key="expertise._id">
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
                        :src="'http://103.148.113.86:18081/'+expertise.image"/>
                      </v-col>
                      <v-col
                        cols="12"
                        md="8"
                      >
                      <template>
                          <v-expansion-panels accordion class="pt-5">
                              <!-- v-for="(item,i) in expertise[index]"
                              :key="i" -->
                            <v-expansion-panel
                              class="senary"
                            >
                                  <!-- {{item.name}} -->
                              <v-expansion-panel-header class="text-caption">
                                <v-simple-table dense class="senary">
                                  <template v-slot:default>
                                    <tbody>
                                      <tr>
                                        <td>Nama</td>
                                        <td class="text-uppercase">{{expertise.schema.name}}</td>
                                      </tr>
                                      <tr>
                                        <td>Kode</td>
                                        <td>{{expertise.schema.code}}</td>
                                      </tr>
                                      <tr>
                                        <td>Kategori</td>
                                        <td>{{expertise.schema.category}}</td>
                                      </tr>
                                      <tr>
                                        <td>Bidang</td>
                                        <td>{{expertise.schema.field}}</td>
                                      </tr>
                                      <tr>
                                        <td>Jurusan</td>
                                        <td>{{expertise.name}} ({{expertise.schema.tags}})</td>
                                      </tr>
                                      <tr>
                                        <td>Mea</td>
                                        <td>{{expertise.schema.mea}}</td>
                                      </tr>
                                    </tbody>
                                  </template>
                                </v-simple-table>
                              </v-expansion-panel-header>
                              <v-expansion-panel-content>
                                <h6 class="text-h6 text-center font-weight-bold accent--text mt-2">
                                  Unit Kompetensi
                                </h6>
                                <v-simple-table dense class="senary">
                                  <template v-slot:default>
                                    <thead>
                                      <tr>
                                        <th class="text-left">
                                          Kode
                                        </th>
                                        <th class="text-left">
                                          Nama
                                        </th>
                                      </tr>
                                    </thead>
                                    <tbody>
                                      <tr
                                        v-for="(item) in expertise.unit"
                                        :key="item.code"
                                      >
                                        <td>{{ item.code }}</td>
                                        <td>{{ item.name }}</td>
                                      </tr>
                                    </tbody>
                                  </template>
                                </v-simple-table>
                                <!-- <v-card class="senary">
                                  <v-card-title>
                                    Unit Kompetensi
                                    <v-spacer></v-spacer>
                                    <v-text-field
                                      v-model="search"
                                      class="accent--text"
                                      append-icon="mdi-magnify"
                                      label="Search"
                                      single-line
                                      hide-details
                                    ></v-text-field>
                                  </v-card-title>
                                  <v-data-table
                                    v-for="(u,i) in expertise.unit"
                                    :key="i"
                                    :headers="headers"
                                    class="senary"
                                    :items="u"
                                    :search="search"
                                  ></v-data-table>
                                </v-card> -->
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
    url: "http://103.148.113.86:18081/api/v1",
    expertises: [],
    certifications: [],
    search: '',
    headers: [
      {
        text: 'Kode',
        align: 'start',
        filterable: false,
        value: 'code',
      },
      { text: 'Nama', value: 'name' },
    ],
    competencyunits: [],
  }),
  created() {
    this.initialize()
  },
  methods : {
    async initialize() {
      await axios.get(`${this.url}/all-expertises`)
        .then((response) => {
          this.expertises = response.data.dataExpertises;
          for (let index = 0; index < this.expertises.length; index++) {
            this.expertises[index].unit = this.expertises[index].schema.competencyunits 
          }
        })
        .catch((error) => {
          console.error(error);
        });

      // axios.get(`${this.url}/all-certifications`)
      //   .then((response) => {
      //     this.certifications = response.data.data
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });

      // axios.get(`${this.url}/all-competency-units`)
      //   .then((response) => {
      //     this.competencyunits = response.data.data;
      //   })
      //   .catch((error) => {
      //     console.error(error);
      //   });
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