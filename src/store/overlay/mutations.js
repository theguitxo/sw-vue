import constants from '@/constants/overlay';

const {
  VISIBLE,
} = constants.MUTATIONS;

function visible(state, payload) {
  state.visible = payload;
}

export default {
  [VISIBLE]: visible,
};
