<template>
  <div class="index">
    <Search />
    <Carousel />
    <Icons />
    <Content />
  </div>
</template>

<script>
import Search from "@/components/Search";
import Carousel from "./Carousel";
import Icons from "./Icons";
import Content from "@/components/Content";

export default {
  name: "Index",
  components: {
    Search,
    Carousel,
    Icons,
    Content,
  },
};
</script>