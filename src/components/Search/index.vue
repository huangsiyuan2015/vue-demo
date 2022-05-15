<template>
  <div class="search">
    <select name="" id="">
      <option v-for="option in options" :key="option.id">
        {{ option.city }}
      </option>
    </select>
    <span class="line"></span>
    <input
      type="text"
      placeholder="&#xe8b9;&nbsp;搜素你想要的职位"
      class="iconfont"
    />
  </div>
</template>

<script>
import "@/assets/iconfont/iconfont.css";

export default {
  name: "Search",
  data() {
    return {
      options: [
        { id: 1, city: "武汉" },
        { id: 2, city: "北京" },
        { id: 3, city: "上海" },
        { id: 4, city: "广州" },
        { id: 5, city: "深圳" },
      ],
    };
  },
};
</script>

<style scoped>
.search {
  display: flex;
  padding: 0.4rem 0 1.2rem 0;
  text-align: center;
}

select {
  height: 2.4rem;
  line-height: 2.4rem;
  padding: 0.2rem 0.8rem 0.2rem 1.4rem;
  border: none;
  border-radius: 2em 0 0 2em;
  outline: medium;
  background-color: #f2f3f6;
  font-size: 1rem;
  color: #418dff;
}

select > option {
  color: black;
}

.line {
  display: block;
  width: 1px;
  height: 2.4rem;
  padding-left: 0.8rem;
  background-color: #f2f3f6;
  border-right: solid 2px #cecece;
}

input {
  flex: 1 0 auto;
  height: 2.4rem;
  padding-left: 2rem;
  line-height: 2.4rem;
  border: none;
  border-radius: 0 2em 2em 0;
  outline: medium;
  background-color: #f2f3f6;
  font-size: 1rem;
}
</style>