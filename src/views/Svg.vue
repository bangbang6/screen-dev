<template>
  <div class="main">
    <div class="loading-wrapper" v-if="loading">
      <Loading></Loading>
    </div>
    <Container width="2056" height="1024" v-else>
      <div class="header">
        <Header></Header>
      </div>
      <div class="separator" />
      <div class="center">
        <div class="left">
          <div class="left1">
            <today-user
              :todayUser="todayUser"
              :growthLastDay="growthLastDay"
              :growthLastMonth="growthLastMonth"
            ></today-user>
          </div>
          <div class="left2">
            <Average :ageData="ageData" :averageAgeData="averageAgeData"></Average>
          </div>
          <div class="left3">
            <Device :devices="devices.devices" :deviceNumber="devices.totalDevices"></Device>
          </div>
          <div class="left4">
            <total-rider :riderData="riderData"></total-rider>
          </div>
          <div class="left5">
            <hot-category :hotCategoryData="hotCategoryData"></hot-category>
          </div>
        </div>
        <div class="right">
          <div class="right-top1"></div>
          <div class="right-top2"></div>
          <div class="right-bottom">
            <div class="right-left">
              <div class="right-left1"></div>
              <div class="right-left2"></div>
              <div class="right-left3"></div>
              <div class="right-left4"></div>
            </div>
            <div class="right-right">
              <div class="right-right1"></div>
              <div class="right-right2"></div>
            </div>
          </div>
        </div>
      </div>
    </Container>
  </div>
</template>

<script>
import Container from '@/components/Container'
import Header from '@/components/Header'
import TodayUser from '@/components/TodayUser'
import Average from '@/components/Average'
import Device from '@/components/Device'
import TotalRider from '@/components/TotalRider'
import HotCategory from '@/components/HotCategory'
import { getScreenData } from '@/hooks/useScreenData'
import { onMounted, ref } from 'vue'
export default {
  components: { Container, Header, TodayUser, Average, Device, TotalRider, HotCategory },
  setup () {
    let loading = ref(true)
    onMounted(() => {
      setTimeout(() => {
        loading.value = false

      }, 500)
    })
    console.log(getScreenData());
    return {
      loading,
      ...getScreenData()
    }
  }
}
</script>

<style lang='scss' scoped>
.main {
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgb(29, 29, 29);
  height: 100%;
  .loading-wrapper {
    width: 200px;
    height: 200px;
    display: flex;
    justify-items: center;
    align-items: center;
  }
  .header {
    width: 100%;
    height: 80px;
    background: rgb(36, 31, 32);
  }

  .separator {
    width: 100%;
    height: 5px;
    background: rgb(92, 88, 89);
  }

  .center {
    flex: 1;
    display: flex;
    width: 100%;

    .left {
      flex: 0 0 480px;
      display: flex;
      flex-direction: column;
      justify-content: space-between;
      width: 480px;
      height: 100%;
      padding-bottom: 20px;
      box-sizing: border-box;

      .left1 {
        height: 170px;
        background: rgb(36, 31, 32);
      }

      .left2 {
        height: 200px;
        background: rgb(36, 31, 32);
      }

      .left3 {
        height: 200px;
        background: rgb(36, 31, 32);
      }

      .left4 {
        height: 220px;
        background: rgb(36, 31, 32);
      }

      .left5 {
        height: 200px;
        background: rgb(36, 31, 32);
      }

      .left6 {
        height: 360px;
        background: grey;
      }
    }

    .right {
      flex: 1;
      display: flex;
      flex-direction: column;
      margin-left: 10px;

      .right-top1 {
        width: 100%;
        height: 206px;
        background: grey;
      }

      .right-top2 {
        width: 100%;
        height: 48px;
        background: grey;
        margin: 10px 0;
      }

      .right-bottom {
        flex: 1;
        display: flex;
        padding-bottom: 20px;

        .right-left {
          flex: 0 0 1917px;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          width: 1917px;

          .right-left1 {
            height: 999px;
            background: grey;
          }

          .right-left2 {
            height: 80px;
            background: grey;
          }

          .right-left3 {
            height: 350px;
            background: grey;
          }

          .right-left4 {
            height: 220px;
            background: grey;
          }
        }

        .right-right {
          flex: 1;
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          margin-left: 10px;
          margin-right: 20px;

          .right-right1 {
            width: 100%;
            height: 999px;
            background: grey;
          }

          .right-right2 {
            flex: 1;
            width: 100%;
            margin-top: 20px;
            background: grey;
          }
        }
      }
    }
  }
}
</style>