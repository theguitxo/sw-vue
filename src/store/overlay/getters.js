import constants from '@/constants/overlay';

const {
  GET_VISIBLE,
} = constants.GETTERS;

const getVisible = state => state.visible;

export default {
  [GET_VISIBLE]: getVisible,
};
