import constants from '@/constants/dialog';

const {
  DIALOG,
  ERROR_DESCRIPTION,
  ERROR_TYPE,
  DIALOG_TITLE,
} = constants.GETTERS;

/**
 * @description returns the value for show or hide the pop-up
 * @param {Object} state State object of Vuex
 */
const dialog = state => state.show;

/**
 * @description returns the value for the error description of the pop-up
 * @param {Object} state State object of Vuex
 */
const errorDescription = state => state.errorDescription;

/**
 * @description returns the value for the error type of the pop-up
 * @param {Object} state State object of Vuex
 */
const errorType = state => state.errorType;

/**
 * @description returns the value for the title of the pop-up
 * @param {Object} state State object of Vuex
 */
const dialogTitle = state => state.dialogTitle;

export default {
  [DIALOG]: dialog,
  [ERROR_DESCRIPTION]: errorDescription,
  [ERROR_TYPE]: errorType,
  [DIALOG_TITLE]: dialogTitle,
};
