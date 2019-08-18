import { mapActions, mapGetters, mapMutations } from 'vuex';

export default {
  name: 'SnackBar',
  computed: {
    ...mapGetters({
      message: 'snackbar/message',
    }),
    snackbar: {
      get() {
        return this.$store.getters['snackbar/snackbar'];
      },
      set(value) {
        this.modifySnackbar(value);
      },
    },
  },
  methods: {
    ...mapActions({
      hideSnackbar: 'snackbar/hide',
    }),
    ...mapMutations({
      modifySnackbar: 'snackbar/snackbar',
    }),
  },
};
