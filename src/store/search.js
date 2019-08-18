import axios from 'axios';
import apiConstants from '@/constants/api';

const { URL, OPTIONS } = apiConstants;
const {
  FILMS,
  PEOPLE,
  PLANETS,
  SPECIES,
  STARSHIPS,
  VEHICLES,
} = OPTIONS;

const search = {
  namespaced: true,
  state: {
    searching: false,
    option: '',
    response: {
      count: 0,
      next: null,
      previous: null,
      results: [],
    },
  },
  getters: {
    searching(state) {
      return state.searching;
    },
    responseCount(state) {
      return state.response.count;
    },
    responseResults(state) {
      return state.response.results;
    },
    isPeople(state) {
      return state.option === PEOPLE;
    },
    isFilms(state) {
      return state.option === FILMS;
    },
    isPlanets(state) {
      return state.option === PLANETS;
    },
    isSpecies(state) {
      return state.option === SPECIES;
    },
    isStarships(state) {
      return state.option === STARSHIPS;      
    },
    isVehicles(state) {
      return state.option === VEHICLES;
    },
  },
  mutations: {
    /**
     * @description searching
     * @param {*} state
     * @param {*} payload
     */
    searching(state, payload) {
      state.searching = payload;
    },
    /**
     * @description option
     * @param {*} state
     * @param {*} payload
     */
    option(state, payload) {
      state.option = payload;
    },
    /**
     * @description
     * @param {*} state
     * @param {*} payload
     */
    response(state, payload) {
      state.response = payload;
    },   
  },
  actions: {
    /**
     * @description
     */
    initResponse({ commit }) {
      commit('response', {
        count: 0,
        next: null,
        previous: null,
        results: [],
      });
    },
    /**
     * @description search
     * @param {*} param0
     */
    async search({ commit, state, dispatch }) {
      try {
        dispatch('initResponse');
        commit('searching', true);
        const response = await axios.get(`${URL}${state.option}`);
        commit('response', {
          count: response.data.count,
          next: response.data.next,
          previous: response.data.previous,
          results: response.data.results,
        });
        console.log(response);
      } catch (e) {
        throw (e);
      } finally {
        commit('searching', false);
      }
    },
  },
};

export default search;
