<template>
  <div class="homeGoodsList">
    <div class="list">
      <div class="img-wrapper">
        <img :src="goodList.show.img" alt="" />
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
  components: {},
  created() {},
  mounted() {},
  methods: {
    changeStatus() {
      // this.collect = "fa fa-star";
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
