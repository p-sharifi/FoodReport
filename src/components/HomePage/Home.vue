<template>
  <v-container fluid>

    <v-row class="mt-2" dense>
      <CardItem
          v-for="cardItem in cardItems"
          :key="cardItem.personnelName"
          :personnelName="cardItem.personnelName"
          :image="cardItem.image"
          :personnelCode="cardItem.personnelCode"
          :foodName="cardItem.foodName"
          :counter="cardItem.counter"
      />
    </v-row>
  </v-container>
</template>

<script>


import CardItem from "@/components/HomePage/CardItem";

export default {
  name: "Home",
  components: {CardItem},
  data: () => ({
    cardItems: [
      {
        personnelName: "نگار دادگری",
        image: require("@/assets/images/Users/11.jpg"),
        personnelCode:"3691",
        foodName:"باقالی پلو با ماهیچه",
        counter:"1"
      },
      {
        image: require("@/assets/images/Users/1.jpg"),
        personnelName:"مانی رضایی",
        personnelCode:"3698",
        foodName:"باقالی پلو با ماهیچه",
        counter:"2"

      },
      {

        image: require("@/assets/images/Users/9.jpg"),
        personnelName:"پریسا شریفی",
        personnelCode:"3217",
        foodName:"چلو مرغ شکم پر",
        counter:"3"
      },
      {
        image: require("@/assets/images/Users/8.jpg"),
        personnelName:"نیما شریفی",
        personnelCode:"3218",
        foodName:"کته کباب ترش",
        counter:"4"
      },
      {
        image: require("@/assets/images/Users/5.png"),
        personnelName:"سمانه زارع",
        personnelCode:"3838",
        foodName:"پلو تن",
        counter:"5"
      },
      {
        image: require("@/assets/images/Users/1.jpg"),
        personnelName:"سهیلا قشقاوی",
        personnelCode:"3174",
        foodName:"لوبیا پلو",
        counter:"6"
      },
      {
        image: require("@/assets/images/Users/7.png"),
        personnelName:"مطهره بازرگانی",
        personnelCode:"3362",
        foodName:"چلو خورشت قیمه",
        counter:"7"
      },
      {
        image: require("@/assets/images/Users/6.jpg"),
        personnelName:"عباس زینالی",
        personnelCode:"2041",
        foodName:"کوکو سیب زمینی",
        counter:"8"
      },
      {
        image: require("@/assets/images/Users/3.jpg"),
        personnelName:"مهدی شریفی",
        personnelCode:"3141",
        foodName:"ماکارونی",
        counter:"9"
      },
      {
        image: require("@/assets/images/Users/4.png"),
        personnelName:"مسعود قدیمی",
        personnelCode:"3991",
        foodName:"چلو خورشت قرمه سبزی",
        counter:"10"
      },
      {
        image: require("@/assets/images/Users/13.png"),
        personnelName:"احمد احمدی",
        personnelCode:"3065",
        foodName:"زرشک پلو با مرغ",
        counter:"11"
      },
      {
        image: require("@/assets/images/Users/10.jpg"),
        personnelName:"رضا قویدل",
        personnelCode:"3525",
        foodName:"خوراک جوجه کباب",
        counter:"12"
      },
      {
        image: require("@/assets/images/Users/13.png"),
        personnelName:"احمد احمدی",
        personnelCode:"3065",
        foodName:"زرشک پلو با مرغ",
        counter:"11"
      },
      {
        image: require("@/assets/images/Users/10.jpg"),
        personnelName:"رضا قویدل",
        personnelCode:"3525",
        foodName:"خوراک جوجه کباب",
        counter:"12"
      },
      {
        image: require("@/assets/images/Users/4.png"),
        personnelName:"مسعود قدیمی",
        personnelCode:"3991",
        foodName:"چلو خورشت قرمه سبزی",
        counter:"10"
      },
      {
        image: require("@/assets/images/Users/13.png"),
        personnelName:"احمد احمدی",
        personnelCode:"3065",
        foodName:"زرشک پلو با مرغ",
        counter:"11"
      },
      {
        image: require("@/assets/images/Users/4.png"),
        personnelName:"مسعود قدیمی",
        personnelCode:"3991",
        foodName:"چلو خورشت قرمه سبزی",
        counter:"10"
      },
      {
        image: require("@/assets/images/Users/13.png"),
        personnelName:"احمد احمدی",
        personnelCode:"3065",
        foodName:"زرشک پلو با مرغ",
        counter:"11"
      },
    ],
  }),
};
</script>

<style scoped></style>