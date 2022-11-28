<template>
  <v-app-bar app color="primary" dark elevation="20">
    <v-btn to="/" icon>
      <v-icon
          class="mb-1"
          x-large
      >mdi-home</v-icon>
    </v-btn>
    <v-spacer />
    <span class="title font-weight-black "
      >   گزارش دریافت غذا ساختمان های شرکت خدمات انفورماتیک
    </span>
    <v-spacer />
  </v-app-bar>
</template>

<script>
export default {
  name: "Header",
};
</script>

<style scoped></style>
