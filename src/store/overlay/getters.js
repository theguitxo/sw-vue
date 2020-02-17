import constants from '@/constants/overlay';

const {
  GET_VISIBLE,
} = constants.GETTERS;

/**
 * @description returns the state of the value that shows or hides the overlay
 * @param {Object} state State object of Vuex
 */
const getVisible = state => state.visible;

export default {
  [GET_VISIBLE]: getVisible,
};
