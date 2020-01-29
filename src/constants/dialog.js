export default {
  TYPES: {
    ERROR: 'error',
    WARNING: 'warning',
  },
  STORE_NAME: 'dialog',
  MUTATIONS: {
    DIALOG: 'dialog',
    ERROR_DESCRIPTION: 'errorDescription',
    ERROR_TYPE: 'errorType',
    DIALOG_TITLE: 'dialogTitle',
  },
  ACTIONS: {
    SHOW_DIALOG: 'showDialog',
    HIDE_DIALOG: 'hideDialog',
  },
  GETTERS: {
    DIALOG: 'dialog',
    ERROR_DESCRIPTION: 'errorDescription',
    ERROR_TYPE: 'errorType',
    DIALOG_TITLE: 'dialogTitle',
  },
  DEFAULTS: {
    TITLE: 'Error',
  },
};
