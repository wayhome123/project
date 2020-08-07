<template>
  <div class="detailBottomBar flex">
    <div>
      <div><i class="fa fa-user-circle"></i><span>客服</span></div>
      <div><i class="fa fa-home"></i><span>店铺</span></div>
      <div><i class="fa fa-star-o"></i><span>收藏</span></div>
    </div>
    <div class="buy-wrapper">
      <div class="cart" @click="clickCart">加入购物车</div>
      <div class="buy">购买</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "detailBottomBar",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    clickCart() {
      this.$emit("clickCart");
    }
  }
};
</script>
<style lang="less" scoped>
.flex {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.detailBottomBar {
  height: 49px;
  width: 100%;
  background-color: white;
  position: fixed;
  z-index: 999;
  bottom: 0;
  left: 0;
  display: flex;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.3);
  & > div {
    width: 100%;
    height: 100%;
    display: flex;
    .fa {
      font-size: 20px;
    }
    .fa-user-circle {
      color: #ff789a;
    }
    & > div {
      width: 100%;
      height: 100%;
      display: flex;
      flex-flow: column;
      align-items: center;
      justify-content: space-evenly;
    }
    .cart {
      // width: 100%;
      // height: 100%;
      background-color: #ffde0d;
    }
    .buy {
      background-color: #ff789a;
      color: white;
    }
  }
}
</style>
