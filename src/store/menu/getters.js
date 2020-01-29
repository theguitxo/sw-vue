import constants from '@/constants/menu';

const {
  DRAWER,
} = constants.GETTERS;

const drawer = state => state.drawer;

export default {
  [DRAWER]: drawer,
};
