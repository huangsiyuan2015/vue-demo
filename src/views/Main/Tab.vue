<template>
  <div class="tab">
    <div
      class="item"
      :class="{ active: current === 'home' }"
      @click="handleClick('home')"
    >
      <div class="icon iconfont">&#xe8ff;</div>
      <div class="text">首页</div>
    </div>

    <div
      class="item"
      :class="{ active: current === 'job' }"
      @click="handleClick('job')"
    >
      <div class="icon iconfont">&#xe60e;</div>
      <div class="text">职位</div>
    </div>

    <div class="item publish" @click="handleClick('publish')">
      <div class="icon iconfont">&#xe604;</div>
      <div class="text">发布</div>
    </div>

    <div
      class="item"
      :class="{ active: current === 'message' }"
      @click="handleClick('message')"
    >
      <div class="icon iconfont">&#xe601;</div>
      <div class="text">消息</div>
    </div>

    <div
      class="item"
      :class="{ active: current === 'profile' }"
      @click="handleClick('profile')"
    >
      <div class="icon iconfont">&#xe600;</div>
      <div class="text">我的</div>
    </div>
  </div>
</template>

<script>
import "../../assets/iconfont/iconfont.css";

export default {
  name: "Tab",
  data() {
    return {
      current: "home",
    };
  },
  methods: {
    handleClick(path) {
      this.$router.push(path);
      this.current = path;
    },
  },
};
</script>

<style scoped>
.tab {
  display: flex;
  position: fixed;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: #fff;
}

.tab > .item {
  flex: 1 0 auto;
  padding: 0.8rem 0;
  text-align: center;
  font-size: 0.2rem;
}

.publish,
.active {
  color: #418dff;
}
</style>