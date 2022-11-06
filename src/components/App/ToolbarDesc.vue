<template>
  <v-card>
    <v-toolbar
        flat
        color="primary"
        dark
    >
      <v-toolbar-title class="font-weight-bold">
        {{ title }}
      </v-toolbar-title>
    </v-toolbar>
    <v-tabs vertical>
      <v-tab class="font-weight-bold">
        <v-icon>
          mdi-account
        </v-icon>
        {{ firstTab }}
      </v-tab>
      <v-tab class="font-weight-bold">
        <v-icon>
          mdi-lock
        </v-icon>
        {{ secondTab }}
      </v-tab>
      <v-tab class="font-weight-bold">
        <v-icon>
          mdi-access-point
        </v-icon>
        {{ thirdTab }}
      </v-tab>
      <v-tab-item>
        <v-card flat >
          <v-card-text>
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

    </v-tabs>
  </v-card>
</template>

<script>
export default {
  name: "ToolbarDesc",
  props: [
    "title", "firstTab", "secondTab", "thirdTab", "firstPDesc", "secondPDesc", "thirdPDesc"
  ]
}
</script>

<style scoped>

</style>