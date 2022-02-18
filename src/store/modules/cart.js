export default {
  namespaced: true,
  state() {
    return {
      userName: "刘嘉乐",
      userSex: "男",
      userInfo: {
        userName: "111",
        userAge: "111",
        userSex: "nv ",
      },
    };
  },

  mutations: {
    updateName(state, payload) {
      state.userName = payload;
    },
  },

  actions: {
    getUserName({ commit }) {
      setTimeout(() => {
        commit("updateName", "1312321312");
      }, 200);
    },
  },
};
