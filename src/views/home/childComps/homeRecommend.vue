<template>
  <div>
    <div class="recommend">
      <div v-for="item in recommend" :key="item" class="recommendList">
        <a :href="item.link">
          <img :src="item.image" alt="item.title" />
          <h4>{{ item.title }}</h4>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "homeRecommend",
  props: {
    recommend: Array,
    default() {
      return [];
    }
  }
};
</script>

<style scoped>
.recommend {
  padding: 15px 0 20px 0;
  width: 100%;
  display: flex;
  justify-content: space-evenly;
  box-shadow: 0 1px 10px rgba(0, 0, 0, 0.5);
}

.recommendList {
  width: 22%;
  display: flex;
  justify-content: space-between;
  text-align: center;
}

.recommendList img {
  width: 100%;
}

.recommendList h4 {
  margin: 10px 0;
}
</style>
