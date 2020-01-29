import constants from '@/constants/dialog';

const {
  DIALOG,
  ERROR_DESCRIPTION,
  ERROR_TYPE,
  DIALOG_TITLE,
} = constants.GETTERS;

const dialog = state => state.show;
const errorDescription = state => state.errorDescription;
const errorType = state => state.errorType;
const dialogTitle = state => state.dialogTitle;

export default {
  [DIALOG]: dialog,
  [ERROR_DESCRIPTION]: errorDescription,
  [ERROR_TYPE]: errorType,
  [DIALOG_TITLE]: dialogTitle,
};
