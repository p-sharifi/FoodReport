<template>
  <v-app>
    <v-app-bar app color="primary" dark> </v-app-bar>

    <v-main>
      <router-view />

    </v-main>
  </v-app>
</template>
<style>
@font-face {
  font-family: "IRAN Sans";
  src: url("assets/Css/IRANSans-Regular.otf") format("otd");
}
div {
  font-family: "IRAN Sans";
}
</style>

<script>
export default {
    data: () => ({ isMobile: false }),

    beforeDestroy () {
      if (typeof window === 'undefined') return

      window.removeEventListener('resize', this.onResize, { passive: true })
    },

    mounted () {
      this.onResize()

      window.addEventListener('resize', this.onResize, { passive: true })
    },

    methods: {
      onResize () {
        this.isMobile = window.innerWidth < 600
      },
    },
  }
</script>
