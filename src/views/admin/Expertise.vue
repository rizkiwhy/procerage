<template>
  <!-- <hello-world /> -->

  <v-container>
    <!-- <template>
      <div class="text-center ma-2">
        <v-btn
          dark
          @click="snackbar = true"
        >
          Open Snackbar
        </v-btn>
        <v-snackbar
          v-model="snackbar"
        >
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="pink"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </template> -->
    <v-card-title>
      Master Data
      <v-spacer></v-spacer>
      <v-text-field
        v-model="search"
        append-icon="mdi-magnify"
        label="Search"
        single-line
        hide-details
      ></v-text-field>
    </v-card-title>
    <v-data-table
      :headers="headers"
      :items="expertises"
      sort-by="calories"
      class="elevation-1"
      :search="search"
    >
      <template v-slot:[`item.image`]="{ value }">
          <a target="_blank" :href="'http://localhost:3000/'+value">
            {{ value }}
          </a>
      </template>
      <template v-slot:[`item.icon`]="{ value }">
        <v-icon>{{value}}</v-icon>
          <!-- <a target="_blank" :href="'http://localhost:3000/'+value">
            {{ value }}
          </a> -->
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Expertises</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <!-- <v-btn color="accent" dark rounded class="mb-2" @click="showAlert">
            New Item
            <v-icon right dark> mdi-plus-circle-outline </v-icon>
          </v-btn> -->
          <v-dialog persistent v-model="dialog" max-width="500px">
            <template v-slot:activator="{ on, attrs }">
              <v-btn color="primary" dark rounded class="mb-2" v-bind="attrs" v-on="on">
                New Item
                <v-icon right dark> mdi-plus-circle-outline </v-icon>
              </v-btn>
            </template>
            <v-card>
              <v-card-title>
                <span class="text-h5">{{ formTitle }}</span>
              </v-card-title>
            <!-- <v-form enctype=multipart/form-data> -->
              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="12">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Nama Program Keahlian"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="8">
                      <v-text-field
                        v-model="editedItem.icon"
                        label="Icon"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.abbr"
                        label="Kode"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="12">
                      <v-file-input
                        v-model="filename"
                        @change="onSelectedImage"
                        label="Image" />
                      <!-- :value="current" -->
                      <!-- v-model="editedItem.image" -->
                      <!-- <v-file-input
                        @change="onSelectedImage"
                        label="Image"
                      ></v-file-input> -->
                    </v-col>
                  </v-row>
                </v-container>
              </v-card-text>

              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" rounded dark @click="close">
                  Cancel <v-icon right dark> mdi-cancel</v-icon></v-btn
                >
                <v-btn color="success" rounded dark @click="save">
                  Save <v-icon right dark> mdi-content-save-outline </v-icon></v-btn
                >
              </v-card-actions>
            <!-- </v-form> -->

            </v-card>
          </v-dialog>
          <v-dialog persistent v-model="dialogDelete" max-width="500px">
            <v-card>
              <v-card-title class="text-h5 justify-center"
                >Are you sure you want to delete {{ editedItem.name }}?</v-card-title
              >
              <v-card-actions>
                <v-spacer></v-spacer>
                <v-btn color="error" dark rounded @click="closeDelete"
                  >Cancel
                  <v-icon right dark>mdi-cancel</v-icon>
                </v-btn>
                <v-btn color="success" dark rounded @click="deleteItemConfirm"
                  >Yes
                  <v-icon dark right> mdi-trash-can-outline </v-icon>
                </v-btn>
                <v-spacer></v-spacer>
              </v-card-actions>
            </v-card>
          </v-dialog>
        </v-toolbar>
      </template>
      <template v-slot:[`item.actions`]="{ item }">
        <v-btn @click="editItem(item)" class="mx-1" fab x-small dark color="warning">
          <v-icon> mdi-pencil </v-icon>
        </v-btn>
        <v-btn @click="deleteItem(item)" class="mx-1" fab x-small dark color="error">
          <v-icon> mdi-delete </v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize" dark> Reset </v-btn>
      </template>
    </v-data-table>
    <template>

    <!-- <v-snackbar
      :color="snackbar.color"
      v-model="snackbar.active"
      :timeout="snackbar.timeout"
      right
      top
    >
      {{ snackbar.text }}

      <template v-slot:action="{ attrs }">
        <v-btn small color="white" text v-bind="attrs" @click="snackbar.active = false">
          <v-icon>mdi-close</v-icon>
        </v-btn>
      </template>
    </v-snackbar> -->
    </template>
    <!-- <template>
      <div class="text-center ma-2">
        <v-btn
          dark
          @click="snackbar = true"
        >
          Open Snackbar
        </v-btn>
        <v-snackbar
          v-model="snackbar"
        >
          {{ text }}

          <template v-slot:action="{ attrs }">
            <v-btn
              color="pink"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </template> -->
  </v-container>
</template>

