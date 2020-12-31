<template>
  <div class="wrapper" ref="wrapper">
    <svg :width="width" :height="height" :viewBox="viewBox">
      <defs>
        <mask id="mask">
          <radialGradient fx="100%" fy="50%" cx="50%" cy="50%" r="50%" id="radial">
            <stop offset="0%" stop-color="#fff" stop-opacity="1" />
            <stop offset="100%" stop-color="#fff" stop-opacity="0" />
          </radialGradient>
          <circle cx="0" cy="0" r="100" fill="url(#radial)">
            <animateMotion dur="3s" :path="path" repeatCount="indefinite" rotate="0" />
          </circle>
        </mask>
      </defs>
      <path :d="path" stroke="#235fa7" stroke-width="1" />
      <path :d="path" stroke="#4fd2dd" stroke-width="3" mask="url(#mask)" />
    </svg>
    <div class="content">
      <slot></slot>
    </div>
  </div>
</template>

<script>
import { computed, getCurrentInstance, onMounted, ref } from 'vue'
export default {
  name: 'FlyBox',
  //ctx这个vue实例是在created时候获取的 那时候只初始化啦props等 要在Mouted时候拿实例 必须用GetcurrentInstance() instance.ctx就是vue实例
  //clientWidth clientHeight 表示dom真实元素宽度和高度

  setup (ctx) {
    let width = ref(0)
    let height = ref(0)
    onMounted(() => {

      const instance = getCurrentInstance()
      console.log(getCurrentInstance);
      const dom = instance.ctx.$refs.wrapper

      width.value = dom.clientWidth
      height.value = dom.clientHeight

    })
    let viewBox = computed(() => {
      return `0 0 ${width.value} ${height.value}`
    })
    let path = computed(() => {
      return `M 5 5 L ${width.value - 5} 5 L ${width.value - 5} ${height.value - 5}  L 5 ${height.value - 5}  Z`
    })

    return {
      width, height, viewBox, path
    }
  }
}
</script>

<style lang='scss' scoped>
.wrapper {
  margin: auto;
  width: 400px;
  height: 200px;
  background: black;
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    position: absolute;
    left: 0;
    top: 0;
  }
  .content {
    z-index: 2;
    color: white;
  }
}
</style>