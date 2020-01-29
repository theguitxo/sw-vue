import { mapActions, mapMutations } from 'vuex';
import dataUtils from '@/utils/data';
import searchOptionMixin from '@/mixins/searchOption';
import fileConstants from '@/constants/file';
import overlayConstants from '@/constants/overlay';
import dialogConstants from '@/constants/dialog';

const {
  getRequestErrorMessage,
} = dataUtils;

// file constants
const {
  RESET_DATA,
  LOAD_ITEM_INFO,
} = fileConstants.ACTIONS;

// overlay constants
const {
  SHOW_OVERLAY,
  HIDE_OVERLAY,
} = overlayConstants.ACTIONS;

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

export default {
  name: 'CardActions',

  mixins: [
    searchOptionMixin,
  ],

  props: {
    data: Object,
  },

  methods: {
    ...mapMutations({
      setDialogErrorDescription: `${dialogConstants.STORE_NAME}/${ERROR_DESCRIPTION}`,
      setDialogErrorType: `${dialogConstants.STORE_NAME}/${ERROR_TYPE}`,
    }),
    ...mapActions({
      loadItemInfo: `${fileConstants.STORE_NAME}/${LOAD_ITEM_INFO}`,
      resetData: `${fileConstants.STORE_NAME}/${RESET_DATA}`,
      showDialog: `${dialogConstants.STORE_NAME}/${SHOW_DIALOG}`,
      showOverlay: `${overlayConstants.STORE_NAME}/${SHOW_OVERLAY}`,
      hideOverlay: `${overlayConstants.STORE_NAME}/${HIDE_OVERLAY}`,
    }),

    /**
     * @description
     */
    async viewMore() {
      this.showOverlay();
      try {
        await this.loadItemInfo({
          data: this.data,
          option: this.getOptions[this.getSearchOption],
        });
        this.$router.push('file');
      } catch (error) {
        console.log(error);
        this.setDialogErrorType(TYPES.ERROR);
        this.setDialogErrorDescription(getRequestErrorMessage(error));
        this.showDialog();
      } finally {
        this.hideOverlay();
      }
    },
  },
};
