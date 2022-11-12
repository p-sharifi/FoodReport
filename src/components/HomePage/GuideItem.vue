<template>
  <v-col cols="12" class="pa-5 d-flex justify-center" md="6">
    <v-card max-width="390" elevation="12" color="light-blue lighten-5">
      <v-img :src="image" height="200px" />
      <v-card-title class="font-weight-bold">{{ title }}</v-card-title>
      <v-card-subtitle class="font-weight-bold">{{ subtitle }}</v-card-subtitle>
      <v-card-actions>
        <v-btn color="indigo darken-4" outlined :to="to">راهنما</v-btn>
        <v-spacer></v-spacer>
        <v-btn icon @click="showInfo = !showInfo">
          <v-icon
            >{{ showInfo ? "mdi-chevron-up" : "mdi-chevron-down" }}
          </v-icon>
        </v-btn>
      </v-card-actions>
      <v-expand-transition>
        <div v-show="showInfo">
          <v-divider></v-divider>
          <v-card-text>{{ info }}</v-card-text>
        </div>
      </v-expand-transition>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "GuideItem",
  props: ["image", "title", "subtitle", "info", "to"],
  data: () => ({
    showInfo: false,
  }),
};
</script>
