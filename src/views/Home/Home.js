// https://blog.mellisdesigns.com/using-dynamic-image-urls-in-vue-js/
import { mapActions, mapGetters, mapMutations } from 'vuex';
import speciesLogo from '@/assets/img/species.logo.jpg';
import moviesLogo from '@/assets/img/movies.logo.jpg';
import starshipsLogo from '@/assets/img/starships.logo.jpg';
import vehiclesLogo from '@/assets/img/vehicles.logo.jpg';
import planetsLogo from '@/assets/img/planets.logo.jpg';
import peopleLogo from '@/assets/img/people.logo.jpg';

import apiConstants from '@/constants/api';

import SearchResult from '@/components/SearchResult/SearchResult.vue';

const {
  OPTIONS,
} = apiConstants;

export default {
  name: 'Home',
  components: {
    SearchResult,
  },
  data() {
    return {
      hideIcons: false,
      icons: [
        {
          icon: peopleLogo,
          title: OPTIONS.PEOPLE,
        },
        {
          icon: moviesLogo,
          title: OPTIONS.FILMS,
        },
        {
          icon: starshipsLogo,
          title: OPTIONS.STARSHIPS,
        },
        {
          icon: vehiclesLogo,
          title: OPTIONS.VEHICLES,
        },
        {
          icon: speciesLogo,
          title: OPTIONS.SPECIES,
        },
        {
          icon: planetsLogo,
          title: OPTIONS.PLANETS,
        },
      ],
    };
  },
  computed: {
    ...mapGetters({
      searching: 'search/searching',
    }),
    showSearchLayout() {
      return (this.hideIcons && !this.searching);
    },
  },
  methods: {
    /**
     * mapped actions
     */
    ...mapActions({
      initSearch: 'search/search',
      showSnackbar: 'snackbar/show',
      setMessage: 'snackbar/message',
    }),
    /**
     * mapped mutations
     */
    ...mapMutations({
      setSearchOption: 'search/option',
    }),
    /**
     * @description makes a search for all the items about a type
     * @param {*} type
     */
    async search(type) {
      try {
        this.setSearchOption(type);
        this.hideIcons = true;
        await this.initSearch();
      } catch (e) {
        this.setMessage(e.toString());
        this.showSnackbar();
        this.showIcons();
      }
    },
    /**
     * @description showIcons
     */
    showIcons() {
      this.hideIcons = false;
    },
  },
};
