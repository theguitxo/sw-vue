<template>
  <v-row>
    <v-col
      cols="12"
      md="3"
      class="text-left text-md-right font-weight-black"
    >
      {{ name }}
    </v-col>
    <v-col
      v-if="isList"
      cols="12"
      md="9"
    >
      <v-list
        color="grey lighten-3"
        dense
        class="py-0"
      >
        <v-list-item
          v-for="(item, key) of value"
          v-bind:key="key"
          class="px-0"
        >
          <v-list-item-content
            class="py-0 pb-1"
          >
            {{ item }}
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-col>
    <v-col
      v-else
      cols="12"
      md="9"
    >
      {{ value }}
    </v-col>
    <v-col>
      <v-divider/>
    </v-col>
  </v-row>
</template>

<script src="./FileField.js"></script>

<style lang="scss" scoped>
  .v-list-item {
    min-height: 0;
  }
</style>
