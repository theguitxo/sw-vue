import constants from '@/constants/about';

const {
  SHOW,
} = constants.GETTERS;

/**
 * @description returns the state for show or hide the about pop-up
 * @param {Object} state State object of Vuex
 */
const show = state => state.show;

export default {
  [SHOW]: show,
};
