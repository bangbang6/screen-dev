<template>
  <div :class="['echart',classname]"></div>
</template>

<script>
import Echarts from 'echarts'
import { onMounted, watch, ref } from 'vue'
import { v4 as uuidv4 } from 'uuid';

export default {
  props: {
    theme: {
      type: [String, Object],
      default: 'dark'
    },
    options: Object
  },
  setup (ctx) {
    const classname = `echart-${uuidv4()}`
    let dom
    let chart
    const init = () => {
      if (!chart) {
        dom = document.getElementsByClassName(classname)[0]
        dom && (chart = Echarts.init(dom, ctx.theme))

      }
      dom && ctx.options && chart.setOption(ctx.options)
    }
    onMounted(() => [
      init()
    ])
    watch(() => ctx.options, () => {
      init()
    })
    return {
      classname
    }
  }
}
</script>

<style lang='scss' scoped>
.echart {
  width: 100%;
  height: 100%;
  background: rgb(43, 44, 46);
}
</style>