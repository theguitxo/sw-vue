import constants from '@/constants/menu';

const {
  DRAWER,
} = constants.GETTERS;

/**
 * @description returns the value if must to show or hide the drawer
 * @param {Object} state Object state of Vuex
 */
const drawer = state => state.drawer;

export default {
  [DRAWER]: drawer,
};
