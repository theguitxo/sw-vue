<template>
  <v-container
    fluid
  >
    <v-row>
      <v-col
        class="white-translucid"
        cols="10"
        offset="1"
        sm="8"
        offset-sm="2"
        md="6"
        offset-md="3"
      >
        <p>
          This is an app to query data about the Star Wars films.
        </p>
        <p>
          To obtain data it uses the SWAPI, hosted in:
        </p>
        <p>
          <a href="https://www.swapi.co/" target="_blank">
            <span>
              https://www.swapi.co/
            </span>
          </a>
        </p>
        <p>
          Is programed with VueJS and the code is available in this Github repository:
        </p>
        <p>
          <a href="https://github.com/theguitxo/sw-vue" target="_blank">
            <span>
              https://github.com/theguitxo/sw-vue
            </span>
          </a>
        </p>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./Home.js"></script>
<style lang="scss" scoped>
  .container {
    min-height: 100%;
    background: url('~@/assets/tatooine-background.jpg');
    background-position: center center;
    background-repeat: no-repeat;
    background-attachment: scroll;
    background-size: cover;
  }
  .white-translucid {
    background-color: rgba(255, 255, 255, 0.5);
    border-radius: 0.5rem;
    -webkit-border-radius: 0.5rem;
    -moz-border-radius: 0.5rem;
  }
  a {
    text-decoration: none;
    font-weight: bold;
    span {
      color: black;
    }
  }
</style>
