<template>
  <div class="checkButton">
    <img src="~assets/img/detail/check_active.png" alt="" v-show="isChecked" />
  </div>
</template>

<script>
export default {
  name: "checkButton",
  data() {
    return {};
  },
  props: {
    isChecked: {
      type: Boolean,
      default: false
    }
  },
  computed: {},
  components: {},
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style lang="less" scoped>
.checkButton {
  width: 20px;
  height: 20px;
  overflow: hidden;
  border-radius: 50%;
  border: 1px solid #ececec;
  img {
    width: 100%;
  }
}
</style>
