<template>
  <v-container >
    <v-row class="text-center"
    >

      <v-col co ls="12" >
        <v-img
            class="mx-auto"
            max-width="100"
            max-height="200"
          :src="require('../assets/Logo/logo.png')"
          contain
          height="80"
        />

      </v-col >
      <v-col >
      <v-card color="test"
      class="ma-lg-16"
      max-width="390"

      >
        <v-img
        :src="require('../assets/Images/ساتنا.jpg')"
        height="200px"
        >
        </v-img>
      <v-card-title class="justify-xl-center">
        رفع مغایرت ساتنا
      </v-card-title>
        <v-card-subtitle class="font-weight-bold">
          راهنمای کاربری سامانه ساتنا
        </v-card-subtitle>
        <v-card-actions>
          <v-btn
          color="blue"
          text
          >
            راهنما
          </v-btn>
          <v-spacer>
          </v-spacer>
          <v-btn
              icon
              @click="show = !show"
          >
            <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
          </v-btn>
        </v-card-actions>
        <v-expand-transition>
          <div
          v-show="show"
          >
            <v-divider></v-divider>
            <v-card-text>
              عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت بین بانک ها از طریق این سامانه قابل انجام و پیگیری میباشد
            </v-card-text>

          </div>
        </v-expand-transition>

      </v-card>
      </v-col>
      <v-col >
        <v-card
            class="ma-lg-16"
            max-width="390"
        >
          <v-img
              :src="require('../assets/Images/ساتنا.jpg')"
              height="200px"
          >
          </v-img>
          <v-card-title class="justify-xl-center">
            رفع مغایرت ساتنا
          </v-card-title>
          <v-card-subtitle class="font-weight-bold">
            راهنمای کاربری سامانه ساتنا
          </v-card-subtitle>
          <v-card-actions>
            <v-btn
                color="blue"
                text
            >
              راهنما
            </v-btn>
            <v-spacer>
            </v-spacer>
            <v-btn
                icon
                @click="show1 = !show1"
            >
              <v-icon>{{ show1 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
            </v-btn>
          </v-card-actions>
          <v-expand-transition>
            <div
                v-show="show1"
            >
              <v-divider></v-divider>
              <v-card-text>
                عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت بین بانک ها از طریق این سامانه قابل انجام و پیگیری میباشد
              </v-card-text>

            </div>
          </v-expand-transition>

        </v-card>
      </v-col>
    </v-row>
  </v-container>

</template>
<style scoped>
.test{
  background-color:snow;
}


</style>
<script>
export default {
  name: "HelloWorld",

  data : () => ({
    show1: false,
    show : false,
  })

  }


</script>
