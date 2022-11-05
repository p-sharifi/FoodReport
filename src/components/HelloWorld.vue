<template>
  <v-container
      class="app"
  >
    <v-row class="text-center"
    >

      <v-col cols="12"
      >
        <v-row>
          <v-img
              class="mx-auto"
              max-width="200"
              max-height="200"
              :src="require('../assets/Logo/logo.png')"
              contain
              height="80"
          />
        </v-row>
      </v-col>
      <v-row>
        <v-col cols="12">
          <v-card color="basil"
                  class="ma-lg-13"
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
                  عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت ساتنا بین بانک ها
                </v-card-text>

              </div>
            </v-expand-transition>

          </v-card>

          <v-card
              color="basil"
              class="ma-xl-13"
              max-width="390"
          >
            <v-img
                :src="require('../assets/Images/Samane-Pol.jpg')"
                height="200px"
            >
            </v-img>
            <v-card-title class="justify-xl-center">
              رفع مغایرت پل
            </v-card-title>
            <v-card-subtitle class="font-weight-bold">
              راهنمای کاربری سامانه پل
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
                  @click="show2 = !show2"
              >
                <v-icon>{{ show2 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div
                  v-show="show2"
              >
                <v-divider></v-divider>
                <v-card-text>
                  عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت پل بین بانک ها
                </v-card-text>

              </div>
            </v-expand-transition>

          </v-card>

        </v-col>
      </v-row>
      <v-row>
        <v-col cols="auto">

          <v-card color="basil"
                  class="ma-lg-13"
                  max-width="390"

          >
            <v-img
                :src="require('../assets/Images/Paya.png')"
                height="200px"
            >
            </v-img>
            <v-card-title class="justify-xl-center">
              رفع مغایرت پایا
            </v-card-title>
            <v-card-subtitle class="font-weight-bold">
              راهنمای کاربری سامانه پایا
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
                  @click="show3 = !show3"
              >
                <v-icon>{{ show3 ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
              </v-btn>
            </v-card-actions>
            <v-expand-transition>
              <div
                  v-show="show3"
              >
                <v-divider></v-divider>
                <v-card-text>
                  عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت پایا بین بانک ها
                </v-card-text>

              </div>
            </v-expand-transition>

          </v-card>
          <v-card
              color="basil"
              class="ma-xl-13"
              max-width="390"
          >
            <v-img
                :src="require('../assets/Images/چکاوک.jpg')"
                height="200px"
            >
            </v-img>
            <v-card-title class="justify-xl-center">
              رفع مغایرت چکاوک
            </v-card-title>
            <v-card-subtitle class="font-weight-bold">
              راهنمای کاربری سامانه چکاوک
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
                  عودت و استرداد اشتباه واریزی و موارد مختلف مغایرت چکاوک بین بانک ها
                </v-card-text>

              </div>
            </v-expand-transition>

          </v-card>
        </v-col>
      </v-row>


    </v-row>
  </v-container>

</template>
<style>
.basil {
  background-color: #E3F2FD !important;
}

.app {
  background: url('../assets/Images/CenteralBank.png');
  background-size: cover;
  background-origin: unset;
}


</style>
<script>
export default {
  name: "HelloWorld",

  data: () => ({
    show: false,
    show1: false,
    show2: false,
    show3: false,
  })

}


</script>
