<template>
  <v-app>
    <Header />
    <v-main>
      <v-img
        src="@/assets/Images/CenteralBank.png"
        style="
          position: fixed;
          top: 0;
          left: 0;
          bottom: 0;
          right: 0;
          z-index: 0;
        "
      />
      <router-view />
    </v-main>
    <Footer />
  </v-app>
</template>

<script>
import Footer from "@/components/App/Footer";
import Header from "@/components/App/Header";

export default {
  name: "app",
  components: { Header, Footer },
  data: () => ({}),
  methods: {},
};
</script>

<style>
/*.background {*/
/*  background-image: url("./assets/Images/CenteralBank.png");*/
/*  background-size: cover;*/
/*  background-repeat: no-repeat;*/
/*  background-position-y: -150px;*/
/*  overflow: hidden;*/
/*}*/
</style>
