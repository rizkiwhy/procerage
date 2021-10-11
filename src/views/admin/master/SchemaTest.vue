<template>
  <v-container>
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
      :items="certifications"
      
      class="elevation-1"
      :search="search"
    >
      <template v-slot:[`item.image`]="{ value }">
          <a target="_blank" :href="'http://103.148.113.86:18081/'+value">
            {{ value }}
          </a>
      </template>
      <template v-slot:[`item.icon`]="{ value }">
        <v-icon>{{value}}</v-icon>
      </template>

      <template v-slot:top>
        <v-toolbar flat>
          <v-toolbar-title>Schemas</v-toolbar-title>
          <v-divider class="mx-4" inset vertical></v-divider>
          <v-spacer></v-spacer>
          <v-dialog persistent v-model="dialog" max-width="600">
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
                    <v-col cols="12">
                      <v-text-field
                        v-model="editedItem.name"
                        label="Schema"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-text-field
                        label="Code"
                        v-model="editedItem.code"
                      ></v-text-field>
                    </v-col>
                    <v-col cols="12" sm="6" md="6">
                      <v-autocomplete
                        :items="meas"
                        v-model="editedItem.mea"
                        label="Mea"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="8">
                      <v-autocomplete
                        :items="fields"
                        v-model="editedItem.field"
                        label="Field"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="4">
                      <v-autocomplete
                        :items="tags"
                        v-model="editedItem.tags"
                        label="Tags"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="12">
                      <v-autocomplete
                        :items="categories"
                        v-model="editedItem.category"
                        label="Category"
                      ></v-autocomplete>
                    </v-col>
                    <v-col cols="12" sm="6" md="8">
                      <v-file-input
                        v-model="filename"
                        @change="onSelectedImage"
                        label="Image" />
                    </v-col>
                    <v-col cols="12" sm="6" md="2">
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
          :color="item.tags==='AKL'?'yellow darken-2'
          :item.tags==='OTKP'?'indigo'
          :item.tags==='BDP'?'red'
          :item.tags==='MLOG'?'lime'
          :item.tags==='RPL'?'green'
          :item.tags==='TKJ'?'blue-grey'
          :'purple'"
          dark
          x-small
          class="ma-1"
        >
          {{ item.tags }}
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
    filename: null,
    search: "",
    file: "",
    // url: "http://103.14.20.210:18081/api/v1",
    url: "http://103.148.113.86:18081/api/v1",
    dialog: false,
    dialogDelete: false,
    row: null,
    headers: [
      { text: "Code", value: "code" },
      { text: "Schema", value: "name" },
      { text: "Tags", value: "tags" },
      { text: "Category", value: "category" },
      { text: "Field", value: "field" },
      { text: "Mea", value: "mea" },
      { text: "Image", value: "image" },
      { text: "Active", value: "active" },
      { text: "Actions", value: "actions", sortable: false },
    ],
    level: [ "Dasar", "Lanjutan" ],
    tags: [],
    categories: [],
    fields: [],
    meas: [],
    certifications: [],
    editedIndex: -1,
    editedItem: {
      code: "",
      name: "",
      tags: "",
      category: "",
      field: "",
      mea: "",
      image: "",
      active: false,
    },
    defaultItem: {
      code: "",
      name: "",
      tags: "",
      category: "",
      field: "",
      mea: "",
      image: "",
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
    onSelectedImage(e) {
      this.file = e
    },
    
    initialize() {
      axios
        .get(`${this.url}/certifications`, {
          headers: {
            Authorization: token,
          },
        })
        .then((response) => {
          this.certifications = response.data.data;
        })
        .catch((error) => {
          console.error(error);
        });

      axios.get(`${this.url}/expertises`, {
        headers: {
          Authorization: token,
        }
      }).then((response) => {
        const arrayExpertises = response.data.data
        // let arrayKode = new Array();
        
        for (let index = 0; index < arrayExpertises.length; index++) {
          this.tags.push(arrayExpertises[index].abbr)
        }
        // console.log(this.tags)

      }).catch(error => {
        console.error(error)
      })

      axios.get(`${this.url}/categories`, {
        headers: {
          Authorization: token,
        }
      }).then((response) => {
        const arrayCategories = response.data.data
        // let arrayKode = new Array();
        
        for (let index = 0; index < arrayCategories.length; index++) {
          this.categories.push(arrayCategories[index].name)
        }
        // console.log(this.categories)

      }).catch(error => {
        console.error(error)
      })

      axios.get(`${this.url}/fields`, {
        headers: {
          Authorization: token,
        }
      }).then((response) => {
        const arrayFields = response.data.data
        
        for (let index = 0; index < arrayFields.length; index++) {
          this.fields.push(arrayFields[index].name)
        }

      }).catch(error => {
        console.error(error)
      })

      axios.get(`${this.url}/meas`, {
        headers: {
          Authorization: token,
        }
      }).then((response) => {
        const arrayMeas = response.data.data
        // let arrayKode = new Array();
        
        for (let index = 0; index < arrayMeas.length; index++) {
          this.meas.push(arrayMeas[index].name)
        }
        // console.log(this.tags)

      }).catch(error => {
        console.error(error)
      })
    },

    editItem(item) {
      // this.current
      this.editedIndex = this.certifications.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialog = true;
    },

    deleteItem(item) {
      this.editedIndex = this.certifications.indexOf(item);
      this.editedItem = Object.assign({}, item);
      this.dialogDelete = true;
    },

    deleteItemConfirm() {
      axios
        .delete(`${this.url}/certifications/${this.editedItem._id}`, {
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

        const formData = new FormData()
        formData.append('code', this.editedItem.code)
        formData.append('name', this.editedItem.name)
        formData.append('tags', this.editedItem.tags)
        formData.append('category', this.editedItem.category)
        formData.append('field', this.editedItem.field)
        formData.append('mea', this.editedItem.mea)
        formData.append('active', this.editedItem.active)
        
        if (this.file !== "") {
          formData.append('image', this.file)
        }
        
        for (var pair of formData.entries()) {
          console.log(pair[0]+ ', ' + pair[1]); 
        }
        axios
          .put(`${this.url}/certifications/${this.editedItem._id}`, formData, {
            headers: {
              'content-type': 'multipart/form-data',
              Authorization: token,
            },
          })
          .then((response) => {
            Toast.fire({
              icon: response.data.status,
              title: response.data.message
            })
            this.initialize()
            this.filename = null
          })
          .catch((error) => console.log(error));
      } else {
        const formData = new FormData()
        formData.append('code', this.editedItem.code)
        formData.append('name', this.editedItem.name)
        formData.append('tags', this.editedItem.tags)
        formData.append('category', this.editedItem.category)
        formData.append('field', this.editedItem.field)
        formData.append('mea', this.editedItem.mea)
        formData.append('image', this.file)
        formData.append('active', this.editedItem.active)

        axios
          .post(`${this.url}/certifications`, formData, {
            headers: {
              'content-type': 'multipart/form-data',
              Authorization: token,
            },
          })
          .then((response) => {
            Toast.fire({
              icon: response.data.status,
              title: response.data.message
            })
            this.initialize()
            this.filename = null
            // console.log(this.editedItem)
          })
          .catch((error) => console.error(error));
      }
      this.close();
    },
  },
};
</script>
