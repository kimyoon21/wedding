<template>
  <div class="gallery">
    <img src="../assets/images/bunny.jpg" class="bunny" />
    <div class="description">
      photo gallery
    </div>
  </div>
</template>

<script>
export default {
  name: "Gallery",
};
</script>

<style lang="scss" scoped>
.gallery {
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;
  .bunny {
    width: 65px;
    margin-bottom: 20px;
  }
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
}
</style>
