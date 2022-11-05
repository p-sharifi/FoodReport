<template>
  <v-app>

    <v-card
        class="flex"
        color="blue darken-4"
        flat
        tile
        elevation="15"
        dark
        height="55"
    >
      <v-card-title
          class="justify-xl-center"
      >
        <strong class="justify-space-between">
          راهنمای سامانه های رفع مغایرت بانک مرکزی
        </strong>
      </v-card-title>

    </v-card>
    <v-spacer></v-spacer>
    <v-main>
      <router-view/>

    </v-main>
    <v-footer
        dark
        padless

    >
      <v-card
          class="flex"
          color="blue darken-4"
          flat
          tile
          elevation="15"
          height="55"
      >
        <v-card-title
            class="justify-xl-center"
        >
          <strong class="justify-space-between">
            در صورت بروز هر گونه مشکل در سامانه با شماره 02172351500 در تماس باشید.
            <strong>شرکت خدمات انفورماتیک</strong>
            <v-spacer></v-spacer>
          </strong>
        </v-card-title>

      </v-card>
    </v-footer>
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
  name: 'app',
  data: () => ({
    isMobile: false
  }),

  beforeDestroy() {
    if (typeof window === 'undefined') return

    window.removeEventListener('resize', this.onResize, {passive: true})
  },

  mounted() {
    this.onResize()

    window.addEventListener('resize', this.onResize, {passive: true})
  },

  methods: {
    onResize() {
      this.isMobile = window.innerWidth < 600
    },
  },
}
</script>
