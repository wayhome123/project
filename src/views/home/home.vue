<template>
  <div class="home">
    <nav-bar class="home-nav"><template #center>购物街</template> </nav-bar>
    <home-swiper :banner="banner" class="home-swiper"></home-swiper>
    <home-recommend :recommend="recommend"></home-recommend>
    <fashion></fashion>
    <tab-control :titles="titles"></tab-control>
    <ul>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
      <li>1111</li>
    </ul>
  </div>
</template>

<script>
//底部导航条
import NavBar from "components/common/navbar/NavBar.vue";

//home组件相关
import homeSwiper from "./childComps/homeSwiper";
import homeRecommend from "./childComps/homeRecommend";
import fashion from "components/content/fashion";
import { getHomeMultidata, getHomeGoods } from "network/home";
import TabControl from "components/content/TabControl";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      titles: ["流行", "新款", "精选"],
      goods: {
        pop: { page: 0, list: [] },
        new: { page: 0, list: [] },
        sell: { page: 0, list: [] }
      }
    };
  },
  components: {
    NavBar,
    homeSwiper,
    homeRecommend,
    fashion,
    TabControl
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  mounted() {},
  methods: {
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        console.log(res.data.list);
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page + 1;
      });
    }
  }
};
</script>
<style>
.home-nav {
  background-color: #ff8e96;
  color: white;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}
</style>
