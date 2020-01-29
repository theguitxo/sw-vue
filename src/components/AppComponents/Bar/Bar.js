import { mapActions } from 'vuex';

import menuConstants from '@/constants/menu';

const {
  STORE_NAME,
  ACTIONS,
} = menuConstants;

export default {
  name: 'Bar',

  methods: {
    ...mapActions({
      toggleDrawer: `${STORE_NAME}/${ACTIONS.TOOGLE_DRAWER}`,
    }),
  },
};
