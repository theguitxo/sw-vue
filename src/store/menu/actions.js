import constants from '@/constants/menu';

const {
  TOOGLE_DRAWER,
} = constants.ACTIONS;

function toggleDrawer({ commit, state }) {
  commit('drawer', !state.drawer);
}

export default {
  [TOOGLE_DRAWER]: toggleDrawer,
};
