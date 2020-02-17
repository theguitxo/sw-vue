import constants from '@/constants/overlay';

const {
  VISIBLE,
} = constants.MUTATIONS;

/**
 * @description sets the value for show or hide the overlay
 * @param {Object} state State object of Vuex
 * @param {Boolean} payload true or false
 */
function visible(state, payload) {
  state.visible = payload;
}

export default {
  [VISIBLE]: visible,
};
