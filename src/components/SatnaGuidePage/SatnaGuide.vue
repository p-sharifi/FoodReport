<template>
  <v-container>
    <v-spacer/>
    <ToolbarDesc
        title="راهنمای کاربری سامانه رفع مغایرت ساتنا"
        first-tab="نحوه ورود به سامانه"
        second-tab="ارسال مغایرت و بررسی توسط بانک مبدا"
        third-tab="دریافت مغایرت بانک مقصد از بانک مبدا و پیگیری"
        first-p-desc="ورود به سیستم"
        second-p-desc="ثبت مغایرت و بررسی توسط رئیس مبدا"
        third-p-desc="بررسی مغایرت توسط رییس مقصد"
    />
  </v-container>
</template>

<script>
import ToolbarDesc from "../App/ToolbarDesc";
export default {
  name: "SatnaGuide",
  components: {ToolbarDesc},
};
</script>

<style scoped></style>
