<template>
  <div>
    <!-- 头部组件 -->
    <AppNavbar />
    <!-- header -->
    <AppHeader />
    <div class="app-body">
      <RouterView />
    </div>
    <!-- Footer -->
    <AppFooter />
  </div>
</template>

<script>
import AppNavbar from "@/components/app-navbar";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
export default {
  name: "Layout",
  components: {
    AppNavbar,
    AppHeader,
    AppFooter,
  },
};
</script>

<style lang="less" scoped>
.app-body {
  min-height: 600px;
}
</style>
