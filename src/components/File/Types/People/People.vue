<template>
  <FileBase
    :title="getTitle"
  >
    <v-container>
      <FileField
        name="Height"
        :value="data.height"
      />
      <FileField
        name="Mass"
        :value="data.mass"
      />
      <FileField
        name="Hair color"
        :value="data.hair_color"
      />
      <FileField
        name="Skin color"
        :value="data.skin_color"
      />
      <FileField
        name="Eye color"
        :value="data.eye_color"
      />
      <FileField
        name="Birth year"
        :value="data.birth_year"
      />
      <FileField
        name="Gender"
        :value="data.gender"
      />
      <FileField
        name="Home world"
        :value="getHomeworld"
      />
      <FileField
        name="Films"
        :value="getFilms"
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

<script src="./People.js"></script>
