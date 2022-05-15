<template>
  <div class="main">
    <Banner>{{ title }}</Banner>
    <router-view />
    <Tab />
  </div>
</template>

<script>
import Banner from "./Banner.vue";
import Tab from "./Tab.vue";

export default {
  name: "Main",
  components: {
    Banner,
    Tab,
  },
  computed: {
    title() {
      let current = this.$route.path.slice(1);
      const titles = {
        home: "今招聘",
        job: "职位",
        publish: "发布",
        message: "消息",
        profile: "我的",
      };
      return titles[current] || "今招聘";
    },
  },
};
</script>

<style scoped>
.main {
  padding: 4rem 0.8rem;
  /* padding-top: 4rem; */

}
</style>