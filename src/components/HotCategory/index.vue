<template>
  <div class="hot-category">
    <div class="top">
      <div class="title-wrapper">
        <div class="title">当前热卖品类</div>
        <div class="sub-title">Hot Categories</div>
      </div>
      <div class="time">
        <div class="time-text">最后更新时间：{{date}} {{time}}</div>
      </div>
    </div>
    <div class="chart-wrapper">
      <vue-echarts :options="options"></vue-echarts>
    </div>
  </div>
</template>
 
<script>
import { useClock } from '@/hooks/useClock'
import VueEcharts from '../VueEcharts'
import { onMounted, ref, watch } from 'vue'
export default {
  components: { VueEcharts },

  props: {
    hotCategoryData: Object
  },
  setup (props) {
    const options = ref(null)
    let currentChart = 0
    const { data1, data2 } = props.hotCategoryData
    const createOptions = () => {
      const sourceData = []

      if (currentChart === 0) {
        data1.axisX.forEach((axis, index) => {
          sourceData.push([axis, data1.data1[index], data1.data2[index]])
        })
        currentChart = 1
      } else {
        data2.axisX.forEach((axis, index) => {
          sourceData.push([axis, data2.data1[index], data2.data2[index]])
        })
        currentChart = 0
      }


      return {
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'shadow'
          }
        },
        color: ['rgb(209,248,138)', 'rgba(65,65,65,.5)'],
        grid: {
          left: 30,
          right: 0,
          bottom: 60,
          top: 0
        },
        dataset: {
          source: sourceData
        },
        yAxis: {
          type: 'value',
          splitLine: {
            lineStyle: {
              type: 'dotted'
            }
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: 'rgb(124,136,146)'
            }
          },
          axisLabel: {
            color: 'rgb(98,105,113)',
            fontSize: 12
          },
          axisTick: { show: false }
        },
        xAxis: {
          type: 'category',
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: 'rgb(98,105,113)',
            fontSize: 12
          },
          axisLine: {
            onZero: false,
            lineStyle: {
              color: 'rgb(124,136,146)'
            }
          }
        },
        series: [
          {
            type: 'bar',
            stack: 'total',
            barWidth: 20
          },
          {
            type: 'bar',
            stack: 'total'
          }
        ]
      }
    }

    const update = () => {
      options.value = createOptions()
    }

    onMounted(() => {
      update()
    })
    watch(() => props.hotCategoryData, () => {
      update()
    })
    return {
      ...useClock(),
      options
    }
  }
}
</script>
 
<style lang="scss" scoped>
.hot-category {
  width: 100%;
  height: 100%;
  padding: 0 20px 0 20px;
  box-sizing: border-box;
  .top {
    height: 20%;
    display: flex;
    justify-content: space-between;
    .title-wrapper {
      width: 30%;
      color: white;
      .title {
        font-size: 16px;
      }
      .sub-title {
        font-size: 12px;
      }
    }
    .time {
      flex: 1;
      display: flex;
      justify-content: flex-end;
      color: white;

      .time-text,
      .time {
        font-size: 12px;
        display: inline-block;
        text-align: right;
        width: fit-content;
      }
    }
  }
  .chart-wrapper {
    height: 80%;
  }
}
</style>