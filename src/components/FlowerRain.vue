<template>
  <div>
    <FlowerLeaf v-for="n in 12" :key="`leaf-${n}`" />
  </div>
</template>

<script>
import FlowerLeaf from "./FlowerLeaf.vue";

export default {
  name: "FlowerRain",
  components: {
    FlowerLeaf,
  },
};
</script>

<style lang="scss" scoped></style>
