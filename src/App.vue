<template>
  <div id="nav">
    <p>{{ $store.getters.userName }}</p>
    <p>{{ $store.getters.userSex }}</p>
    <button @click="updateName">设置名称</button>
    <button @click="getUserName">获取名称</button>
  </div>
</template>

<style lang="less">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
<script>
import { useStore } from "vuex";
export default {
  setup() {
    const store = useStore();
    const { dispatch, commit } = store;

    // 更新名称
    const updateName = () => {
      commit("user/updateName", "111");
    };

    // 获取名称
    const getUserName = () => {
      dispatch("user/getUserName");
    };
    return { store, updateName, getUserName };
  },
};
</script>
