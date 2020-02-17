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

/**
 * @description returns the value of search option
 * @param {Object} state Object state of Vuex
 */
const getOption = state => state.option;

/**
 * @description returns the number of results for a search
 * @param {Object} state Object state of Vuex
 */
const getCount = state => state.response.count;

/**
 * @description returns the url to the next page of results
 * @param {Object} state Object state of Vuex
 */
const getNext = state => state.response.next;

/**
 * @description returns the url to the previous page of results
 * @param {Object} state Object state of Vuex
 */
const getPrevious = state => state.response.previous;

/**
 * @description returns the results for the current page (max. 10 items)
 * @param {Object} state Object state of Vuex
 */
const getResult = state => state.response.results;

/**
 * @description returns the current page of results
 * @param {Object} state Object state of Vuex
 */
const getPage = state => state.page;

/**
 * @description returns query used to execute the search
 * @param {Object} state Object state of Vuex
 */
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
