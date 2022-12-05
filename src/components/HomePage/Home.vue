<template>
  <v-container fluid>
    <v-row class="mt-2" dense>
      <v-col
        cols="12"
        class="pa-2"
        md="3"
        v-for="(cardItem) in newCardItems"
        :key="cardItem.counter"
      >
        <CardItem
          :personnelName="cardItem.personnelName"
          :image="cardItem.image"
          :personnelCode="cardItem.personnelCode"
          :foodName="cardItem.foodName"
          :counter="cardItems.length - index"
        />
      </v-col>
      <v-col
        cols="12"
        class="pa-2"
        md="2"
        v-for="(cardItem, index) in oldCardItems"
        :key="cardItem.counter"
      >
        <CardItem
          :key="cardItem.personnelName"
          :personnelName="cardItem.personnelName"
          :image="cardItem.image"
          :personnelCode="cardItem.personnelCode"
          :foodName="cardItem.foodName"
          :counter="cardItems.length - index"
        />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import CardItem from "@/components/HomePage/CardItem";

export default {
  name: "Home",
  components: { CardItem },
  data: () => ({
    cardItems: [
      {
        personnelName: "نگار دادگری",
        image: require("@/assets/images/Users/3691.jpg"),
        personnelCode: "3691",
        foodName: "باقالی پلو با ماهیچه",
        counter: "1",
      },
      {
        image: require("@/assets/images/Users/309.png"),
        personnelName: "لیلا بیات",
        personnelCode: "309",
        foodName: "باقالی پلو با ماهیچه",
        counter: "2",
      },
      {
        image: require("@/assets/images/Users/3217.png"),
        personnelName: "پریسا شریفی",
        personnelCode: "3217",
        foodName: "چلو مرغ شکم پر",
        counter: "3",
      },
      {
        image: require("@/assets/images/Users/662.png"),
        personnelName: "نیلوفر خدری",
        personnelCode: "662",
        foodName: "کته کباب ترش",
        counter: "4",
      },
      {
        image: require("@/assets/images/Users/3848.jpg"),
        personnelName: "سمانه زارع",
        personnelCode: "3848",
        foodName: "پلو تن",
        counter: "5",
      },
      {
        image: require("@/assets/images/Users/3567.jpg"),
        personnelName: "سهیلا قشقاوی",
        personnelCode: "3567",
        foodName: "چلو خورشت قرمه سبزی",
        counter: "6",
      },
      {
        image: require("@/assets/images/Users/3596.jpg"),
        personnelName: "مطهره برزگری",
        personnelCode: "3596",
        foodName: "چلو خورشت قیمه",
        counter: "7",
      },
      {
        image: require("@/assets/images/Users/2140.png"),
        personnelName: "عباس زینالی",
        personnelCode: "2140",
        foodName: "کوکو سیب زمینی",
        counter: "8",
      },
      {
        image: require("@/assets/images/Users/3101.png"),
        personnelName: "مهدی شریفی",
        personnelCode: "3101",
        foodName: "ماکارونی",
        counter: "9",
      },
      {
        image: require("@/assets/images/Users/684.png"),
        personnelName: "علی حسین شکیب",
        personnelCode: "684",
        foodName: "چلو خورشت قرمه سبزی",
        counter: "10",
      },
      {
        image: require("@/assets/images/Users/2977.png"),
        personnelName: "فرناز کلباسی",
        personnelCode: "2977",
        foodName: "خوراک جوجه ترش",
        counter: "11",
      },
      {
        image: require("@/assets/images/Users/685.png"),
        personnelName: "حسن قدیمی",
        personnelCode: "685",
        foodName: "خوراک جوجه کباب",
        counter: "12",
      },
      {
        image: require("@/assets/images/Users/712.png"),
        personnelName: "مجتبی تورانی",
        personnelCode: "712",
        foodName: "زرشک پلو با مرغ",
        counter: "13",
      },
      {
        image: require("@/assets/images/Users/1102.png"),
        personnelName: "محمد محصولی",
        personnelCode: "1102",
        foodName: "خوراک جوجه کباب",
        counter: "14",
      },
      {
        image: require("@/assets/images/Users/735.png"),
        personnelName: "کیارش عمرانی",
        personnelCode: "735",
        foodName: "چلو خورشت قرمه سبزی",
        counter: "15",
      },
      {
        image: require("@/assets/images/Users/1082.png"),
        personnelName: "سپیده خلیلی",
        personnelCode: "1082",
        foodName: "زرشک پلو با مرغ",
        counter: "16",
      },
      {
        image: require("@/assets/images/Users/1095.png"),
        personnelName: "بهاره حبیب وند",
        personnelCode: "3991",
        foodName: "چلو خورشت قرمه سبزی",
        counter: "17",
      },
      {
        image: require("@/assets/images/Users/1099.png"),
        personnelName: "علیرضا معصوم",
        personnelCode: "1099",
        foodName: "زرشک پلو با مرغ",
        counter: "18",
      },
    ],
  }),
  computed: {
    newCardItems() {
      return this.cardItems.slice(0, 4);
    },
    oldCardItems() {
      return this.cardItems.slice(4);
    },
  },
};
</script>

<style scoped></style>
