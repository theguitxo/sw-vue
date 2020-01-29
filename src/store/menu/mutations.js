import constants from '@/constants/menu';

const {
  DRAWER,
} = constants.MUTATIONS;

function drawer(state, payload) {
  state.drawer = payload;
}

export default {
  [DRAWER]: drawer,
};
