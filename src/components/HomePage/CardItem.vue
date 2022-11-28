<template>
  <v-col cols="12" class="pa-2 d-flex justify-center" md="2">
    <v-card
      width="300"
      height="300"
      elevation="20"
      color="blue lighten-5"
    >
      <div>
        <v-img :src="image"  height="100px" width="150px" contain class="mx-auto"/>
      </div>
      <v-card-title class="type">{{ personnelName }}</v-card-title>
      <v-divider />
      <v-card-subtitle class="type text-center">{{
        personnelCode
      }}</v-card-subtitle>
      <v-card-text class="type text-center">{{ foodName }} </v-card-text>
      <v-card-actions>
        <v-chip color="green" text-color="white" label>
          {{ counter }}
          <v-icon right> mdi-food-fork-drink </v-icon>
        </v-chip>
      </v-card-actions>
    </v-card>
  </v-col>
</template>
<script>
export default {
  name: "cardItem",
  components: {},
  props: ["image", "personnelName", "personnelCode", "foodName", "counter"],
};
</script>
<style>
.type {
  font-weight: bold;
  font-size: 19px;
  justify-content: center;
  justify-items: center !important;
  color: black;
}

</style>
