<template>
  <v-card flat>
    <v-card-text>
      <TextSetUp :text="text1"/>
      <ImageTool :src="require('@/assets/images/chakavak/Admin/admin.png')"/>
    </v-card-text>
  </v-card>
</template>

<script>
import TextSetUp from "../App/TextSetUp";
import ImageTool from "../App/ImageTool";

export default {
  name: "AdminGuide",
  components: {ImageTool, TextSetUp},
  data: () => ({
    show: false,
    text1: "در این قسمت همانند تصویر راهبر هر بانک میتواند " +
        "در پنل راهبری بانک قسمت کاربران، کاربران بانک هر کاربری را که بخواهد دسترسی های کاربر را بر اساس نیاز از بین دسترسی ها انتخاب کرده و در صورت نیاز شماره همراه فرد را نیز وارد کند و نام و نام خانوادگی و نام کاربری فرد را تغییر دهد." +
        "همچنین در صورتی که آیا رمز عبور ریست شود را بله انتخاب نماید رمز عبور کاربر انتخاب شده به '123' تغییر پیدا میکند و کاربر میتواند رمز عبور خود را پس از ورود به سامانه همانطور که قبلا اشاره شد تغییر دهد. ",

  })
}
</script>

<style scoped>

</style>