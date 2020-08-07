<template>
  <div class="backTop">
    <i class="fa fa-arrow-up"></i>
  </div>
</template>

<script>
export default {
  name: "backTop",
  data() {
    return {};
  },
  components: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
@import "../../../node_modules/font-awesome/css/font-awesome.min.css";

.backTop {
  opacity: 0.85;
  text-align: center;
  line-height: 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  font-size: 25px;
  position: fixed;
  right: 12px;
  bottom: 60px;
  color: #ff3f2d;
  background-color: white;
}
</style>
