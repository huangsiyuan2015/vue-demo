<template>
  <div class="content">
    <SelectGroup />
    <InfoList />
  </div>
</template>

<script>
import SelectGroup from "./SelectGroup";
import InfoList from "./InfoList";

export default {
  name: "Content",
  components: {
    SelectGroup,
    InfoList,
  },
};
</script>

<style scoped>
</style>