import { mapActions, mapGetters } from 'vuex';
import errorDialogConstants from '@/constants/dialog';

const {
  STORE_NAME,
  GETTERS,
  ACTIONS,
} = errorDialogConstants;

export default {
  name: 'ErrorDialog',

  computed: {
    ...mapGetters({
      dialog: `${STORE_NAME}/${GETTERS.DIALOG}`,
      errorDescription: `${STORE_NAME}/${GETTERS.ERROR_DESCRIPTION}`,
      errorType: `${STORE_NAME}/${GETTERS.ERROR_TYPE}`,
      dialogTitle: `${STORE_NAME}/${GETTERS.DIALOG_TITLE}`,
    }),
  },

  methods: {
    ...mapActions({
      hideDialog: `${STORE_NAME}/${ACTIONS.HIDE_DIALOG}`,
    }),
  },
};
