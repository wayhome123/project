<template>
  <div class="tab-bar-item">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tab-bar-titem",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style>
.tab-bar-item {
  display: flex;
  flex-flow: column;
  justify-content: space-evenly;
  align-items: center;
  text-align: center;
  font-size: 16px;
  color: rgb(0, 0, 0);
}
</style>
