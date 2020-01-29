<template>
  <CardBase
    :data="data"
    :title="data.name"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Climate</v-list-item-title>
        <v-list-item-subtitle>{{ data.climate }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="my-2"></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Gravity</v-list-item-title>
        <v-list-item-subtitle>{{ data.gravity }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </CardBase>
</template>

<script src="./Planets.js"></script>
