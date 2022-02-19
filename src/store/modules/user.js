export default {
  namespaced: true,
  state() {
    return {
      userName: "刘嘉乐",
      userSex: "男",
      profile: {
        userName: "111",
        userAge: "111",
        userSex: "nv ",
        token: "",
      },
    };
  },

  mutations: {
    setProfile(state, payload) {
      state.profile = payload;
    },
  },

  actions: {
    getUserName({ commit }) {
      setTimeout(() => {
        commit("setProfile", {
          userName: "123123",
          userSex: "男",
        });
      }, 200);
    },
  },
};
