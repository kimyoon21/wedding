<template>
  <div class="intro-movie">
    <div class="image">
      <img src="../assets/images/intro-image.jpg" />
    </div>
    <div class="movie">
      <iframe src="https://www.youtube.com/embed/dREZ_hdZSsQ" />
    </div>
  </div>
</template>

<script>
export default {
  name: "IntroMovie",
};
</script>

<style lang="scss" scoped>
.intro-movie {
  display: flex;
  flex-direction: column;
  height: 100vh;
  max-height: 780px;
  .image {
    display: flex;
    flex: 1;
    padding-left: $padding-vertical;
    padding-right: $padding-vertical;
    justify-content: center;
    align-items: center;
    img {
      width: 100%;
    }
  }
  .movie {
    //todo: 실제론 iframe 아니라 video 태그 넣을거임. 임시로 유튜브 넣어둠
    iframe {
      width: 100vw;
      height: 100vw;
    }
  }
}
</style>
