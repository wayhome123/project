<template>
  <div class="home">
    <nav-bar class="home-nav"><template #center>购物街</template> </nav-bar>
    <tab-control
      :titles="titles"
      @tabClick="tabClick"
      ref="tabControl1"
      class="tab-control"
      v-show="isTabFix"
    ></tab-control>
    <scroll
      class="content"
      ref="scroll"
      :probeType="3"
      @scroll="contentScroll"
      :pull-up-load="true"
      @pullingUp="loadMore"
    >
      <home-swiper
        :banner="banner"
        class="home-swiper"
        @swiperImgLoad="swiperImgLoad"
      ></home-swiper>
      <home-recommend :recommend="recommend"></home-recommend>
      <fashion></fashion>
      <tab-control
        :titles="titles"
        @tabClick="tabClick"
        ref="tabControl2"
      ></tab-control>
      <homeGoods :goods="showGoods"></homeGoods>
    </scroll>
    <back-top @click.native="backTopClick" v-show="isShow"></back-top>
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

import { debounce } from "../..//common/debounce.js";

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
      },
      isShow: false,
      isLoad: true,
      tabOffsetTop: 0,
      isTabFix: false,
      saveY: 0
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
  mounted() {
    const refresh = debounce(this.$refs.scroll.refresh, 50);

    this.$bus.$on("homeImgLoad", () => {
      refresh();
    });
  },
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
      //让两个tabControl保持一致
      this.$refs.tabControl1.num = index;
      this.$refs.tabControl2.num = index;
    },

    backTopClick() {
      this.$refs.scroll.scrollTo(0, 0, 1000);
    },

    contentScroll(position) {
      this.isShow = -position.y > 1000;
      this.isTabFix = -position.y > this.tabOffsetTop;
    },
    loadMore() {
      this.getHomeGoods(this.tab);
      // this.scroll.scroll.refresh();
    },
    swiperImgLoad() {
      if (this.isLoad) {
        this.tabOffsetTop = this.$refs.tabControl2.$el.offsetTop - 44;
        this.isLoad = !this.isLoad;
      }
    },

    /**网络相关的操作 */
    getHomeMultidata() {
      getHomeMultidata().then(res => {
        this.banner = res.data.banner.list;
        this.recommend = res.data.recommend.list;
      });
    },
    getHomeGoods(type) {
      const page = (this.goods[type].page += 1);
      getHomeGoods(type, page).then(res => {
        this.goods[type].list.push(...res.data.list);
        this.goods[type].page += 1;
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
  /* position: absolute;
  left: 0;
  right: 0;
  top: 0;
  z-index: 999; */
}

.content {
  height: calc(100% - 93px);
  overflow: hidden;
  /* position: relative; */
  /* top: 44px; */
}

.tab-control {
  position: absolute;
  left: 0;
  top: 43px;
  z-index: 9999;
  right: 0;
}
</style>
