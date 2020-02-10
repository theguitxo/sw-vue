<template>
  <FileBase
    :title="getTitle"
  >
    <v-container>
      <FileField
        name="Opening crawl"
        :value="data.opening_crawl"
      />
      <FileField
        name="Director"
        :value="data.director"
      />
      <FileField
        name="Producer"
        :value="data.producer"
      />
      <FileField
        name="Release date"
        :value="data.release_date"
      />
      <FileField
        name="Characters"
        :value="getCharacters"
      />
      <FileField
        name="Planets"
        :value="getPlanets"
      />
      <FileField
        name="Starships"
        :value="getStarships"
      />
      <FileField
        name="Vehicles"
        :value="getVehicles"
      />
      <FileField
        name="Species"
        :value="getSpecies"
      />
    </v-container>
  </FileBase>
</template>

<script src="./Films.js"></script>
