<template>
  <div class="ride">
    <div class="text-wrapper">
      <div class="title">慕课外卖骑手概况</div>
      <div class="sub-title">Rider Growth rate</div>
    </div>
    <div class="chart-wrapper">
      <vue-echarts :options="options"></vue-echarts>
    </div>
  </div>
</template>
 
<script>
import { onMounted, onUnmounted, watch, ref } from 'vue'
import VueEcharts from '../VueEcharts'
export default {
  components: { VueEcharts },
  props: {
    riderData: Object
  },
  setup (props) {
    const options = ref(null)
    let currentLegend, currentChart = 0, task
    const colors = ['rgb(209,248,139)', 'rgb(115,201,245)', 'rgb(124,136,146)']
    let { axisX, orderData, rateData } = props.riderData
    const createOptions = (data) => ({
      series: [
        {
          type: 'line',
          data: data.data1,
          stack: 'ride',
          smooth: true,
          lineStyle: {
            width: 2
          },
          symbol: 'none',
          name: currentLegend[0],
        },
        {
          type: 'line',
          data: data.data2,
          stack: 'ride',
          smooth: true,
          lineStyle: {
            width: 2
          },
          symbol: 'none',
          name: currentLegend[1],

        },
      ],
      backgroundColor: 'rgb(36, 31, 32)',
      xAxis: [{
        type: 'category',
        axisTick: { show: false },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[2]
          }
        },
        axisLabel: {
          fontSize: 12
        },
        data: axisX
      }, {
        type: 'category',
        axisTick: { show: false },
        axisLine: { show: false }
      }],
      yAxis: [{
        type: 'value',
        axisTick: { show: false },
        axisLine: {
          onZero: false,
          lineStyle: {
            color: colors[2]
          }
        },
        axisLabel: {
          fontSize: 12
        },
        splitLine: {
          lineStyle: {
            type: 'dotted'
          }
        }
      }],
      color: colors,
      tooltip: {
        trigger: 'none',
        axisPointer: {
          type: 'cross'
        }
      },
      legend: {
        top: 0,
        right: 0,
        icon: 'rect',
        textStyle: {
          fontSize: 12,
          color: colors[2]
        },
        data: currentLegend
      },
      grid: {
        top: 30,
        bottom: 20,
        left: 30,
        right: 0
      },
    })
    const update = () => {
      if (currentChart === 0) {

        currentLegend = [orderData.legend1, orderData.legend2]
        options.value = createOptions(orderData)


        currentChart = 1

      } else {
        currentLegend = [rateData.legend1, rateData.legend2]
        options.value = createOptions(rateData)
        currentChart = 0
      }
    }

    onMounted(() => {
      update()
    })
    let stop = watch(() => props.riderData, () => {
      update()
      task = setInterval(() => {
        update()
      }, 5000)
      stop() //停止监听 用setInterval去定时改变
    })
    onUnmounted(() => {
      task && clearInterval(task)
    })
    return {
      options
    }
  }
}
</script>
 
<style scoped lang = "scss">
.ride {
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  box-sizing: border-box;
  .text-wrapper {
    height: 30%;
    color: white;
    .title {
      font-size: 16px;
    }
    .sub-title {
      font-size: 12px;
      margin-top: 5px;
    }
  }
  .chart-wrapper {
    height: 70%;
  }
}
</style>