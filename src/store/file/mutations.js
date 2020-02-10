import constants from '@/constants/file';

const {
  MUTATIONS,
} = constants;

const {
  SET_DATA,
} = MUTATIONS;

function setData(state, payload) {
  state.data = payload;
}

export default {
  [SET_DATA]: setData,
};
