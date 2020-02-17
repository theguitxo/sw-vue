import constants from '@/constants/about';

const {
  SHOW,
} = constants.MUTATIONS;

/**
 * @description modifty the state to show or hide the about pop-up
 * @param {Object} state State object of Vuex
 * @param {Boolen} payload true or false
 */
function show(state, payload) {
  state.show = payload;
}

export default {
  [SHOW]: show,
};
