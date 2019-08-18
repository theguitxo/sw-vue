<template>
  <v-app>
    <ToolBar></ToolBar>
    <router-view />
    <SnackBar></SnackBar>
    <v-footer
      color="indigo"
      dark
      class="px-2"
    >
      <a href="https://www.guitxo.com" target="_blank">www.guitxo.com</a>
      <v-spacer></v-spacer>
      <div>&copy; {{ new Date().getFullYear() }}</div>
    </v-footer>
  </v-app>
</template>

<script src="./App.js"></script>
<style lang="scss" scoped src="./App.scss"></style>
