<template>
  <div class="cart-bot-bar flex">
    <div class="checkAll">
      <checkButton
        class="check"
        id="check"
        :isChecked="isCheckedAll"
        @click.native="checkClick"
      />
      &ensp;<label for="check"> 全部</label>
    </div>
    <div>合计：{{ totalPrice }}</div>
    <div class="toPay">去结算{{ checkLength }}</div>
  </div>
</template>

<script>
import checkButton from "components/content/checkButton";
import { mapGetters } from "vuex";
export default {
  name: "CartBotBar",
  computed: {
    totalPrice() {
      return (
        "￥" +
        this.$store.state.cartList
          .filter(item => {
            return item.checked;
          })
          .reduce((preValue, item) => {
            return preValue + item.price * item.count;
          }, 0)
          .toFixed(2)
      );
    },
    checkLength() {
      return (
        "(" +
        this.$store.state.cartList.filter(item => item.checked).length +
        ")"
      );
    },
    // eslint-disable-next-line vue/return-in-computed-property
    isCheckedAll: {
      get: function() {
        if (this.cartList.length === 0) {
          return false;
        } else {
          return !this.cartList.find(item => !item.checked);
        }
      },
      set: function() {}
    },
    ...mapGetters(["cartList"])
  },
  components: { checkButton },
  methods: {
    checkClick() {
      // console.log("123");
      if (this.isCheckedAll) {
        this.cartList.forEach(item => {
          item.checked = false;
        });
      } else {
        this.isCheckedAll = false;
        this.cartList.forEach(item => {
          item.checked = true;
        });
      }
    }
  }
};
</script>

<style lang="less" scoped="scoped">
.flex {
  display: flex;
}
.cart-bot-bar {
  height: 40px;
  padding: 0 0px 0 10px;
  font-size: 13px;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-bottom: 1px solid #ececec;
  border-top: 1px solid #ececec;
  .check {
    width: 18px;
    height: 18px;
    overflow: hidden;
    vertical-align: bottom;
    border: 1px solid #ececec;
    margin-right: 5px;
  }
  .check:checked {
    border: 1px solid var(--color-high-text);
    background: url(~assets/img/detail/check_active.png) no-repeat center;
    background-size: cover;
  }
  .checkAll {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }
}
.toPay {
  width: 20%;
  height: 100%;
  display: flex;
  align-items: center;
  background-color: red;
  color: white;
  justify-content: center;
}
</style>
