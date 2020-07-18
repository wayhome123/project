<template>
  <div id="app">
    <router-view></router-view>
    <main-tab-bar id="main-tab-bar"></main-tab-bar>
  </div>
</template>

<script>
import mainTabBar from "components/content/mainTabBar";
// import swiper from "components/common/swiper/Swiper";

export default {
  name: "app",
  components: {
    mainTabBar
  }
};
</script>

<style lang="less">
@import "assets/css/base.css";
</style>
