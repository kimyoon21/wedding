<template>
  <div class="celebrate">
    <div class="description">
      how to celebrate
    </div>
    <h2 class="h2">
      두 사람에게 축하의 마음 전하는 방법
    </h2>
    <p>
      직접 만나지는 못해도<br />
      축하해주고 싶은 마음은 가득한 당신으로부터<br />
      축의금보다는 다른 형태의 마음을 받으면<br />
      더 의미있을거라는 생각에<br />
      2가지 방법을 준비해보았어요.
    </p>
    <img src="../assets/images/goose.jpg" class="goose" />
    <h2 class="h2">
      첫째. 쓸 때마다 당신을 떠올릴 선물하기
    </h2>
    <p class="black">
      저희가 신혼집을 꾸리고 살면서<br />
      꼭 필요한 물건들을 적어보았어요.<br />
      쓸 때마다 선물한 분들을 떠올리며<br />
      감사하는 마음을 오래도록 간직하고자 합니다.<br />
      아래 리스트에서 선물하고 싶은 물건을<br />
      선택하신 뒤 구매를 확정하시고<br />
      혼자 혹은 여러명의 이름을 적어주시면 됩니다.
    </p>

    <div class="gift-list">
      <div class="gift" v-for="n in 10" :key="n">
        <div class="thumbnail"></div>
        <div class="contents">
          <div class="title">
            내 입술 따뜻한 커피처럼
          </div>
          <div class="action">선물하기</div>
        </div>
      </div>
    </div>

    <img src="../assets/images/cat.jpg" class="cat" />
    <p class="black">
      휴지, 물티슈, 디퓨저 등은 이미 너무 많아서<br />
      당근마켓에 팔아야 하나 고민인 수준이라 정중하게 사양할게요.<br />
      이 외에도 저희 부부를 생각하며<br />
      보내주시는 선물은 뭐든지 감사히 받겠습니다.
    </p>
  </div>
</template>

<script>
export default {
  name: "Celebrate",
};
</script>

<style lang="scss" scoped>
.celebrate {
  padding-top: 32px;
  padding-bottom: 50px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #295138;
  .description {
    font-size: 12px;
    letter-spacing: 6px;
    margin-bottom: 30px;
  }
  .h2 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 24px;
  }
  p {
    line-height: 24px;
    &.black {
      color: #202121;
    }
  }
  .goose {
    width: 90px;
    margin-top: 67px;
    margin-bottom: 20px;
  }
  .cat {
    width: 85px;
    margin-top: 32px;
    margin-bottom: 16px;
  }

  .gift-list {
    width: 298px;
    margin: 32px auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .gift {
      width: 142px;
      height: 226px;
      box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.16);
      margin-bottom: 16px;
      .thumbnail {
        width: 142px;
        height: 142px;
        background-color: #333333;
      }
      .contents {
        padding: 8px;
        text-align: left;
        color: #202121;
        .title {
          font-size: 14px;
          word-break: keep-all;
          font-weight: bold;
          font-family: AppleSDGothicNeo, sans-serif;
        }
        .action {
          font-size: 10px;
          font-family: AppleSDGothicNeo, sans-serif;
        }
      }
    }
  }
}
</style>
