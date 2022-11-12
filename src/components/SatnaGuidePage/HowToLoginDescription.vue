<template>
  <v-card flat>
    <v-card-text>
      <TextSetUp
          :text="text1"
      />
      <ImageTool :src="require('@/assets/images/login.png')"/>
      <TextSetUp
          :text="text2"
      />
    </v-card-text>
  </v-card>
</template>

<script>
import ImageTool from "@/components/App/ImageTool";
import TextSetUp from "../App/TextSetUp";

export default {
  name: "HowToLoginDescription",
  components: {ImageTool, TextSetUp},
  data: () => ({
        show: false,
        text1: "در ابتدا جهت ورود به سامانه نیاز است نام کاربری و رمز عبور خود را همانند تصویر ذیل وارد نمایید",
        text2: "سپس از ورود به سیستم همانند تصویر ذیل زیر سیستم خود را انتخاب میکنید",
      }

  ),
};
</script>

<style scoped></style>
