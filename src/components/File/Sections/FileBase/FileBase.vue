<template>
  <v-container>
    <FileTitle
      :title="title"
    />
    <v-row>
      <v-col>
        <slot></slot>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./FileBase.js"></script>
