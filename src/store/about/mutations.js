import constants from '@/constants/about';

const {
  SHOW,
} = constants.MUTATIONS;

function show(state, payload) {
  state.show = payload;
}

export default {
  [SHOW]: show,
};
