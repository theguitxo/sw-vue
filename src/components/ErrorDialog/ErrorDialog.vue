<template>
  <v-dialog
    v-model="dialog"
    persistent
  >
    <v-card>
      <v-card-title>
        {{ dialogTitle }}
      </v-card-title>
      <v-card-text
        class="py-0"
      >
        <v-alert
          :type="errorType"
        >
          {{ errorDescription }}
        </v-alert>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="hideDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="./ErrorDialog.js"></script>
