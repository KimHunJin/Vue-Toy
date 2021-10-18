import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
  state() {
    return {
      tabs: {
        1: [
          { name: "ATab", value: 1 },
          { name: "BTab", value: 2 },
        ],
        2: [
          { name: "CTab", value: 3 },
          { name: "DTab", value: 4 },
        ],
      },
    };
  },
  getters: {
    hasActionPermission: (state) => (auth) => {
      auth = parseInt(auth, 10);
      console.log("state", state.tabs[auth]);
      return state.tabs[auth];
    },
  },
});
