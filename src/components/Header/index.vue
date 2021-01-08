<template>
  <div class="header">
    <div class="icon-wrapper">
      <Icon stroke="red" :strokeWidth="20"></Icon>
    </div>
    <div class="logo-text">
      <div class="cn-text">慕课外卖业务数据大盘</div>
      <div class="en-text">Imooc Delivery Overview of Business Data</div>
    </div>
  </div>
</template>

<script>
import Icon from './Icon'
export default {
  components: { Icon }
}
</script>

<style lang='scss' scoped>
.header {
  display: flex;
  align-items: center;
  background: rgb(36, 31, 32);
  .icon-wrapper {
    width: 60px;
    height: 60px;
    margin-left: 20px;
  }
  .logo-text {
    flex: 1;
    margin-left: 40px;

    .cn-text {
      color: rgb(255, 255, 255);
      font-weight: bold;
      font-size: 30px;
      letter-spacing: 2px;
    }

    .en-text {
      color: rgb(255, 255, 255);
      font-size: 20px;
      letter-spacing: 1px;
    }
  }
}
</style>