<template>
  <v-card>
    <v-toolbar flat color="primary" dark>
      <v-toolbar-title class="font-weight-bold">
        {{ title }}
      </v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical v-model="tab">
      <v-tab class="font-weight-bold d-flex justify-start">
        <v-icon> mdi-account </v-icon>
        {{ firstTab }}
      </v-tab>
      <v-tab class="font-weight-bold d-flex justify-start">
        <v-icon> mdi-lock </v-icon>
        {{ secondTab }}
      </v-tab>
      <v-tab class="font-weight-bold d-flex justify-start">
        <v-icon> mdi-access-point </v-icon>
        {{ thirdTab }}
      </v-tab>
      <v-tabs-items
        v-model="tab"
        vertical
        style="height: 80vh; overflow-y: scroll"
      >
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <v-dialog
                v-model="show"
                max-width="80%"
                @keyup.esc="show = false"
              >
                <v-card>
                  <v-img src="../../assets/images/login.png" alt="" contain />
                </v-card>
              </v-dialog>
              <v-img
                src="../../assets/images/login.png"
                alt=""
                contain
                @click="show = true"
              />
              <p>
                {{ firstPDesc }}
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                {{ secondPDesc }}
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
        <v-tab-item>
          <v-card flat>
            <v-card-text>
              <p>
                {{ thirdPDesc }}
              </p>
            </v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: "ToolbarDesc",
  props: [
    "title",
    "firstTab",
    "secondTab",
    "thirdTab",
    "firstPDesc",
    "secondPDesc",
    "thirdPDesc",
  ],
  data: () => ({
    tab: "",
    show: false,
  }),
};
</script>

<style scoped></style>
