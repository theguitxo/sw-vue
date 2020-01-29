import constants from '@/constants/file';

const {
  MUTATIONS,
} = constants;

const {
  SET_DATA,
  SET_OPTION,
} = MUTATIONS;

function setData(state, payload) {
  state.data = payload;
}

function setOption(state, payload) {
  state.option = payload;
}

export default {
  [SET_DATA]: setData,
  [SET_OPTION]: setOption,
};
