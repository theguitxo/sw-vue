import { mapGetters } from 'vuex';
import PeopleCard from '@/components/Cards/PeopleCard.vue';

export default {
  name: 'SearchResult',
  components: {
    PeopleCard,
  },
  data() {
    return {
      pagination: {},
    };
  },
  computed: {
    ...mapGetters({
      getReponseCount: 'search/responseCount',
      getResponseResults: 'search/responseResults',
      isPeople: 'search/isPeople',
      isFilms: 'search/isFilms',
      isPlanets: 'search/isPlanets',
      isSpecies: 'search/isSpecies',
      isStarships: 'search/isStarships',
      isVehicles: 'search/isVehicles',
    }),
    getTableData() {
      let mapFunction = null;

      switch (true) {        
        case this.isPeople:
          mapFunction = function(item) {
            return {
              'field1': item.name,
              'field2': item.gender,
              'field3': item.height,
              'field4': item.mass,
            };
          }
          break;
        case this.isFilms:
          mapFunction = function (item) {
            return {
              'field1': item.title,
              'field2': item.director,
              'field3': item.producer,
              'field4': item.release_date,
            };
          }
          break;
        case this.isPlanets:
          mapFunction = function (item) {
            return {
              'field1': item.name,
              'field2': item.diameter,
              'field3': item.rotation_period,
              'field4': item.orbital_period,
            };
          }
          break;
        case this.isSpecies:
          mapFunction = function (item) {
            return {
              'field1': item.name,
              'field2': item.classification,
              'field3': item.designation,
              'field4': item.language,
            };
          }
          break;
        case this.isStarships:
          mapFunction = function (item) {
            return {
              'field1': item.name,
              'field2': item.model,
              'field3': item.starship_class,
              'field4': item.manufacturer,
            };
          }
          break;
        case this.isVehicles:
          mapFunction = function (item) {
            return {
              'field1': item.name,
              'field2': item.model,
              'field3': item.vehicle_class,
              'field4': item.manufacturer,
            };
          }
          break;
      }
      return this.getResponseResults.map(mapFunction);
    },
    showNoResult() {
      return this.getReponseCount <= 0;
    },
    pages() {
      return 5;
    }
  },
};
