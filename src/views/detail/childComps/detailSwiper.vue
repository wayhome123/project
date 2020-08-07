<template>
  <swiper class="changeHeight">
    <swiper-item v-for="(item, index) in topImg" :key="index">
      <div>
        <img :src="item" />
      </div>
    </swiper-item>
  </swiper>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "detailSwiper",
  data() {
    return {};
  },
  props: {
    topImg: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  components: {
    Swiper,
    SwiperItem
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style scoped>
.changeHeight {
  height: 300px;
  overflow: hidden;
}

img {
  width: 100%;
}
</style>
