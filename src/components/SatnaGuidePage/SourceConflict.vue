<template>
  <v-card flat>
    <v-card-text>
      <h3 class="test">
        کاربر ساتنا بانک مبدا در این قسمت همانند تصویر شروع به درج اطلاعات
        مغایرت میکند
      </h3>
      <ImageTool :src="require('@/assets/images/satna/Satna1.png')"/>
      <div class="test">
        <h3>
          پس از ثبت مغایرت ایجاد شده در بانک مبدا توسط کارشناس این مغایرت برای
          بررسی و ارسال به سمت مدیر بانک مبدا همانند تصویر ذیل ارسال میشود
        </h3>
      </div>
      <ImageTool :src="require('@/assets/images/satna/Satna2.png')"/>
    </v-card-text>
  </v-card>
</template>

<script>
import ImageTool from "@/components/App/ImageTool";

export default {
  name: "SourceConflict",
  components: {ImageTool},
};
</script>

<style>
.test {
  margin-bottom: 20px;
  margin-top: 20px;
}
</style>
