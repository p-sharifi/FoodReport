<template>
  <v-container>
    <ToolbarDesc :tabs="tabs" :title="title" />
  </v-container>
</template>

<script>
import ToolbarDesc from "../App/ToolbarDesc";
import HowToLoginDescription from "@/components/SatnaGuidePage/HowToLoginDescription";
import SourceConflict from "@/components/SatnaGuidePage/SourceConflict";
import DestinationConflict from "@/components/SatnaGuidePage/DestinationConflict";
export default {
  name: "SatnaGuide",
  components: { ToolbarDesc },
  data: () => ({
    title: "راهنمای کاربری سامانه رفع مغایرت ساتنا",
    tabs: [
      {
        title: "نحوه ورود به سامانه",
        icon: "mdi-account",
        content: HowToLoginDescription,
      },
      {
        title: "ارسال مغایرت و بررسی توسط بانک مبدا",
        icon: "mdi-lock",
        content: SourceConflict,
      },
      {
        title: "دریافت مغایرت بانک مقصد از بانک مبدا و پیگیری",
        icon: "mdi-access-point",
        content: DestinationConflict,
      },
    ],
  }),
};
</script>

<style scoped></style>
