<template>
  <v-container
    v-if="!isSearching"
  >
    <!-- Search form -->
    <v-row
      v-if="showSearchForm"
    >
      <v-col
      >
        <searchForm />
      </v-col>
    </v-row>

    <!-- Results list -->
    <v-row
      v-if="showList"
    >
      <v-col
        v-for="(item, key) of getSearchResult"
        :key="key"
        cols="12"
        sm="6"
        md="4"
        lg="3"
      >
        <FilmsCard
          v-if="isFilms"
          :data="item"
        />
        <PeopleCard
          v-if="isPeople"
          :data="item"
        />
        <PlanetsCard
          v-if="isPlanets"
          :data="item"
        />
        <SpeciesCard
          v-if="isSpecies"
          :data="item"
        />
        <StarshipsCard
          v-if="isStarships"
          :data="item"
        />
        <VehiclesCard
          v-if="isVehicles"
          :data="item"
        />
      </v-col>
    </v-row>

    <!-- Paginator -->
    <v-row
      v-if="showPaginator"
    >
      <v-col
        cols="12"
      >
        <v-pagination
          next-icon="mdi-menu-right"
          prev-icon="mdi-menu-left"
          :length="getPages"
          :value="getPage"
          @input="pageChange"
        >
        </v-pagination>
      </v-col>
    </v-row>
  </v-container>
</template>

<script src="./Results.js"></script>
