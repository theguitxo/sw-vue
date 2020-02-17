import constants from '@/constants/menu';

const {
  TOOGLE_DRAWER,
} = constants.ACTIONS;

const {
  DRAWER,
} = constants.MUTATIONS;

function toggleDrawer({ commit, state }) {
  commit(DRAWER, !state.drawer);
}

export default {
  [TOOGLE_DRAWER]: toggleDrawer,
};
