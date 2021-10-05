<template>
  <section
    id="hubungikami"
  >
  <v-row no-gutters>
      <v-col
        md="12"
      >
        <v-container class="py-16">
          <v-responsive
            class="d-flex align-center mx-auto"
            max-width="1000"
            height="100%"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-16 text-center primary--text">Beranda</h1>
          
          <v-row>
            <v-col cols="12">
              <v-text-field
                append-icon="mdi-subtitles-outline"
                label="Subtitle"
                outlined
                rounded />
            </v-col>
          </v-row>
            <v-row>
            <v-col cols="12">
              <v-text-field
                append-icon="mdi-format-title"
                label="Title"
                outlined
                rounded />
            </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  append-icon="mdi-card-text-outline"
                  outlined
                  rounded
                  label="Description"
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
          </v-responsive>
          
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>
<script>
  export default {

    data: () => ({
    }),
  }
</script>
