import { mapActions } from 'vuex';
import searchConstants from '@/constants/search';
import searchForm from '@/components/SearchForm/SearchForm.vue';

const {
  RESET_OPTION,
  RESET_QUERY,
} = searchConstants.ACTIONS;

export default {
  name: 'Search',

  components: {
    searchForm,
  },

  created() {
    this.resetOption();
    this.resetQuery();
  },

  methods: {
    ...mapActions({
      resetOption: `${searchConstants.STORE_NAME}/${RESET_OPTION}`,
      resetQuery: `${searchConstants.STORE_NAME}/${RESET_QUERY}`,
    }),
  },
};
