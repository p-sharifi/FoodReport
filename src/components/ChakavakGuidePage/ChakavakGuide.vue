<template>
  <v-container>
    <ToolbarDesc :title="title" :tabs="tabs"/>
  </v-container>
</template>

<script>
import ToolbarDesc from "../App/ToolbarDesc";
import HowToLogin from "./HowToLogin";
import SourceBank from "./SourceBank";
import DestinationBank from "./DestinationBank";
import AdminGuide from "./AdminGuide";

export default {
  name: "ChakavakGuide",
  components: {ToolbarDesc},
  data: () => ({
    title: "راهنمای کاربری سامانه چکاوک",
    tabs: [
      {
        title: "نحوه ورود به سامانه",
        icon: "mdi-login-variant",
        content: HowToLogin,
      },
      {
        title: "ثبت و بررسی مغایرت توسط بانک مبدا",
        icon: "mdi-pencil-box-multiple-outline",
        content: SourceBank,
      },
      {
        title: "بررسی مغایرت توسط بانک مقصد",
        icon: "mdi-credit-card-search-outline",
        content: DestinationBank,
      },
      {
        title: "راهنمای راهبر سامانه",
        icon: "mdi-folder-account-outline",
        content: AdminGuide,

      },
    ],
  }),
};
</script>

<style scoped></style>
