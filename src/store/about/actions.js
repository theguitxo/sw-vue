import constants from '@/constants/about';

const {
  SHOW_ABOUT,
  HIDE_ABOUT,
} = constants.ACTIONS;

const {
  SHOW,
} = constants.MUTATIONS;

/**
 * @description shows the about pop-up
 * @param {Object} param0 Vuex object
 */
function showAbout({ commit }) {
  commit(SHOW, true);
}

/**
 * @description hides the about pop-up
 * @param {Object} param0 Vuex object
 */
function hideAbout({ commit }) {
  commit(SHOW, false);
}

export default {
  [SHOW_ABOUT]: showAbout,
  [HIDE_ABOUT]: hideAbout,
};
