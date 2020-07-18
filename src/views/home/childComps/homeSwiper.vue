<template>
  <swiper>
    <swiper-item v-for="item in banner" :key="item">
      <a :href="item.link">
        <img :src="item.image923" alt="item.title" />
      </a>
    </swiper-item>
  </swiper>
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
  components: {
    Swiper,
    SwiperItem
  }
};
</script>

<style scoped></style>
