import constants from '@/constants/file';

const {
  GET_DATA,
  GET_OPTION,
} = constants.GETTERS;

const getData = state => state.data;
const getOption = state => state.option;

export default {
  [GET_DATA]: getData,
  [GET_OPTION]: getOption,
};
