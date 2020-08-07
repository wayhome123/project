<template>
  <div class="detailNavBar">
    <nav-bar>
      <template #left>
        <div class="icon" @click="back">
          <i class="fa fa-angle-left"></i>
        </div>
      </template>
      <template #center>
        <div>
          <div class="title">
            <div
              v-for="(item, index) in titles"
              :key="index"
              class="item-title"
              :class="{ isActive: num === index }"
              @click="itemClick(index)"
            >
              {{ item }}
            </div>
          </div>
        </div>
      </template>
    </nav-bar>
  </div>
</template>

<script>
import NavBar from "components/common/navbar/NavBar";
export default {
  name: "detailNavBar",
  data() {
    return {
      titles: ["商品", "参数", "评论", "推荐"],
      num: 0
    };
  },
  components: {
    NavBar
  },
  created() {},
  mounted() {},
  methods: {
    itemClick(index) {
      this.num = index;
      this.$emit("titleClick", index);
    },
    back() {
      this.$router.back();
    }
  }
};
</script>
<style scoped>
.icon {
  text-align: center;
  font-size: 30px;
  line-height: 40px;
}

.title {
  display: flex;
  justify-content: space-between;
  padding: 0 30px;
}

.item-title {
  flex: 1;
  font-size: 14px;
}

.isActive {
  color: #ff8e96;
}
</style>
