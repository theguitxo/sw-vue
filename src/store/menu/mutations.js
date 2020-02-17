import constants from '@/constants/menu';

const {
  DRAWER,
} = constants.MUTATIONS;

/**
 * @description sets the value for show or hide the drawer
 * @param {Object} state State object of Vuex
 * @param {Boolean} payload true or false
 */
function drawer(state, payload) {
  state.drawer = payload;
}

export default {
  [DRAWER]: drawer,
};
