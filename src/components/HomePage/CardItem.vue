<template>
  <v-card
    class="mx-auto"
    style="position: relative"
    max-width="344"
    height="250"
    outlined
  >
    <v-list-item three-line>
      <v-list-item-content>
        <div class="text-body-2 mb-4">۱۲ آذر ۱۴۰۱</div>
        <v-list-item-title class="text-body-1 mb-1 text-wrap">
          {{ personnelName }}
        </v-list-item-title>
        <v-list-item-subtitle>{{ personnelCode }}</v-list-item-subtitle>
        <v-list-item-title class="text-body-1 mb-1 text-wrap mt-3">
        </v-list-item-title>
        <v-list-item-title class="text-body-1 mb-1 text-wrap mt-3">
          ساختمون
        </v-list-item-title>
      </v-list-item-content>
      <v-list-item-avatar size="100" color="white">
        <v-img
          :src="image"
          height="100px"
          width="150px"
          contain
          class="d-flex flex-row-reverse"
        />
      </v-list-item-avatar>
    </v-list-item>

    <v-card-actions>
      {{ foodName }}
    </v-card-actions>
    <v-chip
      style="position: absolute; bottom: 6px; left: 6px"
      color="secondary"
    >
      {{ counter }}
    </v-chip>
  </v-card>
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
