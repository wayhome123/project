<template>
  <div class="toast" v-show="isShow">
    <div>
      {{ message }}
    </div>
  </div>
</template>

<script>
export default {
  name: "toast",
  data() {
    return {};
  },
  props: {
    message: {
      type: String,
      default: ""
    },
    isShow: {
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
.toast {
  position: fixed;
  top: 40%;
  left: 35%;
  width: 20%;
  text-align: center;
  background-color: rgba(0, 0, 0, 0.5);
  color: white;
  padding: 15px 30px;
  border-radius: 10px;
}
</style>
