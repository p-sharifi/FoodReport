<template>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title class="font-weight-bold">
        {{ title }}
      </v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical v-model="tab">
      <v-tab
        v-for="tab in tabs"
        :key="tab.title"
        class="font-weight-bold d-flex justify-start"
      >
        <v-icon right> {{ tab.icon }} </v-icon>
        {{ tab.title }}
      </v-tab>
      <v-tabs-items
        v-model="tab"
        vertical
        style="height: 80vh; overflow-y: scroll"
      >
        <v-tab-item v-for="tab in tabs" :key="tab.title">
          <component :is="tab.content" />
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
import HowToLoginDescription from "../SatnaGuidePage/HowToLoginDescription";
import SourceConflict from "../SatnaGuidePage/SourceConflict";
import DestinationConflict from "../SatnaGuidePage/DestinationConflict";
export default {
  name: "ToolbarDesc",
  props: ["tab.icon", "tab.title","title","tab.content"],
  data: () => ({
    tab: "",
    show: false,
    tabs:[{
      title:'نحوه ورود به سامانه',
      icon:'mdi-login-variant',
      content: HowToLoginDescription
  },
      {
        title: 'ثبت و بررسی مغایرت توسط بانک مبدا',
        icon:'mdi-pencil-box-multiple-outline',
        content:SourceConflict

      },
      {
        title: 'بررسی مغایرت توسط بانک مقصد',
        icon:'mdi-credit-card-search-outline',
        content: DestinationConflict
      }

      ]

  }),
};
</script>

<style scoped></style>
