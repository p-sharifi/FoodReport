<template>
  <v-col cols="12" class="pa-2  d-flex justify-center" md="2">
    <v-card width="300" height="400" elevation="30" color="light-blue lighten-5" >
      <v-img :src="image" height="200px" width="400px"  contain />
       <v-card-title class="type">{{ personnelName }}  </v-card-title>
      <v-card-subtitle class="type">{{ personnelCode }}</v-card-subtitle>
      <v-card-text class="type">{{ foodName }} </v-card-text>
      <v-card-actions>
        <v-chip class="v-size--large" color="green" text-color="white">
          {{ counter }}
          <v-icon right  >
            mdi-counter
          </v-icon>
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
  data: () => ({

  }),
};
</script>

<style>
.type
{
  font-weight: bold;
  font-size: 19px;
  justify-content: center;
  justify-items: center;
  color: crimson;
}
</style>
