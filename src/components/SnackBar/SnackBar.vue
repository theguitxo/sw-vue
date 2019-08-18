<template>
  <v-snackbar
    v-model="snackbar"
    :timeout="3000"
    :top="true"
  >
    {{ message }}
    <v-btn
      color="pink"
      flat
      @click="hideSnackbar"
    >
      Close
    </v-btn>
  </v-snackbar>
</template>

<script src="./SnackBar.js"></script>