<script>
import axios from "axios";
let token = localStorage.getItem("token");
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
  name: "Home",

  components: {
    // HelloWorld,
  },
  data: () => ({
    // snackbar: false,
    // text: `Hello, I'm a snackbar`,
    filename: null,
    file: "",
    search: "",
    // url: "http://103.14.20.210:18081/api/v1",
    url: "http://localhost:3000/api/v1",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Program Keahlian",
        value: "name",
      },
      { text: "Icon", value: "icon" },
      { text: "Kode", value: "abbr" },
      { text: "Image", value: "image" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    expertises: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      icon: "",
      abbr: "",
      image: "",
    },
    defaultItem: {
      name: "",
      icon: "",
      abbr: "",
      image: "",
    },
    // snackbar: {
    //   active: false,
    //   text: "",
    //   timeout: 5000,
    //   color: "",
    // },
  }),

  computed: {
    formTitle() {
      return this.editedIndex === -1 ? "New Item" : "Edit Item";
    },
  },

  watch: {
    dialog(val) {
      val || this.close();
    },
    dialogDelete(val) {
      val || this.closeDelete();
    },
  },

  created() {
    this.initialize();
  },

  methods: {
    onSelectedImage(e) {
      // const formData = new FormData()
      this.file = e
      // console.log(this.file)
      // formData.append('file', this.file)
      // console.log(formData)
    },

    initialize() {
      

      axios
        .get(`${this.url}/expertises`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          this.expertises = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    editItem(item) {
      // this.current
      this.editedIndex = this.expertises.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
      // fetch('http://localhost:3000/images/1631760176974Opera%20Snapshot_2021-09-14_145538_app.jadiasn.id.png')
      //   .then(res => res.blob()) // Gets the response and returns it as a blob
      //   .then(blob => {
      //     // Here's where you get access to the blob
      //     // And you can use it for whatever you want
      //     // Like calling ref().put(blob)

      //     // Here, I use it to make an image appear on the page
      //     let objectURL = URL.createObjectURL(blob);
      //     let myImage = new Image();
      //     myImage.src = objectURL;
      //     console.log(blob)
      //     // document.getElementById('myImg').appendChild(myImage)
      // });
    },

    deleteItem(item) {
      this.editedIndex = this.expertises.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      axios
        .delete(`${this.url}/expertises/${this.editedItem._id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          if (response.data.status === "success") {
            Toast.fire({
              icon: response.data.status,
              title: response.data.message
            })
            // this.snackbar = {
            //   active: true,
            //   text: response.data.message,
            //   color: "success",
            // };
          } else if (response.data.status === "error") {
            Toast.fire({
              icon: response.data.status,
              title: response.data.message
            })
            // this.snackbar = {
            //   active: true,
            //   text: response.data.message,
            //   color: "error",
            // };
          }
          this.initialize();
        })
        .catch((error) => console.log(error));
      this.closeDelete();
    },

    close() {
      this.dialog = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    closeDelete() {
      this.dialogDelete = false;
      this.$nextTick(() => {
        this.editedItem = Object.assign({}, this.defaultItem);
        this.editedIndex = -1;
      });
    },

    save() {
      if (this.editedIndex > -1) {
        const formData = new FormData()
        formData.append('name', this.editedItem.name)
        formData.append('icon', this.editedItem.icon)
        formData.append('abbr', this.editedItem.abbr)
        
        if (this.file !== "") {
          formData.append('image', this.file)
        }
        // console.log(this.file === "")
        // console.log(this.file !== "")
        axios
          .put(`${this.url}/expertises/${this.editedItem._id}`, formData, {
            headers: {
              'content-type': 'multipart/form-data',
              Authorization: token,
            },
          })
          .then((response) => {
            if (response.data.status === "success") {
              Toast.fire({
                icon: response.data.status,
                title: response.data.message
              })
              // this.snackbar = {
              //   active: true,
              //   text: response.data.message,
              //   color: "success",
              // }
            } else if (response.data.status === "error") {
              Toast.fire({
                icon: response.data.status,
                title: response.data.message
              })
              // this.snackbar = {
              //   active: true,
              //   text: response.data.message,
              //   color: "error",
              // }
            }
            this.initialize()
          })
          .catch((error) => console.log(error));
      } else {
        const formData = new FormData()
        formData.append('name', this.editedItem.name)
        formData.append('icon', this.editedItem.icon)
        formData.append('abbr', this.editedItem.abbr)
        formData.append('image', this.file)
        // console.log(formData)

        axios
          .post(`${this.url}/expertises`, formData, {
            headers: {
              'content-type': 'multipart/form-data',
              Authorization: token,
            },
          })
          .then((response) => {
            if (response.data.status === "success") {
              Toast.fire({
                icon: response.data.status,
                title: response.data.message
              })
              // this.snackbar = {
              //   active: true,
              //   text: response.data.message,
              //   color: "success",
              // }
            } else if (response.data.status === "error") {
              Toast.fire({
                icon: response.data.status,
                title: response.data.message
              })
              // this.snackbar = {
              //   active: true,
              //   text: response.data.message,
              //   color: "error",
              // }
            }
            this.initialize()
            this.filename = null
          })
          .catch((error) => console.error(error));
      }
      this.close();
    },
  },
};
</script>
