<template>
  <div class="container" ref="container">
    <slot></slot>
  </div>
</template>

<script>
import { getCurrentInstance, onMounted, onUnmounted, ref } from 'vue'
import { debounce } from '../../utils'
export default {
  props: {
    width: String,
    height: String
  },
  //setup 是created时候(dom和ctx都没好) onMounted才是mounted时候 
  setup () {
    let width = ref(0)
    let height = ref(0)
    let ctx, dom, observer

    const init = () => {

      if (ctx.width && ctx.height) {
        width.value = +ctx.width
        height.value = +ctx.height
      } else {
        width.value = dom.clientWidth
        height.value = dom.clientHeight
      }
      window.addEventListener('resize', debounce('50', updateScale))
    }
    const updateSize = () => {

      dom.style.width = `${width.value}px`
      dom.style.height = `${height.value}px`


    }
    const updateScale = () => {
      //屏幕
      let screenWidth = document.body.clientWidth
      let screenHeight = document.body.clientHeight
      //比例
      let xScale = screenWidth / +(dom.style.width.slice(0, -2))
      let yScale = screenHeight / +(dom.style.height.slice(0, -2))
      dom.style.transform = `scale(${xScale},${yScale})`
    }
    const initMution = () => {
      observer = new MutationObserver(updateScale)
      observer.observe(dom, {
        attributes: true,
        attributeFilter: ['style'],//之间听style属性
        attributeOldValue: true
      })
    }
    onMounted(() => {
      ctx = getCurrentInstance().ctx
      dom = ctx.$refs.container
      init()

      updateSize()
      initMution()
      updateScale()
      onUnmounted(() => {
        widow.removeEventListener('resize')
      })
    })
  }
}
</script>

<style lang='scss' scoped>
.container {
  position: fixed;
  left: 0;
  top: 0;
  transform-origin: left top;
  z-index: 999;
  overflow: hidden;
  font-size: 44px;
}
</style>