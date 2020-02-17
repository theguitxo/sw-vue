import constants from '@/constants/overlay';

const {
  SHOW_OVERLAY,
  HIDE_OVERLAY,
} = constants.ACTIONS;

const {
  VISIBLE,
} = constants.MUTATIONS;

/**
 * @description shows the overlay
 * @param {Object} param0 Vuex object
 */
function showOverlay({ commit }) {
  commit(VISIBLE, true);
}

/**
 * @description hides the overlay
 * @param {Object} param0 Vuex object
 */
function hideOverlay({ commit }) {
  commit(VISIBLE, false);
}

export default {
  [SHOW_OVERLAY]: showOverlay,
  [HIDE_OVERLAY]: hideOverlay,
};
