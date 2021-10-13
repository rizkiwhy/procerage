<template>
  <section
    id="blog">
    <v-container class="py-16">
          <v-responsive
            class="d-flex align-center mx-auto"
            height="100%"
            width="100%"
          >
          <v-row class="pt-10">
            <v-col
              cols="auto"
              class="mr-auto"
            >
              <v-chip-group
                mandatory
                active-class="accent--text secondary"
              >
                <v-chip
                  @click="filter(tag)"
                  class="primary white--text "
                  v-for="tag in tags"
                  :key="tag"
                >
                  {{ tag }}
                </v-chip>
              </v-chip-group>
            </v-col>
            <v-col 
              cols="12"
              md="3"
              >
              <v-text-field
                @input="search"
                dense
                color="secondary"
                label="Search"
                outlined
                rounded />
            </v-col>
            <v-col 
              cols="12"
              md="2">
                <v-select
                  :items="sortItem"
                  :value="sortItem"
                  @input="setSelectedSortItem"
                  ref="selectedEl"
                  label="Sort"
                  dense
                  rounded
                  outlined
                  color="secondary"
                />
            </v-col>
          </v-row>
          <v-row class="mt-10 space-start">
            <v-col cols="12" md="3"
              v-for="(slide, i) in blogs" :index="i" :key="i">
              <template>
                <v-hover v-slot="{ hover }">
                  <v-card
                    class="mx-auto"
                    color="senary"
                    max-width="600"
                  >
                    <v-img
                      :aspect-ratio="16/9"
                      :src="'https://beprocerage.herokuapp.com/'+slide.image"
                      :lazy-src="'https://beprocerage.herokuapp.com/'+slide.image"
                    >
                      <v-expand-transition class="">
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out primary opacity-09 v-card--reveal text-h6 white--text"
                          style="height: 100%;"
                        >
                          <v-btn
                            rounded
                            color="accent"
                            depressed
                            min-width="164"
                            small
                            class="font-weight-bold white--text py-1 mt-1"
                            @click="detail(slide.title)"
                          >
                          Read More
                          </v-btn>
                        </div>
                      </v-expand-transition>
                    </v-img>
                    
                    <v-card-text
                    class="d-flex pa-0 primary white--text"
                    style="height: 38.4%;"
                    >
                      <span class="text-subtitle-2 pa-3">
                        {{ slide.title }}
                      </span>
                        <v-expand-transition>
                        <div
                          v-if="hover"
                          class="d-flex transition-fast-in-fast-out senary opacity-1 v-card--reveal text-h6 accent--text"
                        >
                        <span class="text-subtitle-2 pa-3">
                        {{ slide.title }}
                      </span>
                        </div>
                      </v-expand-transition>
                    </v-card-text>
                  </v-card>
                </v-hover>
              </template>
            </v-col>
          </v-row>
          <!-- <template>
            <div class="text-center ma-5">
              <v-pagination
              class="customPagination"
                v-model="page"
                :length="15"
                :total-visible="7"
              ></v-pagination>
            </div>
          </template> -->
          </v-responsive>
    </v-container>
  </section>
</template>
<script>
import axios from "axios";
  export default {
    data: () => ({
      page: 1,
      sortItem: ['Latest', 'Oldest', 'Title, A-Z', 'Title, Z-A'],
      url: "https://beprocerage.herokuapp.com/api/v1",
      tags: [
        'Semua',
        'Berita',
        'Kegiatan',
      ],
      blogs: [],
      paramsLength: []
    }),
    created() {
        this.initialize()
      },
      methods : {
        search(param) {
          this.paramsLength.push(param.length)
          const sekarang =+ this.paramsLength[this.paramsLength.length-1]
          const sebelumnya =+ this.paramsLength[this.paramsLength.length-2]
          if (sekarang < sebelumnya) {
            let newBlogs
            axios.get(`${this.url}/all-blogs`)
              .then((response) => {
                newBlogs = response.data.data
                const tempBlogs = newBlogs.filter((x) => x.title.includes(param) || x.title.includes(param.charAt(0).toUpperCase() + param.slice(1)) )
                this.blogs = tempBlogs
              })
              .catch((error) => {
                console.error(error);
              });
          } else {
            const tempBlogs = this.blogs.filter((x) => x.title.includes(param) || x.title.includes(param.charAt(0).toUpperCase() + param.slice(1)) )
            this.blogs = tempBlogs

          }
        },
        setSelectedSortItem(param) {
          if (param === "Title, Z-A") {
            this.blogs.sort(function(a,b) {
              if (a.title > b.title) {
                return -1
              }
            })
          } else if (param === "Title, A-Z") {
            this.blogs.sort(function(a,b) {
              if (a.title < b.title) {
                return -1
              }
            })
          } else if (param === "Oldest") {
            this.blogs.sort(function(a,b) {
              if (a.updatedAt < b.updatedAt) {
                return -1
              }
            })
          } else if (param === "Latest") {
            this.blogs.sort(function(a,b) {
              if (a.updatedAt > b.updatedAt) {
                return -1
              }
            })
          }
        },
        filter(param) {
          axios.get(`${this.url}/blogs/${param}`)
            .then((response) => {
              this.blogs = response.data.data
              this.$refs["selectedEl"].reset();
            })
            .catch((error) => {
              console.error(error);
            });
        },
        detail(param) {
          axios.get(`${this.url}/blogs/${param}`)
            .then((response) => {
              this.blogs = response.data.data
              // console.log(this.blogs)
              this.$router.push(`/detail-blog/${this.blogs[0].title}`)
            })
            .catch((error) => {
              console.error(error);
            });
        },
        initialize() {
          axios.get(`${this.url}/all-blogs`)
            .then((response) => {
              this.blogs = response.data.data
              // console.log(response.data.data)
            })
            .catch((error) => {
              console.error(error);
            });
        }
      }
  }
</script>
<style>
.v-card--reveal {
  align-items: center;
  bottom: 0;
  justify-content: center;
  position: absolute;
  width: 100%;
}
.opacity-1 {
  opacity: 1;
}
.opacity-09 {
  opacity: .9;
}
</style>