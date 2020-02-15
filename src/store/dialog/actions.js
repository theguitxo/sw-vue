import constants from '@/constants/dialog';

const {
  SHOW_DIALOG,
  HIDE_DIALOG,
} = constants.ACTIONS;

const {
  DIALOG,
} = constants.MUTATIONS;

function showDialog({ commit }) {
  commit(DIALOG, true);
}

function hideDialog({ commit }) {
  commit(DIALOG, false);
}

export default {
  [SHOW_DIALOG]: showDialog,
  [HIDE_DIALOG]: hideDialog,
};
