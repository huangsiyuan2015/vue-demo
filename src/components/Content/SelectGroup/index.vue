<template>
  <div class="select-group">
    <select name="" id="">
      <option value="">类别</option>
      <option value="">类别2</option>
      <option value="">类别3</option>
    </select>
    <select name="" id="">
      <option value="">包吃</option>
      <option value="">包吃2</option>
      <option value="">包吃3</option>
    </select>
    <select name="" id="">
      <option value="">五险一金</option>
      <option value="">五险一金2</option>
      <option value="">五险一金3</option>
    </select>
  </div>
</template>

<script>
export default {
  name: "SelectGroup",
};
</script>

<style scoped>
.select-group {
  display: flex;
  justify-content: space-around;
  padding: 1rem 0;
  text-align: center;
}

select {
  border: none;
  outline: medium;
}
</style>