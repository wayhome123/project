<template>
  <div class="wrapper" ref="wrapper">
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import BScroll from "better-scroll";
export default {
  name: "BScroll",
  data() {
    return {
      scroll: null
    };
  },
  components: {},
  created() {},
  mounted() {
    this.scroll = new BScroll(this.$refs.wrapper, {
      click: true
    });
    this.scroll.on("scroll");
    //this.scroll.scrollTo(0, 0);
  },
  methods: {}
};
</script>
<style scoped></style>
