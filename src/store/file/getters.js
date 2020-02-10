import constants from '@/constants/file';

const {
  GET_DATA,
} = constants.GETTERS;

const getData = state => state.data;

export default {
  [GET_DATA]: getData,
};
