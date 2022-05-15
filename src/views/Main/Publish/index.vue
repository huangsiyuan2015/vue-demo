<template>
  <div class="publish">
    <div class="item">
      <div class="bg bg-hunt"></div>
      <div class="btn">我要求职</div>
    </div>

    <div class="text">或者</div>

    <div class="item">
      <div class="bg bg-hire"></div>
      <div class="btn">我要招人</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Publish",
};
</script>

<style scoped>
.item {
  text-align: center;
}

.bg-hunt {
  background-image: url("../../../assets/bgs/hunt.png");
}

.bg-hire {
  background-image: url("../../../assets/bgs/hire.png");
}

.bg {
  height: 12rem;
  background-repeat: no-repeat;
  background-position: center;
}

.btn {
  width: 14rem;
  height: 3.2rem;
  margin: 0 auto;
  margin-top: 1.6rem;
  border-radius: 0.4rem;
  line-height: 3.2rem;
  background-color: #418dff;
  font-size: 1.2rem;
  color: #fff;
}

.text {
  height: 3.2rem;
  padding-top: 3.6rem;
  line-height: 3.2rem;
  text-align: center;
  color: #a2a2a2;
}
</style>