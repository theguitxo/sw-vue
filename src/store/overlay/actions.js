import constants from '@/constants/overlay';

const {
  SHOW_OVERLAY,
  HIDE_OVERLAY,
} = constants.ACTIONS;

function showOverlay({ commit }) {
  commit('visible', true);
}

function hideOverlay({ commit }) {
  commit('visible', false);
}

export default {
  [SHOW_OVERLAY]: showOverlay,
  [HIDE_OVERLAY]: hideOverlay,
};
