import constants from '@/constants/about';

const {
  SHOW_ABOUT,
  HIDE_ABOUT,
} = constants.ACTIONS;

const {
  SHOW,
} = constants.MUTATIONS;

function showAbout({ commit }) {
  commit(SHOW, true);
}

function hideAbout({ commit }) {
  commit(SHOW, false);
}

export default {
  [SHOW_ABOUT]: showAbout,
  [HIDE_ABOUT]: hideAbout,
};
