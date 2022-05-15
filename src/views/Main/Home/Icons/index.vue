<template>
  <div class="icons">
    <div class="item" v-for="icon in icons" :key="icon.id" @click="handleClick">
      <div class="icon"><img :src="icon.url" :alt="icon.url" /></div>
      <div class="text">{{ icon.text }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Icons",
  data() {
    return {
      icons: [
        { id: 1, url: "icons/icon1.png", text: "全职" },
        { id: 2, url: "icons/icon2.png", text: "临时工" },
        { id: 3, url: "icons/icon3.png", text: "找企业" },
        { id: 4, url: "icons/icon4.png", text: "找人才" },
        { id: 5, url: "icons/icon5.png", text: "附近职位" },
        { id: 6, url: "icons/icon6.png", text: "镇街入口" },
        { id: 7, url: "icons/icon7.png", text: "招聘会" },
        { id: 8, url: "icons/icon8.png", text: "技能培训" },
      ],
    };
  },
  methods: {
    handleClick() {
      // this.$route.push()
    }
  }
};
</script>

<style scoped>
.icons {
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  padding: 0.8rem 0;
}

.item {
  flex: 1 0 25%;
}

.icon {
  padding: 0.6rem 0.8rem;
}

.icon > img {
  display: block;
  width: 100%;
}

.text {
  padding-bottom: 0.4rem;
  text-align: center;
  font-size: 0.8rem;
}
</style>