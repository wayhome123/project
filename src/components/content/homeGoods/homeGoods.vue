<template>
  <div class="homeGoods">
    <home-goods-list
      v-for="(item, index) in goods"
      :key="index"
      :goodList="item"
      class="goods-list"
    >
      <!-- {{item}} -->
    </home-goods-list>
  </div>
</template>

<script>
import homeGoodsList from "./homeGoodsList";

export default {
  name: "homeGoods",
  props: {
    goods: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {};
  },
  components: {
    homeGoodsList
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style>
.homeGoods {
  display: flex;
  flex-flow: wrap;
  justify-content: space-evenly;
}

.goods-list {
  width: 48%;
  margin-bottom: 5px;
}
</style>
