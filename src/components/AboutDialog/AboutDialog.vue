<template>
  <v-dialog
    v-model="dialog"
    persistent
    width="50%"
  >
    <v-card>
      <v-card-title>
        About
      </v-card-title>
      <v-card-text>
        <p>
          This page has been programmed by Amador T.M. You have my Linkedin profile here:
        </p>
        <p>
          <a :href="LINKEDIN_PROFILE" target="_blank">Linkedin profile</a>
        </p>
      </v-card-text>
      <v-card-actions>
        <v-spacer></v-spacer>
        <v-btn color="primary" @click="hideDialog">Close</v-btn>
      </v-card-actions>
    </v-card>
  </v-dialog>
</template>

<script src="./AboutDialog.js"></script>
