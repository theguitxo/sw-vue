import constants from '@/constants/dialog';

const {
  DIALOG,
  ERROR_DESCRIPTION,
  ERROR_TYPE,
  DIALOG_TITLE,
} = constants.MUTATIONS;

function dialog(state, payload) {
  state.show = payload;
}

function errorDescription(state, payload) {
  state.errorDescription = payload;
}

function errorType(state, payload) {
  state.errorType = payload;
}

function dialogTitle(state, payload) {
  state.dailogTitle = payload;
}

export default {
  [DIALOG]: dialog,
  [ERROR_DESCRIPTION]: errorDescription,
  [ERROR_TYPE]: errorType,
  [DIALOG_TITLE]: dialogTitle,
};
