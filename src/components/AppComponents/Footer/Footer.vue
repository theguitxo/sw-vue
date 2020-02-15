<template>
  <v-footer
    color="indigo"
    app
    class="justify-center"
  >
    <span class="white--text">
      &copy; 2020 - <a :href="URL_SITE" target="_blank" class="white--text">
        {{ URL_SITE }}
      </a>
    </span>
  </v-footer>
</template>

<script src="./Footer.js"></script>

<style lang="scss" scoped>
  a {
    text-decoration: none;
  }
</style>
