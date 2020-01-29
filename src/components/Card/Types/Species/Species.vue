<template>
    <CardBase
    :data="data"
    :title="data.name"
  >
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Designation</v-list-item-title>
        <v-list-item-subtitle>{{ data.designation }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="my-2"></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Classification</v-list-item-title>
        <v-list-item-subtitle>{{ data.classification }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
    <v-divider class="my-2"></v-divider>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title>Language</v-list-item-title>
        <v-list-item-subtitle>{{ data.language }}</v-list-item-subtitle>
      </v-list-item-content>
    </v-list-item>
  </CardBase>
</template>

<script src="./Species.js"></script>
