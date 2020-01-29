import { mapActions, mapGetters } from 'vuex';

import Menu from '@/components/AppComponents/Menu/Menu.vue';
import Bar from '@/components/AppComponents/Bar/Bar.vue';
import Footer from '@/components/AppComponents/Footer/Footer.vue';
import ErrorDialog from '@/components/ErrorDialog/ErrorDialog.vue';

import overlayConstants from '@/constants/overlay';
import dialogConstants from '@/constants/dialog';
import menuConstants from '@/constants/menu';

// overlay constants
const {
  GET_VISIBLE,
} = overlayConstants.GETTERS;

// dialog constants
const {
  HIDE_DIALOG,
} = dialogConstants.ACTIONS;

// menu constants
const {
  TOOGLE_DRAWER,
} = menuConstants.ACTIONS;

export default {
  name: 'App',

  data: () => ({
  }),

  components: {
    Menu,
    Bar,
    Footer,
    ErrorDialog,
  },

  computed: {
    ...mapGetters({
      showOverlay: `${overlayConstants.STORE_NAME}/${GET_VISIBLE}`,
    }),
  },

  methods: {
    ...mapActions({
      toggleDrawer: `${menuConstants.STORE_NAME}/${TOOGLE_DRAWER}`,
      hideDialog: `${dialogConstants.STORE_NAME}/${HIDE_DIALOG}`,
    }),
  },
};
