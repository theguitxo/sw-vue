import constants from '@/constants/file';

const {
  MUTATIONS,
} = constants;

const {
  SET_DATA,
} = MUTATIONS;

/**
 * @descripton sets the data for the item, can be the data or null (to reset)
 * @param {Object} state State object of Vuex
 * @param {Object} payload Object with the data or null (if it's necessary reset the object)
 */
function setData(state, payload) {
  state.data = payload;
}

export default {
  [SET_DATA]: setData,
};
