<template>
  <div class="car">
    <nav-bar class="navbar">
      <template #center>
        <div>购物车({{ length }})</div>
      </template>
    </nav-bar>
    <scroll ref="scroll" class="content-scroll">
      <cart-list :cartList="list" />
    </scroll>
    <cartBottomBar />
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
import scroll from "components/common/scroll";
import { mapGetters } from "vuex";
import cartList from "./childComps/cartList";
import cartBottomBar from "./childComps/cartBottomBar";

export default {
  name: "car",
  data() {
    return {};
  },
  computed: {
    //第一种方法：数组方法 ...mapGetters(["cartLength"])
    //第二种方法：对象方法
    ...mapGetters({
      length: "cartLength",
      list: "cartList"
    })
  },
  components: {
    NavBar,
    scroll,
    cartList,
    cartBottomBar
  },
  created() {},
  mounted() {},
  methods: {},
  activated() {
    this.$refs.scroll.refresh();
  }
};
</script>
<style lang="less" scoped>
.car {
  height: 100vh;
}

.navbar {
  position: relative;
  background-color: var(--color-tint);
  z-index: 999;
  color: white;
}

.content-scroll {
  height: calc(100% - 44px - 49px - 40px);
  overflow: hidden;
}
</style>
