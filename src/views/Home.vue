<template>
  <div>
    <simple-svg></simple-svg>
    <svg width="50" height="50" style="color:red">
      <use href="#apple" />
    </svg>
    <svg width="50" height="50" style="color:orange">
      <use href="#left" />
    </svg>
    <svg width="50" height="50" style="color:blue">
      <use href="#player" />
    </svg>
    <svg width="200" height="200" style="color:#00a0e0">
      <use href="#circleProcess" />
    </svg>
    <svg width="200" height="200">
      <use href="#logo" />
    </svg>

    <svg-transform></svg-transform>
    <Icon name="add-circle" width="80" height="80" style="color:green"></Icon>
    <Icon name="arrow-right-circle" width="80" height="80" style="color:red"></Icon>
    <sml-svg></sml-svg>
    <div style="width:300px;height:200px">
      <Loading :dur="1">
        <div>数据大屏加载中...</div>
      </Loading>
    </div>
    <fly-box>
      <div>旋转盒子</div>
    </fly-box>
  </div>
</template>

<script>
import { onMounted } from 'vue'
import FlyBox from '@/components/FlyBox'
export default {
  components: { FlyBox },
  setup () {
    onMounted(() => {
      console.log('111')
    })
  }
}
</script>

<style>
</style>