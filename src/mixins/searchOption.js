import { mapGetters } from 'vuex';
import searchConstants from '@/constants/search';
import apiConstants from '@/constants/api';

const {
  OPTIONS,
} = apiConstants;

const {
  FILMS,
  PEOPLE,
  PLANETS,
  SPECIES,
  STARSHIPS,
  VEHICLES,
} = OPTIONS;

const {
  GET_OPTION,
} = searchConstants.GETTERS;

export default {
  name: 'mixinSearchOption',

  computed: {
    ...mapGetters({
      getSearchOption: `${searchConstants.STORE_NAME}/${GET_OPTION}`,
    }),
    getOptions: () => OPTIONS,
    getSearchOptionLower() {
      return this.getSearchOption.toLowerCase();
    },
    isFilms() {
      return (this.getSearchOptionLower === FILMS);
    },
    isPeople() {
      return (this.getSearchOptionLower === PEOPLE);
    },
    isPlanets() {
      return (this.getSearchOptionLower === PLANETS);
    },
    isSpecies() {
      return (this.getSearchOptionLower === SPECIES);
    },
    isStarships() {
      return (this.getSearchOptionLower === STARSHIPS);
    },
    isVehicles() {
      return (this.getSearchOptionLower === VEHICLES);
    },
    haveSearchOption() {
      return (this.getSearchOption === undefined
        || this.getSearchOption === null
        || this.getSearchOption === '');
    },
  },
};
