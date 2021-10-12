<template>

  <v-container>
    <v-card-title>
      Nutrition
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
      :items="desserts"
      
      class="elevation-1"
      :search="search"
    >
      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>My CRUD</v-toolbar-title>
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

              <v-card-text>
                <v-container>
                  <v-row>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Dessert name"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.calories"
                        label="Calories"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.fat"
                        label="Fat (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.carbs"
                        label="Carbs (g)"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem.protein"
                        label="Protein (g)"
                      ></v-text-field>
                    </v-col>
                    <!-- <v-col cols="12" sm="6" md="4">
                      <v-text-field
                        v-model="editedItem._id"
                        label="_id"
                      ></v-text-field>
                    </v-col> -->
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
        <v-btn @click="editItem(item)" class="ma-1" fab x-small dark color="warning">
          <v-icon> mdi-pencil </v-icon>
        </v-btn>
        <v-btn @click="deleteItem(item)" class="ma-1" fab x-small dark color="error">
          <v-icon> mdi-delete </v-icon>
        </v-btn>
      </template>
      <template v-slot:no-data>
        <v-btn color="primary" @click="initialize" dark> Reset </v-btn>
      </template>
    </v-data-table>
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
  data: () => ({
    search: "",
    // url: "http://103.14.20.210:18081/api/v1",
    url: "https://beprocerage.herokuapp.com/api/v1",
    dialog: false,
    dialogDelete: false,
    headers: [
      {
        text: "Dessert (100g serving)",
        value: "name",
      },
      { text: "Calories", value: "calories" },
      { text: "Fat (g)", value: "fat" },
      { text: "Carbs (g)", value: "carbs" },
      { text: "Protein (g)", value: "protein" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    desserts: [],
    editedIndex: -1,
    editedItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
    defaultItem: {
      name: "",
      calories: 0,
      fat: 0,
      carbs: 0,
      protein: 0,
    },
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
    initialize() {
      axios
        .get(`${this.url}/desserts`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          this.desserts = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    editItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.desserts.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      axios
        .delete(`${this.url}/desserts/${this.editedItem._id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          Toast.fire({
            icon: response.data.status,
            title: response.data.message
          })
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
        axios
          .put(`${this.url}/desserts/${this.editedItem._id}`, this.editedItem, {
            headers: {
              Authorization: token,
            },
          })
          .then((response) => {
            Toast.fire({
              icon: response.data.status,
              title: response.data.message
            })
            this.initialize()
          })
          .catch((error) => console.log(error));
      } else {
        axios
          .post(`${this.url}/desserts`, this.editedItem, {
            headers: {
              Authorization: token,
            },
          })
          .then((response) => {
            Toast.fire({
              icon: response.data.status,
              title: response.data.message
            })
            this.initialize()
          })
          .catch((error) => console.error(error));
      }
      this.close();
    },
  },
};
</script>
