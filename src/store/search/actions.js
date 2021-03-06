import dataUtils from '@/utils/data';

import apiConstants from '@/constants/api';
import searchConstants from '@/constants/search';

const {
  loadData,
} = dataUtils;

// search constants
const {
  MUTATIONS,
  GETTERS,
  ACTIONS,
} = searchConstants;

const {
  SEARCH_BY_PARAMETERS,
  RESET_PAGE,
  RESET_OPTION,
  RESET_QUERY,
} = ACTIONS;

// api constants
const {
  QUERY_PARAMETERS,
} = apiConstants;

/**
 * @description makes a search using the received parameters
 * @param {Object} param0 Vuex object
 * @param {Object} parameters Object with the type of search (films, people, ...) and the query
 */
async function searchByParameters({ commit, getters }, parameters) {
  // destructuring values from parameters
  const {
    option,
    query,
  } = parameters;

  // set value for option into the state
  commit(MUTATIONS.SET_OPTION, option);

  // inits an array for the items of query string and get the current page
  const queryStringItems = [];
  const currentPage = getters[GETTERS.GET_PAGE];

  // checks the values for page and query for mount the items of the query string
  if (currentPage === null) {
    commit(MUTATIONS.SET_PAGE, 1);
  } else {
    queryStringItems.push(`${QUERY_PARAMETERS.PAGE}=${currentPage}`);
  }
  if (query !== undefined && query !== null && query !== '') {
    commit(MUTATIONS.SET_QUERY, query);
    queryStringItems.push(`${QUERY_PARAMETERS.SEARCH}=${query}`);
  } else {
    commit(MUTATIONS.SET_QUERY, null);
  }

  // mounting the query string and the request url
  const queryString = queryStringItems.length > 0 ? `?${queryStringItems.join('&')}` : '';
  const url = `${apiConstants.URL}${apiConstants.OPTIONS[option.toUpperCase()]}/${queryString}`;

  // inits the value for control de number of results
  commit(MUTATIONS.SET_COUNT, 0);

  try {
    const result = await loadData(url);
    commit(MUTATIONS.SET_RESPONSE, result.data);
  } catch (error) {
    throw (error);
  }
}

/**
 * @description resets the current number of showing page
 * @param {Object} param0 Vuex object
 */
function resetPage({ commit }) {
  commit(MUTATIONS.SET_PAGE, null);
}

/**
 * @description reset the option to search
 * @param {Object} param0 Vuex object
 */
function resetOption({ commit }) {
  commit(MUTATIONS.SET_OPTION, null);
}

/**
 * @description reset the query to search
 * @param {Object} param0 Vuex object
 */
function resetQuery({ commit }) {
  commit(MUTATIONS.SET_QUERY, null);
}

export default {
  [SEARCH_BY_PARAMETERS]: searchByParameters,
  [RESET_PAGE]: resetPage,
  [RESET_OPTION]: resetOption,
  [RESET_QUERY]: resetQuery,
};
