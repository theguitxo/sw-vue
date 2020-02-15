import constants from '@/constants/about';

const {
  SHOW,
} = constants.GETTERS;

const show = state => state.show;

export default {
  [SHOW]: show,
};
