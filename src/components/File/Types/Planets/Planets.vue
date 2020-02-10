<template>
  <FileBase
    :title="getTitle"
  >
    <v-container>
      <FileField
        name="Rotation period"
        :value="data.rotation_period"
      />
      <FileField
        name="Orbital period"
        :value="data.orbital_period"
      />
      <FileField
        name="Diameter"
        :value="data.diameter"
      />
      <FileField
        name="Climate"
        :value="data.climate"
      />
      <FileField
        name="Gravity"
        :value="data.gravity"
      />
      <FileField
        name="Terrain"
        :value="data.terrain"
      />
      <FileField
        name="Surface water"
        :value="data.surface_water"
      />
      <FileField
        name="Population"
        :value="data.population"
      />
      <FileField
        name="Residents"
        :value="getResidents"
      />
      <FileField
        name="Films"
        :value="getFilms"
      />
    </v-container>
  </FileBase>
</template>

<script src="./Planets.js"></script>
