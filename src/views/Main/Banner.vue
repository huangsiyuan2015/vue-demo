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
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  background: #fff;
  height: 4rem;
  line-height: 4rem;
  font-size: 1.4rem;
  font-weight: bolder;
  text-align: center;
}
</style>