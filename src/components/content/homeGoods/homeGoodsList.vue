<template>
  <div class="homeGoodsList" @click="goodsClick">
    <div class="list">
      <div class="img-wrapper">
        <img v-lazy="showImage" alt="" @load="imgLoad" />
      </div>
      <p>{{ goodList.title }}</p>
      <div>
        <span class="price">{{ goodList.price }}</span>
        <span class="collect"
          ><i :class="collect" @click="changeStatus"></i> {{ goodList.cfav }}
        </span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeGoodsList",
  data() {
    return {
      collect: "fa fa-star-o"
    };
  },
  props: {
    goodList: {
      type: Object,
      default() {
        return {};
      }
    }
  },
  computed: {
    showImage() {
      return this.goodList.image || this.goodList.show.img;
    }
  },
  components: {},
  created() {},
  mounted() {},
  methods: {
    changeStatus() {
      // this.collect = "fa fa-star";
    },
    imgLoad() {
      if (this.$route.path.indexOf("/home") !== -1) {
        this.$bus.$emit("homeImgLoad");
      } else if (this.$route.path.indexOf("/detail") !== -1) {
        this.$bus.$emit("detailImgLoad");
      }
    },
    goodsClick() {
      this.$router.push("/detail/" + this.goodList.iid);
    }
  }
};
</script>
<style>
.list {
  line-height: 15px;
  display: flex;
  flex-flow: column;
  font-size: 12px;
  justify-content: center;
  align-items: center;
}

.list img {
  width: 100%;
  border-radius: 8px;
}

p {
  text-align: center;
  width: 100%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
}

span {
  margin: 0 5px;
}

span.price {
  color: #ff8e96;
}
</style>
