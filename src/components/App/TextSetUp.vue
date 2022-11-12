<template>
  <div>
    <h3 class="style">
      {{ text }}
    </h3>
  </div>
</template>

<script>
export default {
  name: "TextSetUp",
  props: ["text"],
}
</script>

<style scoped>
.style {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>