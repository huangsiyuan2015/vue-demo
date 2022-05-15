<template>
  <div class="profile">
    <div class="user">
      <div class="photo"><img :src="photo" alt="photo" /></div>
      <div class="info">
        <div class="name">周娜</div>
        <div class="resume">
          我的个人简历
          <span class="iconfont">&#xe60f;</span>
        </div>
      </div>
    </div>

    <div class="amount">
      <div class="item">
        <div class="num">13</div>
        <div class="text">已投简历</div>
      </div>

      <div class="item">
        <div class="num">7</div>
        <div class="text">面试邀请</div>
      </div>

      <div class="item">
        <div class="num">54</div>
        <div class="text">收藏职位</div>
      </div>
    </div>

    <div class="score">
      <div class="wrap">
        <div class="top">我的积分</div>
        <div class="bottom">
          <span class="value">1047</span>
          &nbsp;分
          <span class="iconfont">&#xe8ba;</span>
        </div>
      </div>
    </div>

    <div class="group">
      <div class="item">
        <span class="iconfont left">&#xe627;</span>
        <span>意见反馈</span>
        <span class="iconfont right">&#xe88e;</span>
      </div>

      <div class="item">
        <span class="iconfont left">&#xe8b7;</span>
        <span>系统设置</span>
        <span class="iconfont right">&#xe88e;</span>
      </div>

      <div class="item">
        <span class="iconfont left">&#xe6da;</span>
        <span>切换身份</span>
        <span class="iconfont right">&#xe88e;</span>
      </div>

      <div class="item">
        <span class="iconfont left">&#xec2e;</span>
        <span>联系客服</span>
        <span class="iconfont right">&#xe88e;</span>
      </div>
    </div>
  </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";

export default {
  name: "Profile",
  data() {
    return {
      photo: "avatars/photo.png",
    };
  },
};
</script>

<style scoped>
.user {
  display: flex;
}

.info {
  flex: 1;
  padding-left: 0.6rem;
  padding-top: 1.6rem;
}

.name {
  margin-bottom: 0.8rem;
  font-size: 1.6rem;
  font-weight: bold;
}

.resume {
  color: #8c8c8c;
}

.info .iconfont {
  font-size: 1rem;
}

.amount {
  display: flex;
  text-align: center;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.amount .item {
  flex: 1;
  padding: 1.2rem 0;
}

.num {
  padding: 0.4rem 0;
  font-size: 1.6rem;
  font-weight: bolder;
}

.text {
  font-size: 0.96rem;
  color: #a1a1a1;
}

.score {
  padding: 0.4rem;
}

.score .wrap {
  padding: 1rem 1.2rem;
  border-radius: 0.8rem;
  background: linear-gradient(to right, #5da0fc, #4268ff);
  font-size: 0.96rem;
  color: #fff;
}

.score .wrap .top {
  height: 2.4rem;
  line-height: 2.4rem;
}

.score .wrap .value {
  height: 2.4rem;
  line-height: 2.4rem;
  font-size: 1.6rem;
  font-weight: bolder;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
}

.score .wrap .bottom {
  display: flex;
  align-items: center;
}

.score .wrap .iconfont {
  margin-left: auto;
  font-size: 1.2rem;
}

.group {
  padding: 1.2rem 0;
}

.group .item {
  display: flex;
  align-items: center;
  padding: 0.84rem 0.6rem;
}

.group .item .left {
  font-size: 1.6rem;
  margin-right: 0.6rem;
}

.group .item .right {
  margin-left: auto;
  font-size: 1.2rem;
  font-weight: bolder;
}
</style>
