<template>
  <div class="button-container">
    <img src="~@/assets/images/leaf-left.png" class="leaf" />
    <button class="button" v-on="$listeners"><slot>Button</slot></button>
    <img src="~@/assets/images/leaf-right.png" class="leaf" />
  </div>
</template>

<script>
export default {
  name: "Divider",
};
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  justify-content: center;
  align-items: center;
  .leaf {
    width: 46px;
    height: 48px;
  }
  .button {
    padding: 0 28px;
    height: 44px;
    border-radius: 2px;
    margin: 0 10px;
    line-height: 44px;
    color: #ffffff;
    background-color: #295238;
  }
}
</style>
