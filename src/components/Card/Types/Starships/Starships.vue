<template>
  <CardBase
    :data="data"
    :title="data.name"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Model</v-list-item-title>
        <v-list-item-subtitle>{{ data.model }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="my-2"></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Starship class</v-list-item-title>
        <v-list-item-subtitle>{{ data.starship_class }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="my-2"></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Manufacturer</v-list-item-title>
        <v-list-item-subtitle>{{ data.manufacturer }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </CardBase>
</template>

<script src="./Starships.js"></script>
