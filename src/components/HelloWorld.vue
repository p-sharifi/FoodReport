<template>
  <v-container>
    <v-row class="text-center">
      <v-col co ls="12">
        <v-img
          :src="require('../assets/Logo/logo.png')"
          class="my-3"
          contain
          height="80"
        />
      </v-col>
      <v-alert
      class="my-5"
      color="blue"
      outlined
      shaped
      text
      >
      راهنما سامانه چکاوک، ساتنا، پایا و پل
      </v-alert>
      <v-carousel
        hide-delimiters

          >
        <v-carousel-item
            v-for="(item,i) in items"
            :key="i"
            :src="item.src"

        ></v-carousel-item>
      </v-carousel>
      <v-col class="mb-10">

      </v-col>

    </v-row>
  </v-container>

</template>

<script>
export default {
  name: "HelloWorld",

  data  () {
    return {
      items: [
        {
          src: 'https://www.rade.ir/wp-content/uploads/2020/12/Paya.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/sky.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/bird.jpg',
        },
        {
          src: 'https://cdn.vuetifyjs.com/images/carousel/planet.jpg',
        },
      ],
    }
  },

      };

</script>
