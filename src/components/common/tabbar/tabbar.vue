<template>
  <div class="tabbar">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "tabbar",
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
.tabbar {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 49px;
  background-color: rgb(199, 199, 199);
  box-shadow: 0 1px 10px rgb(122, 122, 122);
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: space-around;
  position: fixed;
  left: 0;
  bottom: 0;
}
</style>
