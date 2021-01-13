<template>
  <div class="credit">
    <h3 class="h2">
      이
      <a
        href="https://github.com/kimyoon21/wedding"
        target="_blank"
        class="link"
        >페이지</a
      >를 만든 사람들
    </h3>
    <div class="profile-list">
      <div class="profile">
        <a target="_blank" href="https://www.instagram.com/eachee_916/">
          <div class="thumbnail susan"></div>
          <div class="name">Susan</div>
          <div class="role">애니메이션</div>
        </a>
      </div>
      <div class="profile">
        <a target="_blank" href="https://blog.gangnamunni.com/blog/design">
          <div class="thumbnail anna"></div>
          <div class="name">Anna</div>
          <div class="role">브랜딩</div>
        </a>
      </div>
      <div class="profile">
        <a target="_blank" href="http://brunch.co.kr/@hee072794">
          <div class="thumbnail wonny"></div>
          <div class="name">Wonny</div>
          <div class="role">개발</div>
        </a>
      </div>
      <div class="profile">
        <a target="_blank" href="https://blog.gangnamunni.com/blog/web">
          <div class="thumbnail chichi"></div>
          <div class="name">Chichi</div>
          <div class="role">개발</div>
        </a>
      </div>
      <div class="profile">
        <a
          target="_blank"
          href="https://blog.gangnamunni.com/post/product-design-and-product-owner"
        >
          <div class="thumbnail jane"></div>
          <div class="name">Jane</div>
          <div class="role">디자인&아내</div>
        </a>
      </div>
      <div class="profile">
        <a target="_blank" href="https://brunch.co.kr/@kimyoon21/30">
          <div class="thumbnail brown"></div>
          <div class="name">Brown</div>
          <div class="role">PO&남편</div>
        </a>
      </div>
    </div>
    <p class="description">하나를 해도 멋지게 하는 이 사람들이 궁금한가요?</p>
    <a href="https://blog.gangnamunni.com/" target="_blank" class="recruit">
      힐링페이퍼의 동료가 되기
    </a>
  </div>
</template>

<script>
export default {
  name: "Credit",
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
    color: #295238;
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
      a {
        color: inherit;
        text-decoration: none;
      }
      .thumbnail {
        width: 48px;
        height: 48px;
        border-radius: 50%;
        background-color: black;
        margin-bottom: 6px;
        background-position: center;
        background-repeat: no-repeat;
        background-size: cover;
        &.susan {
          background-image: url(/wedding/img/credit/susan.jpg);
        }
        &.wonny {
          background-image: url(/wedding/img/credit/wonny.jpg);
        }
        &.jane {
          background-image: url(/wedding/img/credit/jane.jpg);
        }
        &.anna {
          background-image: url(/wedding/img/credit/anna.jpg);
        }
        &.chichi {
          background-image: url(/wedding/img/credit/chichi.jpg);
        }
        &.brown {
          background-image: url(/wedding/img/credit/brown.jpg);
        }
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
    color: #295238;
  }
  .recruit {
    display: block;
    width: 184px;
    height: 44px;
    line-height: 44px;
    background-color: #ffb22c;
    color: #202121;
    text-decoration: none;
    font-size: 16px;
    margin: 0 auto;
  }
  .link {
    display: inline-block;
    margin-top: 24px;
    color: #295238;
  }
}
</style>
