<template>
  <div class="carousel">
    <ul>
      <li v-for="item in urls" :key="item.id" @click="handleClick">
        <img :src="item.url" :alt="item.url" />
      </li>
    </ul>
    <div class="dots">
      <span
        class="dot"
        :class="{ current: len === current }"
        v-for="len in urls.length"
        :key="len"
      ></span>
    </div>
  </div>
</template>

<script>
export default {
  name: "Carousel",
  data() {
    return {
      current: 1,
      urls: [
        { id: 0, url: "carousel/slider.png" },
        { id: 1, url: "carousel/slider1.png" },
        { id: 2, url: "carousel/slider2.png" },
        { id: 3, url: "carousel/slider3.png" },
        { id: 4, url: "carousel/slider4.png" },
        { id: 5, url: "carousel/slider5.png" },
      ],
    };
  },
  methods: {
    handleClick() {},
  },
};
</script>

<style scoped>
ul {
  display: flex;
  overflow: hidden;
}

li {
  flex: 0 0 100%;
  list-style: none;
}

li > img {
  display: block;
  width: 100%;
}

.dots {
  display: table-cell;
  width: 100vw;
  height: 0.4rem;
  line-height: 0.4rem;
  text-align: center;
  vertical-align: middle;
}

.dot {
  display: inline-block;
  width: 0.8rem;
  height: 0.2rem;
  margin-right: 0.2rem;
  background-color: #dcdcdc;
}

.current {
  background-color: #418dff;
}
</style>

