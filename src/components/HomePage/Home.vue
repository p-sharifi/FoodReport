<template>
  <v-container>
    <v-img
      class="mx-auto"
      max-width="200"
      max-height="200"
      src="@/assets/Logo/logo.png"
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

    <!--          <v-card color="basil" class="ma-xl-13" max-width="390">-->
    <!--            <v-img-->
    <!--              :src="require('../assets/Images/Samane-Pol.jpg')"-->
    <!--              height="200px"-->
    <!--            >-->
    <!--            </v-img>-->
    <!--            <v-card-title class="justify-xl-center">-->
    <!--              رفع مغایرت پل-->
    <!--            </v-card-title>-->
    <!--            <v-card-subtitle class="font-weight-bold">-->
    <!--              راهنمای کاربری سامانه پل-->
    <!--            </v-card-subtitle>-->
    <!--            <v-card-actions>-->
    <!--              <v-btn color="blue" text> راهنما</v-btn>-->
    <!--              <v-spacer></v-spacer>-->
    <!--              <v-btn icon @click="show2 = !show2">-->
    <!--                <v-icon-->
    <!--                  >{{ show2 ? "mdi-chevron-up" : "mdi-chevron-down" }}-->
    <!--                </v-icon>-->
    <!--              </v-btn>-->
    <!--            </v-card-actions>-->
    <!--            <v-expand-transition>-->
    <!--              <div v-show="show2">-->
    <!--                <v-divider></v-divider>-->
    <!--                <v-card-text>-->
    <!--                  عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت پل بین بانک-->
    <!--                  ها-->
    <!--                </v-card-text>-->
    <!--              </div>-->
    <!--            </v-expand-transition>-->
    <!--          </v-card>-->
    <!--        </v-col>-->
    <!--      </v-row>-->
    <!--      <v-row>-->
    <!--        <v-col cols="auto">-->
    <!--          <v-card color="basil" class="ma-lg-13" max-width="390">-->
    <!--            <v-img :src="require('../assets/Images/Paya.png')" height="200px">-->
    <!--            </v-img>-->
    <!--            <v-card-title class="justify-xl-center">-->
    <!--              رفع مغایرت پایا-->
    <!--            </v-card-title>-->
    <!--            <v-card-subtitle class="font-weight-bold">-->
    <!--              راهنمای کاربری سامانه پایا-->
    <!--            </v-card-subtitle>-->
    <!--            <v-card-actions>-->
    <!--              <v-btn color="blue" text> راهنما</v-btn>-->
    <!--              <v-spacer></v-spacer>-->
    <!--              <v-btn icon @click="show3 = !show3">-->
    <!--                <v-icon-->
    <!--                  >{{ show3 ? "mdi-chevron-up" : "mdi-chevron-down" }}-->
    <!--                </v-icon>-->
    <!--              </v-btn>-->
    <!--            </v-card-actions>-->
    <!--            <v-expand-transition>-->
    <!--              <div v-show="show3">-->
    <!--                <v-divider></v-divider>-->
    <!--                <v-card-text>-->
    <!--                  عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت پایا بین-->
    <!--                  بانک ها-->
    <!--                </v-card-text>-->
    <!--              </div>-->
    <!--            </v-expand-transition>-->
    <!--          </v-card>-->
    <!--          <v-card color="basil" class="ma-xl-13" max-width="390">-->
    <!--            <v-img :src="require('../assets/Images/چکاوک.jpg')" height="200px">-->
    <!--            </v-img>-->
    <!--            <v-card-title class="justify-xl-center">-->
    <!--              رفع مغایرت چکاوک-->
    <!--            </v-card-title>-->
    <!--            <v-card-subtitle class="font-weight-bold">-->
    <!--              راهنمای کاربری سامانه چکاوک-->
    <!--            </v-card-subtitle>-->
    <!--            <v-card-actions>-->
    <!--              <v-btn color="blue" text> راهنما</v-btn>-->
    <!--              <v-spacer></v-spacer>-->
    <!--              <v-btn icon @click="show1 = !show1">-->
    <!--                <v-icon-->
    <!--                  >{{ show1 ? "mdi-chevron-up" : "mdi-chevron-down" }}-->
    <!--                </v-icon>-->
    <!--              </v-btn>-->
    <!--            </v-card-actions>-->
    <!--            <v-expand-transition>-->
    <!--              <div v-show="show1">-->
    <!--                <v-divider></v-divider>-->
    <!--                <v-card-text>-->
    <!--                  عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت چکاوک بین-->
    <!--                  بانک ها-->
    <!--                </v-card-text>-->
    <!--              </div>-->
    <!--            </v-expand-transition>-->
    <!--          </v-card>-->
    <!--        </v-col>-->
    <!--      </v-row>-->
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
        title: " رفع مغایرت ساتنا",
        image: require("@/assets/Images/ساتنا.jpg"),
        info: "عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت ساتنا بین بانک ها",
        subtitle: "راهنمای کاربری سامانه ساتنا",
      },
      {
        title: " رفع مغایرت ساتنا",
        image: require("@/assets/Images/ساتنا.jpg"),
        info: "عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت ساتنا بین بانک ها",
        subtitle: "راهنمای کاربری سامانه ساتنا",
      },
    ],
  }),
};
</script>

<style scoped></style>
