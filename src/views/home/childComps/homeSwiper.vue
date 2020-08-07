<template>
  <div>
    <swiper>
      <swiper-item v-for="(item, index) in banner" :key="index">
        <div>
          <a :href="item.link">
            <img :src="item.image" alt="item.title" @load="swiperImgLoad" />
          </a>
        </div>
      </swiper-item>
    </swiper>
  </div>
</template>

<script>
import { Swiper, SwiperItem } from "components/common/swiper/index";

export default {
  name: "homeSwiper",
  props: {
    banner: {
      type: Array,
      default() {
        return [];
      }
    }
  },
  methods: {
    swiperImgLoad() {
      this.$emit("swiperImgLoad");
    }
  },
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped></style>
