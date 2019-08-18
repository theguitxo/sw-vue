<template>
  <form>
    <v-text-field
      v-model="queryString"
      label="Query string"
      required
    >
    </v-text-field>
    <v-btn
      block
      :disabled="searching"
      @click="search"
    >
      Search
    </v-btn>
  </form>
</template>

<script src="./SearchForm.js"></script>
