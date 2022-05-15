<template>
  <div class="info-list">
    <div class="info-item" v-for="item in list" :key="item.id">
      <div class="line-one">
        <div class="title">{{ item.title }}</div>
        <div class="salary">{{ item.salary }}</div>
      </div>

      <div class="line-two">
        <div class="tips">
          <span v-for="(tip, index) in item.tips" :key="index">{{ tip }}</span>
        </div>
        <div class="top">
          <span>
            置顶剩
            <span class="day">{{ item.top }}</span>
            天
          </span>
        </div>
      </div>

      <div class="line-three">{{ item.company }}</div>

      <div class="line-four">
        <div class="user">
          <div class="avatar"><img :src="item.avatar" alt="item.avatar" /></div>
          <div class="nickname">{{ item.nickname }}</div>
        </div>
        <div class="date">{{ item.date }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "InfoList",
  data() {
    return {
      list: [],
    };
  },
  mounted() {
    const infoList = [
      {
        id: 0,
        title: "web前端工程师",
        salary: "9-11k",
        tips: ["武汉 洪山区 光谷", "3-5年", "大专"],
        top: 3,
        company: "武汉恒通科技有限公司",
        avatar: "avatars/avatar1.png",
        nickname: "恒通科技·人事",
        date: "09月07日",
      },
      {
        id: 1,
        title: "行政主管",
        salary: "7-9k",
        tips: ["武汉 江汉区 SOHO", "3-4年", "大专"],
        top: 2,
        company: "武汉飞猫环球商贸有限公司",
        avatar: "avatars/avatar2.png",
        nickname: "飞猫环球·管理",
        date: "09月05日",
      },
      {
        id: 2,
        title: "UI设计师",
        salary: "8-10k",
        tips: ["武汉 江汉区 SOHO", "3-4年", "大专"],
        top: 1,
        company: "武汉骏网互联科技股份有限公司",
        avatar: "avatars/avatar3.png",
        nickname: "骏网互联·人事",
        date: "09月01日",
      },
      {
        id: 3,
        title: "web前端工程师",
        salary: "9-11k",
        tips: ["武汉 洪山区 光谷", "3-5年", "大专"],
        top: 3,
        company: "武汉恒通科技有限公司",
        avatar: "avatars/avatar1.png",
        nickname: "恒通科技·人事",
        date: "09月07日",
      },
      {
        id: 4,
        title: "行政主管",
        salary: "7-9k",
        tips: ["武汉 江汉区 SOHO", "3-4年", "大专"],
        top: 2,
        company: "武汉飞猫环球商贸有限公司",
        avatar: "avatars/avatar2.png",
        nickname: "飞猫环球·管理",
        date: "09月05日",
      },
      {
        id: 5,
        title: "UI设计师",
        salary: "8-10k",
        tips: ["武汉 江汉区 SOHO", "3-4年", "大专"],
        top: 1,
        company: "武汉骏网互联科技股份有限公司",
        avatar: "avatars/avatar3.png",
        nickname: "骏网互联·人事",
        date: "09月01日",
      },
      {
        id: 6,
        title: "web前端工程师",
        salary: "9-11k",
        tips: ["武汉 洪山区 光谷", "3-5年", "大专"],
        top: 3,
        company: "武汉恒通科技有限公司",
        avatar: "avatars/avatar1.png",
        nickname: "恒通科技·人事",
        date: "09月07日",
      },
      {
        id: 7,
        title: "行政主管",
        salary: "7-9k",
        tips: ["武汉 江汉区 SOHO", "3-4年", "大专"],
        top: 2,
        company: "武汉飞猫环球商贸有限公司",
        avatar: "avatars/avatar2.png",
        nickname: "飞猫环球·管理",
        date: "09月05日",
      },
      {
        id: 8,
        title: "UI设计师",
        salary: "8-10k",
        tips: ["武汉 江汉区 SOHO", "3-4年", "大专"],
        top: 1,
        company: "武汉骏网互联科技股份有限公司",
        avatar: "avatars/avatar3.png",
        nickname: "骏网互联·人事",
        date: "09月01日",
      },
    ];

    this.list = infoList;
  },
};
</script>

<style scoped>
.info-list {
  /* padding-bottom: 4rem; */
  background-color: #fbfbfe;
}

.info-item {
  padding: 1.2rem;
  margin-bottom: 0.6rem;
  background-color: #fff;
}

.line-one {
  display: flex;
  height: 2.8rem;
  line-height: 2.8rem;
  font-weight: bolder;
  font-size: 1.2rem;
}

.line-one > .salary {
  margin-left: auto;
  font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS", sans-serif;
  color: #418dff;
}

.line-two {
  display: flex;
  height: 1.6rem;
  text-align: center;
  font-size: 0.2rem;
}

.line-two > .tips span {
  display: inline-block;
  padding: 0.2rem 0.4rem;
  margin-right: 0.2rem;
  background-color: #f0f4f8;
  color: #b4b5b5;
}

.line-two > .top {
  margin-left: auto;
  line-height: 1.6rem;
}

.line-two .day {
  font-weight: bolder;
  font-size: 0.86rem;
  color: #ffb34d;
}

.line-three {
  padding: 0.6rem 0;
}

.line-four {
  display: flex;
  height: 2.8rem;
  line-height: 2.8rem;
  color: #a7a7a7;
}

.line-four .user {
  display: flex;
  align-items: center;
}

.line-four .user img {
  display: block;
  width: 100%;
}

.line-four .user .nickname {
  padding-left: 0.4rem;
}

.line-four .date {
  margin-left: auto;
}
</style>