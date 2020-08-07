<template>
  <div id="app">
    <keep-alive exclude="detail">
      <router-view></router-view>
    </keep-alive>
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
