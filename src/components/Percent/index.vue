<template>
  <div class="percent">
    <div class="percent-inner" :style="{background:`${color}`,width:`${percent}%`}"></div>
  </div>
</template>

<script>
export default {
  props: {
    color: String,
    percent: [Number, String]
  }
}
</script>

<style lang='scss' scoped>
.percent {
  width: 100%;
  height: 10px;
  overflow: hidden;
  padding-top: 5px;
  box-sizing: border-box;
  .percent-inner {
    height: 100%;
  }
}
</style>