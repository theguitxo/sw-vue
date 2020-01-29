import { mapGetters } from 'vuex';
import fileConstants from '@/constants/file';
import apiConstants from '@/constants/api';

// file constants
const {
  GET_DATA,
  GET_OPTION,
} = fileConstants.GETTERS;

// api constants
const {
  FILMS,
} = apiConstants.OPTIONS;

export default {
  name: 'File',

  computed: {
    ...mapGetters({
      getData: `${fileConstants.STORE_NAME}/${GET_DATA}`,
      getOption: `${fileConstants.STORE_NAME}/${GET_OPTION}`,
    }),
    getOptionLowerCase() {
      return this.getOption.toLowerCase();
    },
    isFilms() {
      return this.getOptionToLowerCase === FILMS;
    },
  },

  created() {
    if (this.getOption === undefined
      || this.getOption === null
      || this.getOption === '') {
      this.$router.push('home');
    }
  },
};
