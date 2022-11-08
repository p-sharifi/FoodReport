<template>
  <div>
  <v-dialog v-model="show" max-width="80%" @keyup.esc="show = false">
    <v-card>
      <v-img
          :src="inner-image"
          alt=""
          contain />
    </v-card>
  </v-dialog>
    <v-img
        :src="outer-image"
        alt=""
        contain
        @click="show = true"
    ></v-img>
  </div>
</template>
<script>
export default {
  props:['outer-image','inner-image'],
  name: "ImageTool",
  data: ()=>({
    show:false
  })
}
</script>

<style scoped>

</style>