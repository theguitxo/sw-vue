const snackbar = {
  namespaced: true,
  state() {
    return {
      snackbar: false,
      message: '',
    };
  },
  getters: {
    snackbar(state) {
      return state.snackbar;
    },
    message(state) {
      return state.message;
    },
  },
  mutations: {
    snackbar(state, payload) {
      state.snackbar = payload;
    },
    message(state, payload) {
      state.message = payload;
    },
  },
  actions: {
    show({ commit }) {
      commit('snackbar', true);
    },
    hide({ commit }) {
      commit('snackbar', false);
    },
    message({ commit }, payload) {
      commit('message', payload);
    },
  },
};

export default snackbar;
