<template>
  <v-card flat>
    <v-card-text>
      <ImageTool
          inner-image="@/src/assets/images/login.png"
          outer-image="@/src/assets/images/login.png"
      />
      <p>
       همانند تصویر ذیل جهت ورود به سامانه میتوانید
        نام کاربری و رمز عبور خود را وارد کنید و کلمه ورود را انتخاب نمایید.
      </p>

    </v-card-text>
  </v-card>
</template>

<script>

import ImageTool from "../App/ImageTool";

export default {
  name: "HowToLoginDescription",
  data: ()=>({
    show:false,
    component:{
      ImageTool
    },

  })
}
</script>

<style scoped></style>
