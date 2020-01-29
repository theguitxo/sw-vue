export default {
  STORE_NAME: 'search',
  MUTATIONS: {
    SET_OPTION: 'setOption',
    SET_QUERY: 'setQuery',
    SET_RESPONSE: 'setResponse',
    SET_RESULTS: 'setResults',
    SET_COUNT: 'setCount',
    SET_NEXT: 'setNext',
    SET_PREVIOUS: 'setPrevious',
    SET_PAGE: 'setPage',
    SET_LIST_PAGE: 'setListPage',
  },
  GETTERS: {
    GET_OPTION: 'getOption',
    GET_COUNT: 'getCount',
    GET_NEXT: 'getNext',
    GET_PREVIOUS: 'getPrevious',
    GET_RESULT: 'getResult',
    GET_PAGE: 'getPage',
    GET_QUERY: 'getQuery',
  },
  ACTIONS: {
    SEARCH_BY_PARAMETERS: 'searchByParameters',
    RESET_PAGE: 'resetPage',
    RESET_OPTION: 'resetOption',
    RESET_QUERY: 'resetQuery',
  },
  MESSAGES: {
    NO_DATA: 'No data found',
  },
  ROUTES: {
    RESULTS: 'results',
  },
  RESULTS: {
    BY_PAGE: 10,
  },
};
