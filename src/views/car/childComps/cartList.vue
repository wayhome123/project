<template>
  <div class="cartList">
    <cart-list-item v-for="item in cartList" :key="item.iid" :product="item" />
  </div>
</template>

<script>
import cartListItem from "./cartListItem";
export default {
  name: "cartList",
  data() {
    return {};
  },
  props: {
    cartList: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  computed: {},
  components: {
    cartListItem
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped></style>
