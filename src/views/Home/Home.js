import linksConstants from '@/constants/links';

const {
  GITHUB_REPOSITORY,
  SWAPI_URL,
} = linksConstants;

export default {
  name: 'Home',

  data() {
    return {
      GITHUB_REPOSITORY,
      SWAPI_URL,
    };
  },
};
