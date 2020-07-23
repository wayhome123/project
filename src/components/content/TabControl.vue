<template>
  <div class="TabControl">
    <div v-for="(item, index) in titles" :key="item">
      <span :class="{ active: index === num }" @click="isActive(index)">{{
        item
      }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: "TabControl",

  props: {
    titles: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  data() {
    return {
      num: 0
    };
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    isActive(index) {
      this.num = index;
      this.$emit("tabClick", index);
    }
  }
};
</script>
<style>
.TabControl {
  display: flex;
  justify-content: space-around;
  font-size: 16px;
  padding: 5px 0;
  position: sticky;
  top: 44px;
  height: 30px;
  line-height: 30px;
  background-color: white;
}

span {
  cursor: pointer;
  padding: 2px;
}

.active {
  color: #ff8e96;
  border-bottom: 2px solid #ff8e96;
}
</style>
