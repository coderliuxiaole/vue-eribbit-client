// import { topCategory } from "@/api/constants";
import { findAllcategory } from "@/api/category.js";
export default {
  namespaced: true,
  state() {
    list: [];
  },

  mutations: {
    setList(state, payload) {
      state.list = payload;
    },
  },

  actions: {
    async getList({ commit }) {
      const { result } = await findAllcategory();
      commit("setList", result);
    },
  },
};
