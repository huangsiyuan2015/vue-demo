<template>
  <div class="job">
    <Search />
    <Content />
  </div>
</template>

<script>
import Search from "@/components/Search";
import Content from "@/components/Content";

export default {
  name: "Job",
  components: {
    Search,
    Content,
  },
};
</script>