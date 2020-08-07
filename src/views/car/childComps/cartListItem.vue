<template>
  <div>
    <div class="cart-list-main flex">
      <div class="cart-list-left flex">
        <check-button :isChecked="product.checked" @click.native="checkClick" />
        <img :src="product.img" alt="" class="goods-img" />
      </div>
      <div class="cart-list-right">
        <div class="goods-name one-txt-cut">{{ product.title }}</div>
        <div class="goods-info flex">
          <span class="price">￥{{ product.price }}</span
          ><span>x{{ product.count }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import checkButton from "components/content/checkButton";
export default {
  name: "cartListproduct",
  data() {
    return {};
  },
  props: {
    product: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {},
  components: { checkButton },
  created() {},
  mounted() {},
  methods: {
    checkClick() {
      this.product.checked = !this.product.checked;
    }
  }
};
</script>
<style lang="less" scoped>
.flex {
  display: flex;
}
.cart-list-main {
  padding: 10px;
  border-bottom: 1px solid #ececec;
}
.cart-list-left {
  width: 35%;
  align-items: center;

  .goods-img {
    width: 52px;
    height: 66px;
    overflow: hidden;
    border: 1px solid #ececec;
    margin: 0 10px;
    border-radius: 6px;
    vertical-align: middle;
  }
}
.cart-list-right {
  width: 74%;
  position: relative;
  .goods-name {
    width: 100%;
    font-size: 13px;
  }
  .goods-info {
    justify-content: space-between;
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    .price {
      color: #f9cd0b;
    }
  }
}
</style>
