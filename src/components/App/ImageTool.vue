<template>
  <div>
    <v-dialog v-model="show" max-width="80%" @keyup.esc="show = false">
      <v-card>
        <v-btn @click="show = false" icon><v-icon>mdi-close</v-icon></v-btn>
        <v-img :src="src" alt="image" contain />
      </v-card>
    </v-dialog>
    <v-img
      class="image"
      :src="src"
      alt="image"
      contain
      @click="show = true"
    ></v-img>
  </div>
</template>
<script>
export default {
  name: "ImageTool",
  props: ["src"],
  data: () => ({
    show: false,
  }),
};
</script>

<style scoped>
.image:hover {
  cursor: pointer;
}
</style>
