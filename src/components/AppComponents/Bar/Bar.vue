<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-spacer></v-spacer>
    <v-btn
      color="white"
      outlined
      to="about"
    >
      About
    </v-btn>
  </v-app-bar>
</template>

<script src="./Bar.js"></script>
