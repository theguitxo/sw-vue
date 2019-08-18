import { mapGetters, mapActions } from 'vuex';

export default {
  name: 'SearchForm',
  data() {
    return {
      queryString: '',
    };
  },
  computed: {
    ...mapGetters({
      searching: 'search/searching',
    }),
  },
  methods: {
    ...mapActions({
      showSnackbar: 'snackbar/show',
      setMessage: 'snackbar/message',
      initSearch: 'search/search',
    }),
    async search() {
      if (this.queryString.length <= 0) {
        this.setMessage('No query string!');
        this.showSnackbar();
      } else {
        try {
          await this.initSearch();
        } catch (e) {
          console.log(e.toString());
        }
      }
    },
  },
};
