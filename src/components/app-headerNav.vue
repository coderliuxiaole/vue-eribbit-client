<template>
  <ul class="app-header-nav" v-if="list">
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li v-for="item in list" :key="item.id">
      <router-link to="/">{{ item.name }}</router-link>
      <div class="layer">
        <ul>
          <li v-for="sub in item.children" :key="sub.id">
            <router-link to="/">
              <img :src="sub.picture" alt="" />
              <p>{{ sub.name }}</p>
            </router-link>
          </li>
        </ul>
      </div>
    </li>
  </ul>

  <ul class="app-header-nav" v-else>
    <li class="home"><RouterLink to="/">首页</RouterLink></li>
    <li><a href="#">居家</a></li>
    <li><a href="#">美食</a></li>
    <li><a href="#">服饰</a></li>
    <li><a href="#">母婴</a></li>
    <li><a href="#">个护</a></li>
    <li><a href="#">严选</a></li>
    <li><a href="#">数码</a></li>
    <li><a href="#">运动</a></li>
    <li><a href="#">杂项</a></li>
  </ul>
</template>

<script>
import { useStore } from "vuex";
import { computed } from "vue";
export default {
  name: "AppHeaderNav",
  setup() {
    const store = useStore();
    const list = computed(() => {
      return store.state.category.list;
    });

    return { list };
  },
};
</script>

<style scoped lang="less">
.app-header-nav {
  width: 820px;
  display: flex;
  justify-content: space-around;
  padding-left: 40px;
  position: relative;
  z-index: 998;
  > li {
    margin-right: 40px;
    width: 38px;
    text-align: center;
    > a {
      font-size: 16px;
      line-height: 32px;
      height: 32px;
      display: inline-block;
    }
    &:hover {
      > a {
        color: @xtxColor;
        border-bottom: 1px solid @xtxColor;
      }
      > .layer {
        height: 132px;
        opacity: 1;
      }
    }
  }
}
.layer {
  width: 1240px;
  background-color: #fff;
  position: absolute;
  left: -200px;
  top: 56px;
  height: 0;
  overflow: hidden;
  opacity: 0;
  box-shadow: 0 0 5px #ccc;
  transition: all 0.2s 0.1s;
  ul {
    display: flex;
    flex-wrap: wrap;
    padding: 0 70px;
    align-items: center;
    height: 132px;
    li {
      width: 110px;
      text-align: center;
      img {
        width: 60px;
        height: 60px;
      }
      p {
        padding-top: 10px;
      }
      &:hover {
        p {
          color: @xtxColor;
        }
      }
    }
  }
}
</style>
