<template>
  <v-container>
    <v-img
      class="mx-auto"
      max-width="200"
      max-height="200"
      src="@/assets/logo/logo.png"
      contain
      height="80"
      style="top: 0; left: auto; right: auto"
    />
    <v-row class="mt-4" dense>
      <GuideItem
        v-for="guideItem in guidItems"
        :key="guideItem.title"
        :title="guideItem.title"
        :image="guideItem.image"
        :info="guideItem.info"
        :subtitle="guideItem.subtitle"
      />
    </v-row>
  </v-container>
</template>

<script>
import GuideItem from "@/components/HomePage/GuideItem";

export default {
  name: "Home",
  components: { GuideItem },
  data: () => ({
    guidItems: [
      {
        title: "رفع مغایرت چکاوک",
        image: require("@/assets/images/chakavak.png"),
        info: "عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت چکاوک بین بانک ها",
        subtitle: "راهنمای کاربری سامانه چکاوک",
      },
      {
        title: " رفع مغایرت ساتنا",
        image: require("@/assets/images/Satna.jpg"),
        info: "عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت ساتنا بین بانک ها",
        subtitle: "راهنمای کاربری سامانه ساتنا",
      },
      {
        title: " رفع مغایرت پایا",
        image: require("@/assets/images/Paya.png"),
        info: "عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت پایا بین بانک ها",
        subtitle: "راهنمای کاربری سامانه پایا",
      },
      {
        title: " رفع مغایرت پل",
        image: require("@/assets/images/Samane-Pol.jpg"),
        info: "عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت پل بین بانک ها",
        subtitle: "راهنمای کاربری سامانه پل",
      },
    ],
  }),
};
</script>

<style scoped></style>
