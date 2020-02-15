<template>
  <v-app-bar
    app
    color="indigo"
    dark
  >
    <v-app-bar-nav-icon @click.stop="toggleDrawer" />
    <v-spacer>
      <h4>Star Wars Querying App</h4>
    </v-spacer>
    <v-spacer></v-spacer>
    <v-btn
      color="white"
      outlined
      @click="showAbout">
      About
    </v-btn>
  </v-app-bar>
</template>

<script src="./Bar.js"></script>
