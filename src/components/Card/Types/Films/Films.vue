<template>
  <CardBase
    :data="data"
    :title="data.title"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Director</v-list-item-title>
        <v-list-item-subtitle>{{ data.director }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="my-2"></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Producer</v-list-item-title>
        <v-list-item-subtitle>{{ data.producer }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="my-2"></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Opening crawl</v-list-item-title>
        <v-list-item-subtitle>{{ data.opening_crawl }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </CardBase>
</template>

<script src="./Films.js"></script>
