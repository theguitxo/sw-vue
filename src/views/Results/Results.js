import mixinSearch from '@/mixins/search';
import searchForm from '@/components/SearchForm/SearchForm.vue';

export default {
  name: 'Results',

  mixins: [
    mixinSearch,
  ],

  components: {
    searchForm,
    FilmsCard: () => import('@/components/Card/Types/Films/Films.vue'),
    PeopleCard: () => import('@/components/Card/Types/People/People.vue'),
    PlanetsCard: () => import('@/components/Card/Types/Planets/Planets.vue'),
    SpeciesCard: () => import('@/components/Card/Types/Species/Species.vue'),
    StarshipsCard: () => import('@/components/Card/Types/Starships/Starships.vue'),
    VehiclesCard: () => import('@/components/Card/Types/Vehicles/Vehicles.vue'),
  },

  computed: {
    showList() {
      return this.getSearchCount > 0;
    },
    showPaginator() {
      return this.getSearchCount > 10;
    },
    showSearchForm() {
      return this.getSearchQuery !== null;
    },
  },

  created() {
    if (this.haveSearchOption) {
      this.$router.push('home');
    }
  },

  methods: {
    pageChange(page) {
      this.setResultPage(page);
      this.search({
        option: this.getSearchOption,
        query: this.getSearchQuery,
      });
    },
  },
};
