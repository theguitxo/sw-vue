import constants from '@/constants/dialog';

const {
  SHOW_DIALOG,
  HIDE_DIALOG,
} = constants.ACTIONS;

const {
  DIALOG,
} = constants.MUTATIONS;

/**
 * @description shows the dialog pop-up for show errors
 * @param {Object} param0 Vuex object
 */
function showDialog({ commit }) {
  commit(DIALOG, true);
}

/**
 * @description hides the dialog pop-up for show errors
 * @param {Object} param0 Vuex object
 */
function hideDialog({ commit }) {
  commit(DIALOG, false);
}

export default {
  [SHOW_DIALOG]: showDialog,
  [HIDE_DIALOG]: hideDialog,
};
