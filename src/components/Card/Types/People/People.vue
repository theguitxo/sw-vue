<template>
  <CardBase
    :data="data"
    :title="data.name"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Birth year</v-list-item-title>
        <v-list-item-subtitle>{{ data.birth_year }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="my-2"></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Gender</v-list-item-title>
        <v-list-item-subtitle>{{ data.gender }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </CardBase>
</template>

<script src="./People.js"></script>
