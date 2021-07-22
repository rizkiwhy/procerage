<template>
  <section
    id="asesor"
    class="senary"
  >
    <v-row no-gutters>
      <v-col
        md="12"
      >
        <v-container class="py-16">
          <v-responsive
            class="d-flex align-center ma-auto"
            height="100%"
            max-width="1000"
            width="100%"
          >
          <h1 class="text-h4 font-weight-medium mb-5 text-center primary--text">Visi</h1>
          <h1 class="text-h5 font-weight-medium text-center accent--text">{{visi}}</h1>
          <h1 class="text-h4 font-weight-medium mt-16 mb-5 text-center primary--text">Misi</h1>
          <v-list class="transparent">
            <v-list-item v-for="(misi, i) in misi"
                :key="i"
                >
            <v-list-item-avatar class="align-self-start">
                <v-icon color="accent">mdi-arrow-right-circle-outline</v-icon>
            </v-list-item-avatar>
            <v-list-item-content class="white--text text-subtitle-1">
                <h1 class="text-h5 font-weight-medium text-justify accent--text">
                    {{misi}}
                </h1>
            </v-list-item-content>
            </v-list-item>
          </v-list>
          <h1 class="text-h4 font-weight-medium mt-16 mb-5 text-center primary--text">Sejarah</h1>
            <v-list class="transparent">
                <v-list-item v-for="(sejarah, i) in sejarah" :key="i">
                    <v-list-item-content class="white--text text-subtitle-1">
                        <h1 class="text-h5 font-weight-medium text-justify accent--text">
                            {{sejarah}}
                        </h1>
                    </v-list-item-content>
                </v-list-item>
            </v-list>
          </v-responsive>
        </v-container>
      </v-col>
    </v-row>
  </section>
</template>
<script>
  export default {

    data: () => ({
        visi: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        misi: [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
            "Tristique magna sit amet purus gravida quis blandit turpis. ",
            "Elementum tempus egestas sed sed risus pretium quam vulputate dignissim.",
            "Blandit cursus risus at ultrices mi tempus imperdiet.",
            "Sed libero enim sed faucibus turpis.",
        ],
        sejarah : [
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Id nibh tortor id aliquet lectus proin nibh nisl condimentum. Lectus magna fringilla urna porttitor rhoncus dolor purus non. Viverra vitae congue eu consequat ac felis donec et odio. Id semper risus in hendrerit gravida rutrum quisque non. Dui vivamus arcu felis bibendum. Mauris cursus mattis molestie a. Nunc mattis enim ut tellus. Sit amet consectetur adipiscing elit duis tristique sollicitudin nibh. Non curabitur gravida arcu ac tortor. Scelerisque purus semper eget duis at tellus. Sit amet consectetur adipiscing elit ut. Lectus sit amet est placerat in egestas erat. Interdum posuere lorem ipsum dolor. At urna condimentum mattis pellentesque. Nunc faucibus a pellentesque sit amet porttitor eget dolor. Massa tincidunt nunc pulvinar sapien et ligula ullamcorper.",
            "Faucibus vitae aliquet nec ullamcorper sit amet risus nullam eget. Magna fermentum iaculis eu non diam phasellus. Nisl rhoncus mattis rhoncus urna neque viverra justo nec ultrices. Malesuada pellentesque elit eget gravida cum. Massa placerat duis ultricies lacus sed. Pretium fusce id velit ut tortor. Est lorem ipsum dolor sit. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. In mollis nunc sed id semper. Quisque sagittis purus sit amet.",
            "Risus in hendrerit gravida rutrum quisque non tellus. Sed felis eget velit aliquet sagittis id consectetur. Maecenas pharetra convallis posuere morbi leo urna molestie. Senectus et netus et malesuada. Nam aliquam sem et tortor consequat id porta. Habitant morbi tristique senectus et netus et malesuada. Turpis in eu mi bibendum. Purus sit amet luctus venenatis lectus magna fringilla. Pretium quam vulputate dignissim suspendisse. Curabitur vitae nunc sed velit dignissim sodales. Lectus urna duis convallis convallis tellus id interdum velit laoreet. Quis blandit turpis cursus in. Consectetur purus ut faucibus pulvinar elementum integer enim. At varius vel pharetra vel turpis nunc eget lorem dolor. Fames ac turpis egestas maecenas pharetra convallis posuere morbi leo. In hendrerit gravida rutrum quisque. Quis eleifend quam adipiscing vitae proin sagittis nisl rhoncus. Sodales ut etiam sit amet nisl purus. Faucibus et molestie ac feugiat sed.",
            "Arcu cursus vitae congue mauris. Neque sodales ut etiam sit amet. Platea dictumst vestibulum rhoncus est pellentesque elit ullamcorper dignissim. Nec ultrices dui sapien eget mi. Donec et odio pellentesque diam volutpat commodo. Viverra orci sagittis eu volutpat odio. In hendrerit gravida rutrum quisque non. At tempor commodo ullamcorper a. Feugiat nibh sed pulvinar proin gravida. Amet risus nullam eget felis. Massa id neque aliquam vestibulum. Felis donec et odio pellentesque diam volutpat commodo sed. Faucibus pulvinar elementum integer enim neque volutpat.",
            "Id diam maecenas ultricies mi eget mauris pharetra et ultrices. Ut placerat orci nulla pellentesque. Maecenas volutpat blandit aliquam etiam erat velit scelerisque in. Est ultricies integer quis auctor elit. At in tellus integer feugiat. Velit dignissim sodales ut eu. Ultrices vitae auctor eu augue ut. Egestas pretium aenean pharetra magna ac placerat. Feugiat nisl pretium fusce id. At auctor urna nunc id cursus metus. Tincidunt augue interdum velit euismod in pellentesque massa. Morbi enim nunc faucibus a. Id semper risus in hendrerit gravida rutrum quisque. Ultrices sagittis orci a scelerisque purus semper eget duis."
        ]
    }),
  }
</script>
