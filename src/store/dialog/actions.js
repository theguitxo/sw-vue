import constants from '@/constants/dialog';

const {
  SHOW_DIALOG,
  HIDE_DIALOG,
} = constants.ACTIONS;

function showDialog({ commit }) {
  commit('dialog', true);
}

function hideDialog({ commit }) {
  commit('dialog', false);
}

export default {
  [SHOW_DIALOG]: showDialog,
  [HIDE_DIALOG]: hideDialog,
};
