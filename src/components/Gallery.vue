<template>
  <div class="gallery">
    <img src="../assets/images/bunny.png" class="bunny" />
    <div class="description">
      photo gallery
    </div>
    <div></div>
    <div class="gallery-container" ref="gal">
      <div class="gallery-inner">
        <div class="gallery-item" v-for="n in 13" :key="n">
          <div class="image">
            <img
              :src="`/gallery/${n - 1}@2x.png`"
              :style="{
                transform: `translateX(${(((scrollX - (n - 1) * 250) / 4.8 +
                  50 >
                100
                  ? 100
                  : (scrollX - (n - 1) * 250) / 4.8 + 50 < 0
                  ? 0
                  : (scrollX - (n - 1) * 250) / 4.8 + 50) /
                  100) *
                  -55}px)`,
              }"
            />
          </div>
          <div class="arch"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Gallery',
  data() {
    return {
      scrollX: 0,
      width: 320,
    };
  },
  mounted() {
    this.$refs.gal.addEventListener('scroll', (event) => {
      this.scrollX = event.target.scrollLeft;
    });
    this.width = Math.max(
      document.documentElement.clientWidth || 0,
      window.innerWidth || 0
    );
    this.$refs.gal.scrollLeft = 750;
  },
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
  overflow: hidden;
  .bunny {
    width: 65px;
    margin-bottom: 20px;
  }
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
  .gallery-container {
    padding-left: 50%;
    padding-right: 50%;
    margin-left: -120px;
    margin-right: -22px;
    overflow-x: auto;
    .gallery-inner {
      display: flex;
      width: 3370px;
      .gallery-item {
        flex: 0 0 240px;
        position: relative;
        width: 240px;
        height: 360px;
        margin-right: 10px;
        &:before {
          position: absolute;
          top: 0;
          left: -1px;
          display: block;
          content: '';
          width: 2px;
          height: 360px;
          background-color: #fffdf9;
          z-index: 11;
        }
        &:after {
          position: absolute;
          top: 0;
          right: -1px;
          display: block;
          content: '';
          width: 2px;
          height: 360px;
          background-color: #fffdf9;
          z-index: 11;
        }
        .arch {
          position: absolute;
          top: 0;
          left: 0;
          width: 240px;
          height: 360px;
          background-image: url('../assets/images/arch.png');
          background-repeat: no-repeat;
          background-size: 240px auto;
          background-position: top left;
          z-index: 10;
        }
        .image {
          position: absolute;
          top: 0;
          left: 0;
          width: 240px;
          height: 360px;
          overflow: hidden;
          img {
            transition: transform 100ms;
            width: 296px;
            height: 360px;
          }
        }
      }
    }
  }
}
</style>
