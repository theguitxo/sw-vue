<template>
  <v-card
    class="auto"
  >
    <CardTitle :title="title"/>
    <v-card-text>
      <v-list
        two-line
        class="py-0"
      >
        <slot></slot>
      </v-list>
    </v-card-text>
    <CardActions :data="data" />
  </v-card>
</template>

<script src="./CardBase.js"></script>
