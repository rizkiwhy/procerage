<template>
  <section
    id="keunggulan"
    class="senary"
  >
    <v-row no-gutters>
      <v-col
        md="12"
      >
        <v-container class="py-16 px-8">
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center primary--text">Keunggulan</h1>
          <v-row>
            <v-col
              v-for="(privilege, i) in privileges"
              :key="i"
              cols="12"
              md="4"
              sm="6"
            >
                <template>
                  <v-card
                    class="mx-auto"
                    color="quaternary"
                    outlined
                    shaped
                    max-width="500"
                  >
                    <v-list-item three-line>
                      <v-list-item-avatar>
                        <v-btn
                          color="accent"
                          fab
                          dark
                          small
                          bottom
                          left
                        >
                          <v-icon>{{privilege.icon}}</v-icon>
                        </v-btn>
                      </v-list-item-avatar>
                      <v-list-item-content>
                        <v-list-item-title class="text-subtitle-1 mb-1 primary--text">
                          {{privilege.title}}
                        </v-list-item-title>
                          <span class="text-caption grey--text">
                            {{privilege.description}}
                          </span>
                      </v-list-item-content>

                    </v-list-item>
                  </v-card>
                </template>
            </v-col>
          </v-row>
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
    privileges: [],
  }),
  created() {
    this.initialize()
  },
  methods : {
    initialize() {
      axios.get(`${this.url}/all-privileges`)
        .then((response) => {
          this.privileges = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
</script>
