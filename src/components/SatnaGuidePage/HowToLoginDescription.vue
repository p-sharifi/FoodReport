<template>
  <v-card flat>
    <v-card-text>
      <ImageTool :src="require('@/assets/images/login.png')" />
      <p>
        همانند تصویر ذیل جهت ورود به سامانه میتوانید نام کاربری و رمز عبور خود
        را وارد کنید و کلمه ورود را انتخاب نمایید.
      </p>
    </v-card-text>
  </v-card>
</template>

<script>
import ImageTool from "@/components/App/ImageTool";
export default {
  name: "HowToLoginDescription",
  components: { ImageTool },
  data: () => ({
    show: false,
  }),
};
</script>

<style scoped></style>
