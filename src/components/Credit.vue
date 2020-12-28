<template>
  <div class="credit">
    <h3 class="h2">
      이 페이지를 만든 사람들
    </h3>
    <div class="profile-list">
      <div class="profile">
        <div class="thumbnail"></div>
        <div class="name">Susan</div>
        <div class="role">애니메이션</div>
      </div>
      <div class="profile">
        <div class="thumbnail"></div>
        <div class="name">Anna</div>
        <div class="role">브랜딩</div>
      </div>
      <div class="profile">
        <div class="thumbnail"></div>
        <div class="name">Wonny</div>
        <div class="role">개발</div>
      </div>
      <div class="profile">
        <div class="thumbnail"></div>
        <div class="name">Chichi</div>
        <div class="role">개발</div>
      </div>
      <div class="profile">
        <div class="thumbnail"></div>
        <div class="name">Jane</div>
        <div class="role">디자인</div>
      </div>
      <div class="profile">
        <div class="thumbnail"></div>
        <div class="name">Brown</div>
        <div class="role">PO</div>
      </div>
    </div>
    <p class="description">
      하나를 해도 제대로 하는 이 사람들이 궁금한가요?
    </p>
    <a
      href="https://blog.gangnamunni.com/recruit"
      target="_blank"
      class="recruit"
    >
      동료가 되기
    </a>
  </div>
</template>

<script>
export default {
  name: "Divider",
  methods: {
    credit() {
      window.open(
        "https://www.kfhi.or.kr/apps/campaign/2020_stophunger_domestic_2.asp?id=540&mcode=658&utm_medium=display_ad&utm_source=youtube&utm_campaign=2020_stophunger_domestic_2&gclid=Cj0KCQiA5bz-BRD-ARIsABjT4nieWe1teUo7KT5HSTinY-IG9KFVj7BRfzI7I_YYAqapQ4jQFsqEqYIaAvqqEALw_wcB"
      );
    },
  },
};
</script>

<style lang="scss" scoped>
.credit {
  padding-top: 64px;
  padding-bottom: 80px;
  padding-left: $padding-vertical;
  padding-right: $padding-vertical;
  text-align: center;
  color: #202121;
  .h2 {
    font-size: 16px;
    font-weight: normal;
    margin-bottom: 38px;
  }
  .profile-list {
    display: flex;
    justify-content: center;
    width: 264px;
    margin: 0 auto;
    flex-wrap: wrap;
    margin-bottom: 14px;
    .profile {
      padding: 0 20px 24px 20px;
      .thumbnail {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: black;
        margin-bottom: 6px;
      }
      .name {
        font-size: 14px;
        margin-bottom: 3px;
      }
      .role {
        font-size: 10px;
        line-height: 1.6;
      }
    }
  }
  .description {
    font-size: 12px;
    margin-bottom: 16px;
  }
  .recruit {
    display: block;
    width: 154px;
    height: 44px;
    line-height: 44px;
    background-color: #ffb22c;
    color: #202121;
    text-decoration: none;
    font-size: 16px;
    margin: 0 auto;
  }
}
</style>
