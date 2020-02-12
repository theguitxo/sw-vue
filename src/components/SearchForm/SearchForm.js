import { validationMixin } from 'vuelidate';
import { required, alpha } from 'vuelidate/lib/validators';
import searchMixin from '@/mixins/search';

export default {
  name: 'SearchForm',

  data() {
    return {
      valid: false,
      option: null,
      query: null,
    };
  },

  mixins: [
    searchMixin,
    validationMixin,
  ],

  validations: {
    option: {
      required,
    },
    query: {
      required,
      alpha,
    },
  },

  mounted() {
    this.option = this.getSearchOption;
    this.query = this.getSearchQuery;
  },

  computed: {
    getSearchItems() {
      return Object.keys(this.getOptions).map((item) => {
        const option = {
          value: item,
          text: `${this.getOptions[item].charAt(0).toUpperCase()}${this.getOptions[item].slice(1)}`,
        };
        return option;
      });
    },
    disableSubmit() {
      return (this.$v.option.$invalid || this.$v.query.$invalid);
    },
  },

  methods: {
    async executeSearch() {
      this.searchResetPage();
      this.search({
        option: this.option,
        query: this.query,
      });
    },
  },
};
