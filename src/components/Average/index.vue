<template>
  <div class="age">
    <div class="average">
      <div class="text-wrapper">
        <div class="title">慕课外卖用户年龄分布&平均年龄</div>
        <div class="sub-title">Distribution of Age</div>
      </div>
      <div class="number-wrapper">
        <span class="number">
          <vue-count-to :startVal="startVal" :endVal="averageAgeData" :duration="500" separator=","></vue-count-to>
        </span>
        <div class="text">
          <div>岁</div>
        </div>
      </div>
    </div>
    <div class="chart-wrapper">
      <vue-echarts :options="options"></vue-echarts>
    </div>
    <div class="ageAxis-wrapper">
      <div class="ageAxis" v-for="item in ageData" :key="item">
        <div class="ageNumber">
          <vue-count-to
            :startVal="item.startValue"
            :endVal="item.value"
            :duration="500"
            separator=","
          ></vue-count-to>
        </div>
        <div class="axis">{{item.axis}}</div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch, ref, onMounted } from 'vue'
import VueCountTo from '../VueCountTo/vue-countTo'
import VueEcharts from '../VueEcharts'
export default {
  components: { VueCountTo, VueEcharts },
  props: {
    averageAgeData: [Number, String],
    ageData: Array
  },

  setup (props, obj) {
    const startVal = ref(0)
    const options = ref(null)
    watch(() => props.averageAgeData, (newVal, oldVal) => {
      startVal.value = oldVal
    })
    const updateChart = () => {
      let data = ['指标']
      let axis = ['指标']
      let max = 0
      let color = []
      props.ageData.forEach(item => {
        data.push(item.value)
        axis.push(item.axis)
        max += (+item.value)
        color.push(item.color)
      });
      options.value = {
        grid: {
          left: 10,
          right: 20,
          top: 40
        },
        color,
        dataset: {
          source: [axis, data]
        },
        tooltip: {
          textStyle: {
            fontSize: 16
          },
          padding: 10
        },
        series: [
          { type: 'bar', barWidth: 6, stack: 'age' },
          { type: 'bar', barWidth: 6, stack: 'age' },
          { type: 'bar', barWidth: 6, stack: 'age' },
          { type: 'bar', barWidth: 6, stack: 'age' },
        ],
        backgroundColor: 'rgb(36, 31, 32)',
        xAxis: {
          type: 'value',
          max,
          splitLine: { show: false },
          axisTick: { show: false },
          axisLabel: {
            color: 'rgb(98,105,113)',
            fontSize: 12
          },
          axisLine: {
            lineStyle: {
              color: 'rgb(50,51,53)',
              width: 3,
            }
          }
        },
        yAxis: {
          type: 'category',
          show: false
        }
      }
    }
    onMounted(() => {
      updateChart()
    })
    watch(() => props.ageData, () => {
      updateChart()
    })
    return {
      startVal,
      options
    }
  }
}
</script>

<style lang='scss' scoped>
.age {
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  background: rgb(36, 31, 32);

  box-sizing: border-box;
  .average {
    flex: 2;
    display: flex;
    align-items: center;
    height: 30%;
    .text-wrapper {
      width: 80%;
      color: white;
      .title {
        font-size: 20px;
      }
      .sub-title {
        font-size: 14px;
        margin-top: 5px;
      }
    }
    .number-wrapper {
      flex: 1;
      color: white;
      justify-content: flex-end;
      display: flex;
      .number {
        font-size: 48px;
        font-weight: bold;
        display: inline-block;
        margin-right: 5px;
      }
      .text {
        font-size: 14px;
        text-align: right;
        display: flex;

        align-items: center;
      }
    }
  }
  .chart-wrapper {
    width: 100%;
    height: 60px;
    background: rgb(43, 44, 46);
  }
  .ageAxis-wrapper {
    display: flex;
    align-items: center;
    .ageAxis {
      flex: 1;
      width: 25%;
      display: flex;
      box-sizing: border-box;
      padding: 10px;
      flex-direction: column;
      color: white;
      align-items: center;

      .ageNumber {
        font-size: 20px;
        font-weight: 400;
      }
      .axis {
        font-size: 12px;
      }
    }
  }
}
</style>