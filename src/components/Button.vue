<template>
  <div class="button-container">
    <img src="../assets/images/leaf-left.jpg" class="leaf" />
    <button class="button" @click="$emit('click')"><slot>Button</slot></button>
    <img src="../assets/images/leaf-right.jpg" class="leaf" />
  </div>
</template>

<script>
export default {
  name: 'Divider'
}
</script>

<style lang="scss" scoped>
.button-container {
  display: flex;
  .leaf {
    width: 46px;
    height: 48px;
  }
  .button {
    padding: 0 28px;
    height: 44px;
    line-height: 44px;
    background-color: #295238;
    color: #ffffff;
  }
}
</style>