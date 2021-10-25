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
      :items="profiles"
      
      class="elevation-1"
      :search="search"
    >
      <template v-slot:[`item.image`]="{ value }">
          <a target="_blank" :href="'https://beprocerage.herokuapp.com/'+value">
            {{ value }}
          </a>
      </template>
      <template v-slot:[`item.icon`]="{ value }">
        <v-icon>{{value}}</v-icon>
          <!-- <a target="_blank" :href="'https://beprocerage.herokuapp.com/'+value">
            {{ value }}
          </a> -->
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>profiles</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <!-- <v-btn color="accent" dark rounded class="mb-2" @click="showAlert">
            New Item
            <v-icon right dark> mdi-plus-circle-outline </v-icon>
          </v-btn> -->
          <v-dialog persistent v-model="dialog" max-width="500">
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
                    <v-col cols="12">
                      <v-textarea
                        rows=3
                        clear-icon="mdi-close-circle"
                        label="Content"
                        v-model="editedItem.content"
                      ></v-textarea>
                    </v-col>
                    <v-col cols="12" sm="6" md="3">
                      <v-text-field
                        v-model="editedItem.number"
                        label="Number"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="9">
                      <div class="text-caption">Kategori</div>
                      <v-radio-group
                        v-model="editedItem.category"
                        row
                        class="mt-0"
                      >
                        <v-radio
                          v-for="(c) in category"
                          :key="c.number"
                          :label="c"
                          :value="c"
                        ></v-radio>
                      </v-radio-group>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <div class="text-caption">Active</div>
                      <v-switch
                        class="ma-0"
                        v-model="editedItem.active"
                        :label="`${editedItem.active.toString()}`"
                      ></v-switch>
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
      <template v-slot:[`item.level`]="{ item }">        
          {{ item.level }}
      </template>
      <template v-slot:[`item.tags`]="{ item }">
        <v-chip
          :color="tag==='AKL'?'yellow darken-2'
          :tag==='OTKP'?'indigo'
          :tag==='BDP'?'red'
          :tag==='MLOG'?'lime'
          :tag==='RPL'?'green'
          :tag==='TKJ'?'blue-grey'
          :'purple'"
          v-for="tag in item.tags" :key="tag"
          dark
          x-small
          class="ma-1"
        >
          {{ tag }}
        </v-chip>
    </template>
    <template v-slot:[`item.active`]="{ item }">
        <v-chip
          :color="item.active===true?'success':'error'"
          dark
          x-small
          class="ma-1"
        >
          {{ item.active }}
        </v-chip>
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
    search: "",
    
    url: "https://beprocerage.herokuapp.com/api/v1",
    dialog: false,
    dialogDelete: false,
    row: null,
    headers: [
      { text: "Content", value: "content" },
      { text: "Category", value: "category" },
      { text: "Number", value: "number" },
      { text: "Active", value: "active" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    category: [ "Vision", "Mission", "Sejarah" ],
    profiles: [],
    editedIndex: -1,
    editedItem: {
      content: "",
      category: "",
      number: "",
      active: false,
    },
    defaultItem: {
      content: "",
      category: "",
      number: "",
      active: false,
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
        .get(`${this.url}/profiles`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          this.profiles = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });
    },

    editItem(item) {
      // this.current
      this.editedIndex = this.profiles.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.profiles.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      axios
        .delete(`${this.url}/profiles/${this.editedItem._id}`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          Toast.fire({
            icon: response.data.status,
            title: response.data.message,
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
          .put(`${this.url}/profiles/${this.editedItem._id}`, this.editedItem, {
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
        // console.log(this.editedItem.tags)
        axios
          .post(`${this.url}/profiles`, this.editedItem, {
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
