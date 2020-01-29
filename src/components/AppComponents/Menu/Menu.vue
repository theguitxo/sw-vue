<template>
  <v-navigation-drawer
    :value="drawer"
    :bottom="true"
    app
    temporary
    src="@/assets/drawer-background.jpg"
    @input="updateDrawerState"
  >
    <v-list
      dense rounded
    >
      <v-list-item
        v-for="(item, key) in getOptions"
        v-bind:key="key"
        link
        @click="listOption(key)"
      >
        <v-list-item-content>
          <v-list-item-title
            class="menuOptionItem"
          >
            {{ item }}
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
      <v-list-item
        link
        to="search"
      >
        <v-list-item-content>
          <v-list-item-title>
            Search
          </v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script src="./Menu.js"></script>
<style lang="scss">
  @import url('./Menu.scss');
</style>
