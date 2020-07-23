<template>
  <div class="home">
    <nav-bar class="home-nav"><template #center>购物街</template> </nav-bar>
    <scroll class="content" @click.native="scrollClick" ref="scroll">
      <home-swiper :banner="banner" class="home-swiper"></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <fashion></fashion>
      <tab-control :titles="titles" @tabClick="tabClick"></tab-control>
      <homeGoods :goods="showGoods"></homeGoods>
    </scroll>
    <back-top @click.native="backTopClick"></back-top>
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

//home相关组件
import homeSwiper from "./childComps/homeSwiper";
import homeRecommend from "./childComps/homeRecommend";
import fashion from "components/content/fashion";
import { getHomeMultidata, getHomeGoods } from "network/home";
import TabControl from "components/content/TabControl";
import homeGoods from "components/content/homeGoods/homeGoods";

//scroll滑动组件
import scroll from "components/common/scroll";

//回到顶部插件
import backTop from "components/common/backTop";

export default {
  name: "home",
  data() {
    return {
      banner: [],
      recommend: [],
      titles: ["流行", "新款", "精选"],
      tab: "pop",
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
    TabControl,
    homeGoods,
    scroll,
    backTop
  },
  created() {
    this.getHomeMultidata();

    this.getHomeGoods("pop");
    this.getHomeGoods("new");
    this.getHomeGoods("sell");
  },
  computed: {
    showGoods() {
      return this.goods[this.tab].list;
    }
  },
  mounted() {},
  methods: {
    /**
     * 事件监听相关操作
     */
    tabClick(index) {
      switch (index) {
        case 0:
          this.tab = "pop";
          break;
        case 1:
          this.tab = "new";
          break;
        case 2:
          this.tab = "sell";
          break;
      }
    },

    backTopClick() {
      this.$refs.scroll.scroll.scrollTo(0, 0, 1000);
    },

    /**网络相关的操作 */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = this.goods[type].page + 1;
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page + 1;
      });
    }
  }
};
</script>
<style scoped>
.home {
  height: 100vh;
}

.home-nav {
  background-color: #ff8e96;
  color: white;
  position: sticky;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999;
}

.content {
  height: calc(100% - 93px);
  overflow: hidden;
}
</style>
