<template>
  <div class="message">
    <div class="item" v-for="item in msgList" :key="item.id">
      <div class="avatar"><img :src="item.avatar" alt="" /></div>

      <div class="text">
        <div class="user">
          <span class="nickname">{{ item.nickname }}</span>
          <span class="company">{{ item.company }}</span>
        </div>
        <div class="content">
          {{ item.content }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Message",
  data() {
    return {
      msgList: [],
    };
  },
  mounted() {
    const msgList = [
      {
        id: 1,
        avatar: "avatars/avatar1.png",
        nickname: "融科汇海·人事",
        company: "湖北融科汇海科技有限公司",
        content: "我们正在寻找并肩奋斗的伙伴，如感兴趣，能否可以...",
      },
      {
        id: 2,
        avatar: "avatars/avatar2.png",
        nickname: "飞猫环球·管理",
        company: "武汉飞猫环球商贸有限公司",
        content: "我们正在寻找并肩奋斗的伙伴，如感兴趣，能否可以...",
      },
      {
        id: 3,
        avatar: "avatars/avatar3.png",
        nickname: "融科汇海·人事",
        company: "武汉骏网互联科技有限公司",
        content: "我们正在寻找并肩奋斗的伙伴，如感兴趣，能否可以...",
      },
    ];

    this.msgList = msgList;
  },
};
</script>

<style scoped>
.item {
  display: flex;
  height: 4.2rem;
  padding: 0.4rem;
}

.avatar {
  flex: 1 0 16%;
  display: flex;
  align-items: center;
}

.avatar img {
  display: block;
  width: 100%;
}

.text {
  flex: 0 1 80%;
  display: flex;
  flex-direction: column;
  padding: 0.6rem 0.8rem;
  overflow: hidden;
}

.user {
  flex: 1 0 auto;
}

.nickname {
  font-weight: bold;
}

.company {
  margin-left: 0.6rem;
  font-size: 0.2rem;
  color: #b4b5b5;
}

.content {
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-size: 0.86rem;
  color: #3f3f3f;
}
</style>