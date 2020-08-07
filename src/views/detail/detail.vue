<template>
  <div class="detail">
    <detail-nav-bar
      class="detail-nav-bar"
      @titleClick="titleClick"
      ref="navbar"
    />
    <scroll class="content" ref="scroll" @scroll="detailScroll" :probeType="3">
      <!-- <cart-list :cartList="$store.getters.cartList"/> -->
      <detail-swiper :topImg="topImg" />
      <detail-base-info :goods="goods" />
      <detail-shop-info :shop="shop" />
      <detail-goods-info
        :detail-info="detailInfo"
        @goodsImgLoad="goodsImgLoad"
      />
      <detail-param-info ref="param" :paramInfo="paramInfo" />
      <detail-comment-info ref="comment" :commentInfo="commentInfo" />
      <detail-goods-list ref="goodsList" :goods="recommend" />
    </scroll>
    <backTop @click.native="backTopClick" v-show="isShow" />
    <detail-bottom-bar @clickCart="clickCart" />
    <!-- <toast message="message"           :isShow="show" /> -->
  </div>
</template>

<script>
import detailNavBar from "./childComps/detailNavBar.vue";
import detailSwiper from "./childComps/detailSwiper.vue";
import detailBaseInfo from "./childComps/detailBaseInfo";
import detailShopInfo from "./childComps/detailShopInfo";
import detailGoodsInfo from "./childComps/detailGoodsInfo";
import detailParamInfo from "./childComps/detailParamInfo";
import detailCommentInfo from "./childComps/detailCommentInfo";
import {
  getDetail,
  Goods,
  Shop,
  GoodsParam,
  getRecommend
} from "network/detail";
import { debounce } from "common/debounce";
import scroll from "components/common/scroll";
import detailGoodsList from "components/content/homeGoods/homeGoods";
import detailBottomBar from "./childComps/detailBottomBar";
import backTop from "components/common/backTop";

import { mapActions } from "vuex";

export default {
  name: "detail",
  data() {
    return {
      iid: null,
      topImg: [],
      goods: {},
      shop: {},
      detailInfo: {},
      paramInfo: {},
      commentInfo: {
        user: {}
      },
      recommend: [],
      refresh: null,
      titleTopY: [],
      getTitleTopY: "",
      scrollTopY: [],
      price: [15.645],
      currentIndex: Number,
      isShow: false,
      show: false
      // message: ""
    };
  },
  components: {
    detailNavBar,
    detailSwiper,
    detailBaseInfo,
    detailShopInfo,
    scroll,
    detailGoodsInfo,
    detailParamInfo,
    detailCommentInfo,
    detailGoodsList,
    detailBottomBar,
    backTop
    // toast
  },
  created() {
    this.iid = this.$route.params.iid;
    getDetail(this.iid).then(res => {
      const data = res.result;
      this.topImg = data.itemInfo.topImages;
      this.goods = new Goods(
        data.itemInfo,
        data.columns,
        data.shopInfo.services
      );
      this.shop = new Shop(data.shopInfo);
      this.detailInfo = data.detailInfo;
      this.paramInfo = new GoodsParam(
        data.itemParams.info,
        data.itemParams.rule
      );
      //如果评论数不等于0
      if (data.rate.cRate !== 0) {
        this.commentInfo = data.rate.list[0];
      }
    });
    getRecommend().then(res => {
      this.recommend = res.data.list;
    });
    this.getTitleTopY = debounce(() => {
      if (this.$refs.param && this.$refs.comment && this.$refs.goodsList) {
        this.$nextTick(() => {
          //获取不同组件的offsetTop
          this.titleTopY = [];
          this.titleTopY.push(0);
          this.titleTopY.push(this.$refs.param.$el.offsetTop - 44);
          this.titleTopY.push(this.$refs.comment.$el.offsetTop - 44);
          this.titleTopY.push(this.$refs.goodsList.$el.offsetTop - 44);
          this.titleTopY.push(Number.MAX_VALUE);
        });
      }
    }, 350);
  },
  mounted() {
    this.refresh = debounce(this.$refs.scroll.refresh, 50);
    this.$bus.$on("detailImgLoad", () => this.getTitleTopY());
  },
  methods: {
    ...mapActions(["addCart"]),
    goodsImgLoad() {
      this.refresh();
      this.getTitleTopY();
    },
    titleClick(index) {
      this.$refs.scroll.scrollTo(0, -this.titleTopY[index], 500);
    },
    //滚动内容显示对应标题
    detailScroll(position) {
      let length = this.titleTopY.length;
      for (let i = 0; i < length - 1; i++) {
        if (
          this.currentIndex !== i &&
          -position.y >= this.titleTopY[i] &&
          -position.y <= this.titleTopY[i + 1]
        ) {
          this.$refs.navbar.num = i;
          this.currentIndex = i;
        }
      }
      //是否回到顶部
      this.isShow = -position.y > 1000;
    },
    backTopClick() {
      //点击回到顶部
      this.$refs.scroll.scrollTo(0, 0, 500);
    },
    clickCart() {
      const cart = {};
      cart.img = this.topImg[0];
      cart.title = this.goods.title;
      cart.desc = this.goods.desc;
      cart.price = this.goods.realPrice;
      cart.iid = this.iid;
      // this.addCart(cart).then(res => {
      //   // this.show = true;
      //   // this.message = res;
      //   // let timer = null;
      //   // if (timer) {
      //   //   clearTimeout(timer);
      //   // }
      //   // setTimeout(() => {
      //   //   this.show = false;
      //   // }, 500);
      // });
    }
  }
};
</script>
<style lang="less" scoped>
.detail-nav-bar {
  background-color: rgb(255, 255, 255);
  position: relative;
  z-index: 9999;
}

.detail {
  position: relative;
  z-index: 9;
  background-color: #fff;
  height: 100vh;
}

.content {
  height: calc(100% - 44px - 49px);
}
</style>
