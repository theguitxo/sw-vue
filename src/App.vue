<template>
  <v-app>
    <Menu />

    <Bar />

    <v-content>
      <router-view></router-view>
    </v-content>

    <Footer />

    <v-overlay
      :value="showOverlay"
    >
      <v-progress-circular
        :size="100"
        :width="10"
        color="white"
        indeterminate
      ></v-progress-circular>
    </v-overlay>

    <ErrorDialog />

    <AboutDialog />

  </v-app>
</template>

<script src="./App.js"></script>
<style lang="scss">
  * {
    font-family: Verdana, Arial, Helvetica, sans-serif;
  }
</style>
