import constants from '@/constants/dialog';

const {
  DIALOG,
  ERROR_DESCRIPTION,
  ERROR_TYPE,
  DIALOG_TITLE,
} = constants.MUTATIONS;

/**
 * @description shows or hide the pop-up
 * @param {Object} state State object of Vuex *
   @param {Boolen} payload true or false
 */
function dialog(state, payload) {
  state.show = payload;
}

/**
 * @description sets the value for the error description
 * @param {Object} state State object of Vuex *
   @param {Boolen} payload true or false
 */
function errorDescription(state, payload) {
  state.errorDescription = payload;
}

/**
 * @description sets the value for the error type
 * @param {Object} state State object of Vuex *
   @param {Boolen} payload true or false
 */
function errorType(state, payload) {
  state.errorType = payload;
}

/**
 * @description sets the value for the dialog title
 * @param {Object} state State object of Vuex *
   @param {Boolen} payload true or false
 */
function dialogTitle(state, payload) {
  state.dailogTitle = payload;
}

export default {
  [DIALOG]: dialog,
  [ERROR_DESCRIPTION]: errorDescription,
  [ERROR_TYPE]: errorType,
  [DIALOG_TITLE]: dialogTitle,
};
