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
          <h1 class="text-h4 font-weight-medium mb-16 text-center primary--text">Hubungi Kami</h1>
          
          <v-row>
            <v-col cols="12" sm="6" md="6" lg="6">
              <v-text-field
                v-model="editedItem.name"
                append-icon="mdi-identifier"
                label="Nama Lengkap"
                outlined
                rounded />
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="6">
              <v-text-field
                v-model="editedItem.email"
                append-icon="mdi-email"
                label="Email"
                outlined
                rounded />
            </v-col>
          </v-row>
            <v-row>
            <v-col cols="12" sm="6" md="6" lg="6">
              <v-text-field
                v-model="editedItem.notelp"
                append-icon="mdi-phone"
                label="No. Telepon"
                outlined
                rounded />
            </v-col>

            <v-col cols="12" sm="6" md="6" lg="6">
              <v-text-field
                v-model="editedItem.subject"
                append-icon="mdi-text-subject"
                label="Subjek"
                outlined
                rounded />
            </v-col>
            </v-row>
            <v-row>
              <v-col cols="12">
                <v-textarea
                  v-model="editedItem.message"
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
                  @click="save"
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
import axios from "axios";
const Swal = require('sweetalert2')
const Toast = Swal.mixin({
  showCloseButton: true,
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})

export default {

  data: () => ({
    url: "http://103.148.113.86:18081/api/v1",
    editedItem: {
      name: "",
      email: "",
      notelp: "",
      subject: "",
      message: "",
    }
  }),
  methods: {
    save() {
      console.log(this.editedItem)

      axios
        .post(`${this.url}/new-inbox`, this.editedItem)
        .then((response) => {
          const status = response.data.status
            let confirmButtonColor
            status === 'success' ?
              confirmButtonColor = '#00C853' :
              confirmButtonColor = '#E91E63'
          Swal.fire({
              icon: status,
              title: status,
              text: response.data.message,
              confirmButtonColor: confirmButtonColor
            }).then((result) => {
              if (result.isConfirmed && status === 'success') {
                location.reload()
              } else {
                this.initialize()
                this.editedItem = {
                  name: "",
                  email: "",
                  notelp: "",
                  subject: "",
                  message: "",
                }
              }
            })
          // Toast.fire({
          //   icon: response.data.status,
          //   title: response.data.message
          // })
          // this.initialize()
          // this.editedItem = {
          //   name: "",
          //   email: "",
          //   notelp: "",
          //   subject: "",
          //   message: "",
          // }
        })
        .catch((error) => console.error(error));
    }
  }
}
</script>
