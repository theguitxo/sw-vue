import { mapActions, mapGetters } from 'vuex';
import aboutConstants from '@/constants/about';
import linksConstants from '@/constants/links';

const {
  STORE_NAME,
  GETTERS,
  ACTIONS,
} = aboutConstants;

const {
  LINKEDIN_PROFILE,
} = linksConstants;

export default {
  name: 'AboutDialog',

  data() {
    return {
      LINKEDIN_PROFILE,
    };
  },

  computed: {
    ...mapGetters({
      dialog: `${STORE_NAME}/${GETTERS.SHOW}`,
    }),
  },

  methods: {
    ...mapActions({
      hideDialog: `${STORE_NAME}/${ACTIONS.HIDE_ABOUT}`,
    }),
  },
};
