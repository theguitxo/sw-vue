import constants from '@/constants/search';

const {
  GETTERS,
} = constants;

const {
  GET_OPTION,
  GET_COUNT,
  GET_NEXT,
  GET_PREVIOUS,
  GET_RESULT,
  GET_PAGE,
  GET_QUERY,
} = GETTERS;

const getOption = state => state.option;
const getCount = state => state.response.count;
const getNext = state => state.response.next;
const getPrevious = state => state.response.previous;
const getResult = state => state.response.results;
const getPage = state => state.page;
const getQuery = state => state.query;

export default {
  [GET_OPTION]: getOption,
  [GET_COUNT]: getCount,
  [GET_NEXT]: getNext,
  [GET_PREVIOUS]: getPrevious,
  [GET_RESULT]: getResult,
  [GET_PAGE]: getPage,
  [GET_QUERY]: getQuery,
};
