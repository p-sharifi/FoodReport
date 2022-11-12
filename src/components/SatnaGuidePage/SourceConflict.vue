<template>
  <v-card flat>
    <v-card-text>
      <p>
        کاربر ساتنا بانک مبدا در این قسمت همانند تصویر شروع به درج اطلاعات
        مغایرت میکند
      </p>
      <ImageTool :src="require('@/assets/images/satna/Satna1.png')" />
      <p>
        پس از ثبت مغایرت ایجاد شده در بانک مبدا توسط کارشناس این مغایرت برای
        بررسی و ارسال به سمت مدیر بانک مبدا همانند تصویر ذیل ارسال میشود
      </p>
      <ImageTool :src="require('@/assets/images/satna/Satna2.png')" />
    </v-card-text>
  </v-card>
</template>

<script>
import ImageTool from "@/components/App/ImageTool";
export default {
  name: "SourceConflict",
  components: { ImageTool },
};
</script>

<style scoped></style>
