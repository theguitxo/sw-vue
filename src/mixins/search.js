import { mapGetters, mapMutations, mapActions } from 'vuex';
import dataUtils from '@/utils/data';
import dialogConstants from '@/constants/dialog';
import searchConstants from '@/constants/search';
import overlayConstants from '@/constants/overlay';
import searchOptionMixin from '@/mixins/searchOption';

const {
  getRequestErrorMessage,
} = dataUtils;

// dialog constants
const {
  TYPES,
} = dialogConstants;

const {
  SHOW_DIALOG,
} = dialogConstants.ACTIONS;

const {
  ERROR_DESCRIPTION,
  ERROR_TYPE,
} = dialogConstants.MUTATIONS;

// search constants
const {
  MESSAGES,
  ROUTES,
  RESULTS,
  MUTATIONS,
} = searchConstants;

const {
  GET_COUNT,
  GET_RESULT,
  GET_PREVIOUS,
  GET_NEXT,
  GET_PAGE,
  GET_QUERY,
} = searchConstants.GETTERS;

const {
  SEARCH_BY_PARAMETERS,
  RESET_PAGE,
} = searchConstants.ACTIONS;

// overlay constants
const {
  SHOW_OVERLAY,
  HIDE_OVERLAY,
} = overlayConstants.ACTIONS;

export default {
  name: 'mixinSearch',

  mixins: [
    searchOptionMixin,
  ],

  computed: {
    ...mapGetters({
      getSearchCount: `${searchConstants.STORE_NAME}/${GET_COUNT}`,
      getSearchResult: `${searchConstants.STORE_NAME}/${GET_RESULT}`,
      getPage: `${searchConstants.STORE_NAME}/${GET_PAGE}`,
      getNextResult: `${searchConstants.STORE_NAME}/${GET_NEXT}`,
      getPreviousResult: `${searchConstants.STORE_NAME}/${GET_PREVIOUS}`,
      getSearchQuery: `${searchConstants.STORE_NAME}/${GET_QUERY}`,
    }),
    getPages() {
      return Math.ceil(this.getSearchCount / RESULTS.BY_PAGE);
    },
  },

  methods: {
    ...mapMutations({
      setResultPage: `${searchConstants.STORE_NAME}/${MUTATIONS.SET_PAGE}`,
      setListPage: `${searchConstants.STORE_NAME}/${MUTATIONS.SET_LIST_PAGE}`,
      setDialogErrorDescription: `${dialogConstants.STORE_NAME}/${ERROR_DESCRIPTION}`,
      setDialogErrorType: `${dialogConstants.STORE_NAME}/${ERROR_TYPE}`,
    }),
    ...mapActions({
      searchByParameters: `${searchConstants.STORE_NAME}/${SEARCH_BY_PARAMETERS}`,
      searchResetPage: `${searchConstants.STORE_NAME}/${RESET_PAGE}`,
      showDialog: `${dialogConstants.STORE_NAME}/${SHOW_DIALOG}`,
      showOverlay: `${overlayConstants.STORE_NAME}/${SHOW_OVERLAY}`,
      hideOverlay: `${overlayConstants.STORE_NAME}/${HIDE_OVERLAY}`,
    }),

    /**
     * @description search
     * @param {Object} options an object with the option (films, people, ...) and query to search
     */
    async search(options) {
      this.showOverlay();
      try {
        await this.searchByParameters(options);
        if (this.getSearchCount <= 0) {
          // there aren't results, so must show the error dialog
          this.setDialogErrorType(TYPES.WARNING);
          this.setDialogErrorDescription(MESSAGES.NO_DATA);
          this.showDialog();
        } else {
          this.navigateToSearchResults();
        }
      } catch (error) {
        this.setDialogErrorType(TYPES.ERROR);
        this.setDialogErrorDescription(getRequestErrorMessage(error));
        this.showDialog();
      } finally {
        this.hideOverlay();
      }
    },

    /**
     * @description navigate to the results page, if it's not there
     */
    navigateToSearchResults() {
      if (this.$router.currentRoute.name !== ROUTES.RESULTS) {
        this.$router.push(ROUTES.RESULTS);
      }
    },
  },
};
