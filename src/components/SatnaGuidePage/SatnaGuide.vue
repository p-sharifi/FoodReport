<template>
  <v-container>
    <ToolbarDesc :title="title" :tabs="childTabs" />
  </v-container>
</template>

<script>
import HowToLoginDescription from "../SatnaGuidePage/HowToLoginDescription";
import SourceConflict from "../SatnaGuidePage/SourceConflict";
import DestinationConflict from "../SatnaGuidePage/DestinationConflict";
import ToolbarDesc from "../App/ToolbarDesc";

export default {
  name: "SatnaGuide",
  components: { ToolbarDesc },
  data: () => ({
    title: "راهنمای کاربری سامانه ساتنا",
    childTabs: [
      {
        title: "نحوه ورود به سامانه",
        icon: "mdi-login-variant",
        content: HowToLoginDescription,
      },
      {
        title: "ثبت و بررسی مغایرت توسط بانک مبدا",
        icon: "mdi-pencil-box-multiple-outline",
        content: SourceConflict,
      },
      {
        title: "بررسی مغایرت توسط بانک مقصد",
        icon: "mdi-credit-card-search-outline",
        content: DestinationConflict,
      },
    ],
  }),
};
</script>

<style scoped></style>
