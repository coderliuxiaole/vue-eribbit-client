import user from "@/store/modules/user.js";
import home from "@/store/modules/home.js";
import goods from "@/store/modules/goods.js";
import cart from "@/store/modules/cart.js";
import member from "@/store/modules/member.js";
import category from "@/store/modules/category.js";

import getters from "@/store/getters.js";
// Vuex 本地存储
import createPersistedState from "vuex-persistedstate";

import ls from "@/utils/SecureLS.js";

import { createStore } from "vuex";

export default createStore({
  namespaced: true,
  modules: {
    user,
    home,
    goods,
    cart,
    member,
    category,
  },
  getters,
  plugins: [
    createPersistedState({
      key: "erabbit-pc",
      paths: ["user"],
      storage: {
        getItem: (key) => ls.get(key),
        setItem: (key, value) => ls.set(key, value),
        removeItem: (key) => ls.remove(key),
      },
    }),
  ],
});
