<template>
  <div class="main">
    <div class="chart-wrapper">
      <vue-echarts :options="options"></vue-echarts>
    </div>
    <div class="right">
      <div class="text-wrapper">
        <div class="text">
          <div class="title">慕课外卖登录设备</div>
          <div class="sub-title">Distribution of devices</div>
        </div>
        <div class="number-wrapper">
          <div class="number">
            <vue-count-to
              :startVal="+startValue"
              :endVal="+deviceNumber"
              :duration="500"
              separator=","
            ></vue-count-to>
          </div>
          <div class="danwei">万</div>
        </div>
      </div>

      <div class="devices-wrapper">
        <div class="device" v-for="item in devices" :key="item">
          <div class="device-num">
            <vue-count-to
              :startVal="+item.startVal"
              :endVal="+item.value"
              :duration="500"
              separator=","
            ></vue-count-to>
          </div>
          <div class="deviceName">{{item.key}}</div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { watch, ref, onMounted } from 'vue'
import VueCountTo from '../VueCountTo'
import VueEcharts from '../VueEcharts'
export default {
  components: { VueCountTo, VueEcharts },
  props: {
    devices: Array,
    deviceNumber: [Number, String],
  },
  setup (props) {
    const options = ref({})
    const startValue = ref(0)
    const color = ['rgb(176,207,120)', 'rgb(157,195,91)', 'rgb(131,167,72)']
    const updateChart = () => {
      options.value = {
        backgroundColor: 'rgb(36, 31, 32)',

        series: [{

          name: '访问来源',
          type: 'pie',
          radius: '70%',
          selectedMode: 'multiple',
          selectedOffset: 10,
          clockwise: true,
          center: ['50%', '50%'],
          color,
          emphasis: {
            itemStyle: {
              color: 'rgb(140,251,182)'
            }
          },
          data: props.devices,
          roseType: 'radius',
          label: { show: false }
        }]
      }
    }
    watch(() => props.deviceNumber, (newVal, oldVal) => {
      startValue.value = oldVal
    })
    onMounted(() => {
      updateChart()
    })
    watch(() => props.devices, () => {
      updateChart()
    })
    return {
      options,
      startValue
    }
  }
}
</script>

<style lang='scss' scoped>
.main {
  width: 100%;
  height: 100%;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  .chart-wrapper {
    height: 80%;
    align-items: center;
    flex: 3;
  }
  .right {
    flex: 7;
    color: white;
    padding: 0 20px;
    box-sizing: border-box;
    .text-wrapper {
      display: flex;
      height: 50%;
      .text {
        flex: 1;
        .title {
          font-size: 16px;
        }
        .sub-title {
          font-size: 10px;
        }
      }
      .number-wrapper {
        flex: 1;
        display: flex;
        .number {
          font-size: 28px;
          font-weight: bold;
        }
        .danwei {
          font-size: 16px;
          padding-left: 4px;
          box-sizing: border-box;
          display: flex;
          align-items: flex-end;
        }
      }
    }
    .devices-wrapper {
      height: 50%;

      display: flex;
      .device {
        flex: 1;
        width: 33.3%;
        display: flex;
        padding-top: 50px;
        box-sizing: border-box;
        flex-direction: column;
        align-items: center;
        .device-num {
          font-size: 20px;
        }
        .deviceName {
          font-size: 12px;
        }
      }
    }
  }
}
</style>