import { mapGetters, mapMutations } from 'vuex';
import searchMixin from '@/mixins/search';
import menuConstants from '@/constants/menu';

// menu constants
const {
  STORE_NAME,
  GETTERS,
  MUTATIONS,
} = menuConstants;

export default {
  name: 'Menu',

  mixins: [
    searchMixin,
  ],

  data() {
    return {
      menuOptions: [],
    };
  },

  computed: {
    ...mapGetters({
      drawer: `${STORE_NAME}/${GETTERS.DRAWER}`,
    }),
  },

  methods: {
    ...mapMutations({
      updateDrawer: `${STORE_NAME}/${MUTATIONS.DRAWER}`,
    }),
    updateDrawerState(value) {
      this.updateDrawer(value);
    },
    listOption(option) {
      this.updateDrawer(false);
      this.searchResetPage();
      this.search({ option });
    },
  },
};
