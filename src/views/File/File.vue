<template>
  <v-container
    v-if="!isSearching"
  >
    <v-row>
      <v-col>
        <FilmsFile
          v-if="isFilms"
          :data="getData"
        />
        <PeopleFile
          v-if="isPeople"
          :data="getData"
        />
        <PlanetsFile
          v-if="isPlanets"
          :data="getData"
        />
        <SpeciesFile
          v-if="isSpecies"
          :data="getData"
        />
        <StarshipsFile
          v-if="isStarships"
          :data="getData"
        />
        <VehiclesFile
          v-if="isVehicles"
          :data="getData"
        />
      </v-col>
    </v-row>
    <v-row>
      <v-col
        class="text-right"
      >
        <v-btn
          class="primary"
          @click="goBack"
        >
          Back
        </v-btn>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./File.js"></script>
