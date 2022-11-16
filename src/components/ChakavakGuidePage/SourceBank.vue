<template>
  <v-card flat>
    <v-card-text>
      <TextSetUp :text="text1"/>
      <ImageTool :src="require('@/assets/images/chakavak/sourcebank/Request registration.png')"/>
      <TextSetUp :text="text2"/>
      <ImageTool :src="require('@/assets/images/chakavak/Base/Reports.png')"/>
      <TextSetUp :text="text3"/>
      <ImageTool :src="require('@/assets/images/chakavak/sourcebank/sourceMngRequest registration.png')"/>
    </v-card-text>
  </v-card>
</template>

<script>
import ImageTool from "../App/ImageTool";
import TextSetUp from "../App/TextSetUp";

export default {
  name: "SourceBankGuide",
  components: {ImageTool, TextSetUp},
  data: () => ({
        show: false,
        text1: "در ابتدا همانند تصویر ذیل کارشناس بانک مبدا اقدام به ثبت مغایرت می نماید. لازم به ذکر است همانند تصویر انتخاب نوع مغایرت، بانک مقصد، بانک مبدا، بانک عهده، بانک واگذارنده، شعب بانک ها، اطلاعات چک و تصویر چک الزامی است. ثبت سایر موارد مانند شرح مغایرت و مستندات که شامل فایل های ضمیمه میباشد اختیاری است." +
            "کارشناس همانند تصویر میتواند در صورت لازم پس از ثبت قسمتی از اطلاعات مغایرت درخواست خود را ذخیره موقت کرده و سپس جهت تکمیل و ارسال درخواست از قسمت پیش نویس ها درخواست را انتخاب و ارسال جهت تایید را انتخاب نماید.همچنین کارشناس میتواند با انتخاب دکمه بستن فرایند از ارسال مغایرت صرف نظر کند. ",
        text2: "در این قسمت کارشناس پس از انتخاب دکمه ارسال جهت تایید درخواست ارسالی خود را که به مدیر بانک خود ارسال شده است از قسمت جستجو مغایرت ثبت شده مشاهده کرده و با کلیل راست بر روی درخواست گردش کار درخواست را نیز مشاهده کند.",
        text3: "در این قسمت همانند تصویر ذیل مدیر بانک مبدا مغایرت ثبت شده کارشناس خود را در قسمت وارده کارتابل مشاهده و بررسی میکند و همانند تصویر میتواند جهت بررسی مجدد برای کارشناس خود ارسال کرده و یا در صورت کامل بودن درخواست، با انتخاب دکمه تایید و ارسال به بانک مقصد مغایرت را به مدیر بانک مقصد ارسال کند. "
      }

  ),
};
</script>

<style scoped></style>
