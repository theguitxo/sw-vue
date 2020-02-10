import mixinSearch from '@/mixins/search';
import searchForm from '@/components/SearchForm/SearchForm.vue';
import apiConstants from '@/constants/api';

const {
  FILMS,
  PEOPLE,
  PLANETS,
  SPECIES,
  STARSHIPS,
  VEHICLES,
} = apiConstants.OPTIONS;

const componentNames = {
  [FILMS]: 'FilmsCard',
  [PEOPLE]: 'PeopleCard',
  [PLANETS]: 'PlanetsCard',
  [SPECIES]: 'SpeciesCard',
  [STARSHIPS]: 'StarshipsCard',
  [VEHICLES]: 'VehiclesCard',
};

export default {
  name: 'Results',

  data() {
    return {
      showPaginator: false,
    };
  },

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
    showSearchForm() {
      return this.getSearchQuery !== null;
    },
  },

  created() {
    this.goHomeNoSearchOption();
  },

  updated() {
    this.setShowPaginator();
  },

  mounted() {
    this.setShowPaginator();
  },

  methods: {
    pageChange(page) {
      this.setResultPage(page);
      this.search({
        option: this.getSearchOption,
        query: this.getSearchQuery,
      });
    },
    setShowPaginator() {
      if (this.getSearchCount > 10) {
        const componentToMatch = componentNames[this.getSearchOptionLower];
        const totalCards = this.$children.filter(child => child.constructor.options.name
          === componentToMatch).length;
        if (totalCards === this.getSearchResult.length) {
          this.showPaginator = true;
        }
      } else {
        this.showPaginator = false;
      }
    },
  },
};
