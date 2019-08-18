<template>
  <v-toolbar
    color="indigo"
    dark
  >
    <v-menu bottom left>

      <template v-slot:activator="{ on }">
        <v-btn
          dark
          icon
          v-on="on"
        >
          <v-icon>menu</v-icon>
        </v-btn>
      </template>

      <v-list>
        <v-list-tile
          v-for="(item, i) in items"
          :key="i"
        >
          <v-list-tile-title>
            <router-link :to="item.route">{{ item.title }}</router-link>
          </v-list-tile-title>
        </v-list-tile>
      </v-list>

    </v-menu>

    <div>
      Star Wars
    </div>

  </v-toolbar>
</template>

<script src="./ToolBar.js"></script>
