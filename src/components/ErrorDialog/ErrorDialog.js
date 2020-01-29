import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'ErrorDialog',

  computed: {
    ...mapGetters({
      dialog: 'dialog/dialog',
      errorDescription: 'dialog/errorDescription',
      errorType: 'dialog/errorType',
      dialogTitle: 'dialog/dialogTitle',
    }),
  },

  methods: {
    ...mapActions({
      hideDialog: 'dialog/hideDialog',
    }),
  },
};
