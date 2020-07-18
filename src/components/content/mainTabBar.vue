<template>
  <div class="main-tab-bar">
    <div class="tabbar-list">
      <tabbar>
        <tabbaritem v-for="(item, index) in itemArray" :key="index" v-cloak>
          <router-link :to="item.router" replace>
            <h1 :class="item.icon"></h1>
            <h1>{{ item.name }}</h1>
          </router-link>
        </tabbaritem>
      </tabbar>
    </div>
  </div>
</template>

<script>
import tabbar from "../common/tabbar/tabbar";
import tabbaritem from "../common/tabbar/tabbaritem";

export default {
  name: "main-tab-bar",
  data() {
    return {
      itemArray: [
        { router: "/home", icon: "fa  fa-home", name: "首页" },
        { router: "/classify", icon: "fa  fa-bars", name: "分类" },
        { router: "/car", icon: "fa fa-shopping-cart", name: "购物车" },
        { router: "/mine", icon: "fa fa-user-o", name: "我的" }
      ]
    };
  },
  computed: {},
  components: {
    tabbar,
    tabbaritem
  },
  created() {},
  mounted() {},
  methods: {}
};
</script>
<style>
/*@import "../../assets/css/reset.css";*/
@import "../../../node_modules/font-awesome/css/font-awesome.min.css";

a {
  text-decoration: none;
  color: #000000;
}

h1 {
  margin: 0;
  padding: 0;
}

.router-link-active {
  color: rgb(255, 0, 0);
}
</style>
