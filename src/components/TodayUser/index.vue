<template>
  <div class="user">
    <div class="title-wrapper">
      <div class="title">慕课外卖用户总数</div>
      <div class="subTitle">User Total Count</div>
    </div>
    <div class="userNumber">
      <vue-count-to :startVal="startValue" :endVal="todayUser" :duration="500" separator=","></vue-count-to>
    </div>
    <div class="rate">
      <div class="day-rate">
        每日增长率：
        <vue-count-to
          :startVal="startDayGrowth"
          :endVal="growthLastDay"
          :duration="500"
          separator=","
          suffix="%"
        ></vue-count-to>
      </div>

      <div class="month-rate">
        每月增长率：
        <vue-count-to
          :startVal="startMonthGrowth"
          :endVal="growthLastMonth"
          :duration="500"
          separator=","
          suffix="%"
        ></vue-count-to>
      </div>
    </div>
    <div class="progress">
      <Percent color="rgb(150, 150, 150)" :percent="growthLastDay"></Percent>
    </div>
  </div>
</template>

<script>
import { watch, ref } from 'vue'
import VueCountTo from '../VueCountTo/vue-countTo.vue'
import Percent from '../Percent'
export default {
  components: { VueCountTo, Percent },
  props: {
    todayUser: Number,
    growthLastDay: Number,
    growthLastMonth: Number,
  },
  setup (props) {
    const startValue = ref(0)
    const startDayGrowth = ref(0)
    const startMonthGrowth = ref(0)
    watch(() => props.todayUser, (nextValue, prevValue) => {
      startValue.value = prevValue
    })
    watch(() => props.growthLastDay, (nextValue, prevValue) => {
      startDayGrowth.value = prevValue
    })
    watch(() => props.growthLastMonth, (nextValue, prevValue) => {
      startMonthGrowth.value = prevValue
    })
    return {
      startValue, startDayGrowth, startMonthGrowth
    }
  }

}
</script>

<style lang='scss' scoped>
.user {
  width: 100%;
  height: 100%;
  padding: 20px 20px;
  box-sizing: border-box;
  color: white;
  .title-wrapper {
    .title {
      font-size: 20px;
    }
    .subTitle {
      font-size: 12px;
      letter-spacing: 1px;
      margin-top: 5px;
    }
  }
  .userNumber {
    font-size: 36px;
    font-weight: bolder;
    letter-spacing: 2px;
    margin-top: 5px;
  }
  .rate {
    display: flex;
    align-items: center;
    margin-top: 5px;
    .day-rate {
      font-size: 14px;
      font-family: DIN;
      color: rgb(197, 251, 121);
    }
    .month-rate {
      color: rgb(99, 169, 0);
      margin-left: 10px;
      font-size: 14px;
    }
  }
}
</style>