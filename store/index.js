import Vuex from "vuex";
import portfolio from "./modules/portfolio";

const createStore = () => {
  return new Vuex.Store({
    modules: {
      portfolio: { ...portfolio, namespaced: true }
    },
    strict: false
  });
};

export default createStore;
