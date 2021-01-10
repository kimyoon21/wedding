<template>
  <div>
    <transition name="fade" appear>
      <div class="overlay" v-show="isOpen" @click="handleClose" />
    </transition>

    <transition name="slide" appear>
      <div class="bottom-sheet-container" v-show="isOpen">
        <div class="bottom-sheet">
          <div class="bottom-sheet-header">
            <img class="image" :src="present.imageUrl" alt="" />
            <img
              class="icon-close"
              @click="handleClose"
              src="../assets/images/close.svg"
            />
          </div>

          <div class="form-container">
            <div class="form-header">
              <div class="title">
                {{ present.name }}
              </div>
              <div class="price-container">
                <div class="price">
                  {{
                    present.price &&
                    present.price
                      .toString()
                      .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
                  }}원
                </div>
              </div>
            </div>

            <div class="form-body">
              <input
                class="input name"
                type="text"
                placeholder="고마운 당신의 이름은?"
                v-model="senderName"
              />
              <textarea
                v-model="message"
                class="input message"
                type="textarea"
                placeholder="전하고 싶은 메시지를 남겨주세요."
              />
              <div class="description">
                선물하기를 누르면 신혼집 주소가 복사됩니다.
              </div>
            </div>
          </div>

          <input type="hidden" value="주소주소주소" id="address" />

          <button :class="['button', { active: isValid }]" @click="handleClick">
            선물하기
          </button>
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import firebase from "firebase";

export default {
  name: "BottomSheet",
  data() {
    return {
      senderName: null,
      message: null,
    };
  },
  props: {
    isOpen: {
      type: Boolean,
      default: false,
    },
    present: {
      type: Object,
      default: () => {},
    },
  },
  computed: {
    isValid() {
      return !!this.senderName && !!this.message;
    },
  },
  methods: {
    handleClose() {
      this.$emit("close");
    },
    handleClick() {
      if (!this.isValid) {
        alert("이름과 메시지를 입력해주세요.");
        return;
      }

      this.updatePresent();
    },
    copyAddress() {
      // TODO: 주소 필요
      const input = document.querySelector("#address");
      input.setAttribute("type", "text");
      input.select();
      document.execCommand("copy");
      input.setAttribute("type", "hidden");
      window.getSelection().removeAllRanges();
    },
    updatePresent() {
      const isConfirmed = confirm(
        `${this.present.name} 선물을 하시겠어요? 확인해주시면 선물 완료로 표시됩니다.`
      );

      if (!isConfirmed) {
        return;
      }

      firebase
        .database()
        .ref("presents/" + this.present.id)
        .set(
          {
            ...this.present,
            isSoldout: true,
            senderName: this.senderName,
            message: this.message,
          },
          (error) => {
            if (error) {
              console.error(error.message);
              return;
            }

            this.copyAddress();
            this.handleClose();
            this.senderName = null;
            this.message = null;

            alert("신혼집 주소가 복사되었습니다. 선물 감사합니다.");
          }
        );
    },
  },
};
</script>

<style lang="scss" scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s;
}
.fade-enter,
.fade-leave-to {
  opacity: 0;
}

.slide-enter-active {
  transition: all 0.4s ease-in;
}
.slide-leave-active {
  transition: all 0.4s ease-in;
}
.slide-enter,
.slide-leave-to {
  transform: translateY(100%);
}

.overlay {
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  background-color: rgba(0, 0, 0, 0.6);
  position: fixed;
  z-index: 999;
}

.bottom-sheet-container {
  right: 0;
  left: 0;
  bottom: 0;
  top: 0;
  position: fixed;
  z-index: 999;
  margin-top: 90px;

  .bottom-sheet {
    width: 100%;
    height: 100%;
    border-top-left-radius: 10px;
    border-top-right-radius: 10px;
    background: white;
    z-index: 9999;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    .bottom-sheet-header {
      position: relative;
      width: 100%;
      height: 360px;
      min-height: 360px;
      border-top-left-radius: 10px;
      border-top-right-radius: 10px;

      .image {
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      .icon-close {
        position: absolute;
        right: 0;
        top: 0;
        padding: 16px;
      }
    }

    .form-container {
      display: flex;
      flex-direction: column;
      flex: 1;
      padding: 16px 16px 8px 16px;

      .form-header {
        display: flex;
        font-size: 18px;
        line-height: 30px;
        height: 60px;

        .title {
          color: #202121;
          flex: 1;
          word-break: keep-all;
          overflow: hidden;
        }

        .price-container {
          width: 130px;
          display: flex;
          align-items: flex-end;
          justify-content: flex-end;
          color: #999999;

          .price {
            text-align: right;
          }
        }
      }

      .form-body {
        padding-top: 24px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        flex: 1;
        align-items: center;

        .input {
          width: 100%;
          padding: 12px;
          border-radius: 2px;
          border: solid 1px #999999;

          &.name {
            height: 43px;
            margin-bottom: 12px;
          }

          &.message {
            flex: 1;
            margin-bottom: 16px;
            vertical-align: to-upper-case($string: "");
            resize: none;
          }
        }

        .description {
          color: #999999;
          font-size: 12px;
        }
      }
    }

    .button {
      cursor: default;
      width: 100%;
      height: 52px;
      padding: 16px 0;
      background-color: #eaeaea;

      &.active {
        cursor: pointer;
        background-color: #ffb22c;
      }
    }
  }
}
</style>
