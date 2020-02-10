import { mapGetters } from 'vuex';
import searchConstants from '@/constants/search';
import apiConstants from '@/constants/api';
import overlayConstants from '@/constants/overlay';

// api constants
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

// search constants
const {
  GET_OPTION,
} = searchConstants.GETTERS;

// overlay constants
const {
  GET_VISIBLE,
} = overlayConstants.GETTERS;

export default {
  name: 'mixinSearchOption',

  computed: {
    ...mapGetters({
      getSearchOption: `${searchConstants.STORE_NAME}/${GET_OPTION}`,
      isSearching: `${overlayConstants.STORE_NAME}/${GET_VISIBLE}`,
    }),
    getOptions: () => OPTIONS,
    getSearchOptionLower() {
      return this.haveSearchOption ? this.getSearchOption.toLowerCase() : '';
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
      return (this.getSearchOption !== undefined
        && this.getSearchOption !== null
        && this.getSearchOption !== '');
    },
  },

  methods: {
    goHomeNoSearchOption() {
      if (!this.haveSearchOption) {
        this.$router.push('home');
      }
    },
  },
};
