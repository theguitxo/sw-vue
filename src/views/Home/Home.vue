<template>

  <v-container>

    <!-- Search icons -->
    <v-layout
      v-if="!hideIcons"
      row
      wrap
    >
      <v-flex
        v-for="i in icons"
        :key="i.title"
        xs12 sm6 md4 lg2 pa-4
        class="icon-wrapper"
      >
        <v-avatar
          size="100%"
          @click="search(i.title)"
        >
          <img :src="i.icon" :alt="i.title">
        </v-avatar>
        <div
          class="title"
          @click="search(i.title)"
        >
          {{ i.title }}
        </div>
      </v-flex>
    </v-layout>

    <!-- Loading progress -->
    <v-layout
      row
      wrap
      v-if="searching"
    >
      <v-flex
        xs12
        pa-4
        text-xs-center
      >
        <v-progress-circular
          :size="70"
          :width="7"
          color="white"
          indeterminate
        ></v-progress-circular>
      </v-flex>
    </v-layout>

    <!-- Search result -->
    <v-layout
      row
      wrap
      v-if="showSearchLayout"
    >
      <!-- Back button -->
      <v-flex 
        xs12
        pa-2   
        text-xs-right      
      >
        <v-btn
          @click="showIcons"
        >         
          back
        </v-btn>
      </v-flex>

      <!-- Result list -->
      <v-flex xs12>
        <SearchResult></SearchResult>
      </v-flex>
    </v-layout>

  </v-container>

</template>

<script src="./Home.js"></script>
<style scoped lang="scss" src="./Home.scss"></style>
