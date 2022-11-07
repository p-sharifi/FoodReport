<template>
  <v-card flat>
    <v-card-text>
      <v-dialog v-model="show" max-width="80%" @keyup.esc="show = false">
        <v-card>
          <v-img src="../../assets/images/login.png" alt="" contain />
        </v-card>
      </v-dialog>
      <v-img
        src="../../assets/images/login.png"
        alt=""
        contain
        @click="show = true"
      />
      <p>
        {{ firstPDesc }}
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
export default {
  name: "HowToLoginDescription",
};
</script>

<style scoped></style>
