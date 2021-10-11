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
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center secondary--text">Informasi Kontak</h1>
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
              <v-list-item v-for="(contact, i) in contacts"
                  :key="i"
                  :href="contact.link"
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
                    <v-icon color="secondary">{{contact.icon}}</v-icon>
                  </v-btn>
                </v-list-item-avatar>
                <v-list-item-content class="pa-0 white--text font-weight caption">
                  {{contact.value}}
                </v-list-item-content>

              </v-list-item>
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
    url: "http://103.148.113.86:18081/api/v1",
    contacts: [],
  }),
  created() {
    this.initialize()
  },
  methods : {
    initialize() {
      axios.get(`${this.url}/all-contacts`)
        .then((response) => {
          this.contacts = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }
}
</script>
