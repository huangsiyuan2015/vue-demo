<template>
  <div class="banner">
    <slot></slot>
  </div>
</template>

<script>
export default {
  name: "Banner",
};
</script>

<style scoped>
.banner {
  height: 4rem;
  line-height: 4rem;
  font-size: 1.4rem;
  font-weight: bolder;
  text-align: center;
}
</style>