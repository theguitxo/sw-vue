import constants from '@/constants/file';

const {
  GET_DATA,
} = constants.GETTERS;

/**
 * @description returns the data of an item from the state
 * @param {Object} state State object of Vuex
 */
const getData = state => state.data;

export default {
  [GET_DATA]: getData,
};
