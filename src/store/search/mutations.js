import constants from '@/constants/search';

const {
  MUTATIONS,
} = constants;

const {
  SET_OPTION,
  SET_QUERY,
  SET_RESPONSE,
  SET_RESULTS,
  SET_COUNT,
  SET_NEXT,
  SET_PREVIOUS,
  SET_PAGE,
} = MUTATIONS;

/**
 * @description sets the option used to execute the search
 * @param {Object} state State object of Vuex
 * @param {String} payload the option: films, people, ...
 */
function setOption(state, payload) {
  state.option = payload;
}

/**
 * @description sets the query used to execute the query
 * @param {Object} state State object of Vuex
 * @param {String} payload the query
 */
function setQuery(state, payload) {
  state.query = payload;
}

/**
 * @description sets the object returned by the API (results, count, ...)
 * @param {Object} state State object of Vuex
 * @param {Object} payload Object with the data returned by the API
 */
function setResponse(state, payload) {
  state.response = payload;
}

/**
 * @description sets the results for the current page (max. 10 items)
 * @param {Object} state State object of Vuex
 * @param {Array<Object>} payload the list of results
 */
function setResults(state, payload) {
  state.response.results = payload;
}

/**
 * @description sets the total of results for a search
 * @param {Object} state State object of Vuex
 * @param {Number} payload the total of results
 */
function setCount(state, payload) {
  state.response.count = payload;
}

/**
 * @description sets the url for navigate to the previous results page
 * @param {Object} state State object of Vuex
 * @param {String} payload the url to the previous page
 */
function setNext(state, payload) {
  state.reponse.next = payload;
}

/**
 * @description sets the url for navigate to the next results page
 * @param {Object} state State object of Vuex
 * @param {String} payload the url to the next page
 */
function setPrevious(state, payload) {
  state.response.previous = payload;
}

/**
 * @description sets the value for the results page
 * @param {Object} state State object of Vuex
 * @param {Number} payload number of the current page
 */
function setPage(state, payload) {
  state.page = payload;
}

export default {
  [SET_OPTION]: setOption,
  [SET_QUERY]: setQuery,
  [SET_RESPONSE]: setResponse,
  [SET_RESULTS]: setResults,
  [SET_COUNT]: setCount,
  [SET_NEXT]: setNext,
  [SET_PREVIOUS]: setPrevious,
  [SET_PAGE]: setPage,
};
