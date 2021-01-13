<template>
  <div class="live">
    <p class = "desc">
      위 애니메이션은 꼭 소리를 켜고 봐주세요!
    </p>
    <img src="~@/assets/images/hands.png" class="hands" />
    <div>
      <p class = "header">
        "우리 손 잡을까요?"<br />
      </p>
      <p>
        각자의 삶을 열심히 살아온 저희가,<br />
        이제는 손을 잡고 함께 나란히 걸어가려 합니다.<br />
        사랑한다는 말이 어울리는 사람과 함께<br />
        오래도록 있는 힘을 다해 행복해지겠습니다.<br />
        조용하지만 기쁨이 가득한 결혼 소식을<br />
        이렇게 알려드립니다.
      </p>
      <p class = "header">
        22년 1월 21일 금요일<br />
        오전 11시 30분<br />
      </p>
      <p>
        작은 가족식이기에 여러분의 얼굴을 보고 <br />
        직접 감사와 축하를 나누지는 못하지만,<br />
        대신 전세계가 참여할 수 있는<br />
        Youtube Live방송으로 함께 하려고 합니다.<br />
        여러분이 저희와 함께 있다고 느낄 수 있도록<br />
        온라인으로 참석해서 채팅으로 축하해주세요.
      </p>

    </div>
    <Button @click="attendance">영혼 참석하기</Button>
  </div>
</template>

<script>
export default {
  name: "Divider",
  methods: {
    attendance() {
      window.open("https://youtu.be/yU9UULnBt0w");
    },
  },
};
</script>

<style lang="scss" scoped>
.live {
  padding-top: 4px;
  padding-bottom: 68px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  .hands {
    width: 75px;
    margin-bottom: 16px;
  }
  p {
    margin-bottom: 16px;
    line-height: 24px;
    &.desc {
      color: #295238;
      font-size: 10px;
      opacity: 0.6;
      margin-bottom: 36px;
    }
    &.header {
      color: #295238;
    }
    &:last-child {
      margin-bottom: 40px;
    }
  }
}
</style>
