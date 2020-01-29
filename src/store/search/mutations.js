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

function setOption(state, payload) {
  state.option = payload;
}

function setQuery(state, payload) {
  state.query = payload;
}

function setResponse(state, payload) {
  state.response = payload;
}

function setResults(state, payload) {
  state.response.results = payload;
}

function setCount(state, payload) {
  state.response.count = payload;
}

function setNext(state, payload) {
  state.reponse.next = payload;
}

function setPrevious(state, payload) {
  state.response.previous = payload;
}

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
