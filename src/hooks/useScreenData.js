import { ref,onUnmounted,onMounted } from "vue"
const ageMockData = [{"startValue":0,"value":131107,"axis":"0-20","color":"rgb(116,166,49)"},{"startValue":0,"value":330831,"axis":"20-30","color":"rgb(190,245,99)"},{"startValue":0,"value":551238,"axis":"30-50","color":"rgb(202,252,137)"},{"startValue":0,"value":31088,"axis":">50","color":"rgb(251,253,142)"}]
const deviceMockData = {"totalDevices":1070909,"devices":[{"key":"Android","startVal":"0","value":423676},{"key":"iOS","startVal":"0","value":373581},{"key":"PC","startVal":"0","value":273652}]}
const riderMockData = {"axisX":["1月","2月","3月","4月","5月","6月","7月","8月","9月","10月","11月","12月"],"orderData":{"legend1":"去年骑手月人均接单","legend2":"今年骑手月人均接单","data1":["330","420","560","450","610","890","720","610","580","750","770","600"],"data2":["430","510","660","550","710","990","620","550","760","810","930","720"]},"rateData":{"legend1":"去年月新增骑手","legend2":"今年月新增骑手","data1":["129","223","202","197","300","112","333","249","178","322","401","167"],"data2":["179","263","282","297","330","344","222","299","190","455","566","233"]}}
const hotCategoryMockData = {"data1":{"axisX":["粉面粥店","简餐便当","汉堡披萨","香锅冒菜","小吃炸串","地方菜系","轻食简餐"],"data1":[50,29,46,88,99,69,97],"data2":[50,71,54,12,1,31,3]},"data2":{"axisX":["草莓","甘蔗","榴莲","菠萝","香蕉","梨","苹果"],"data1":[85,4,3,26,63,31,19],"data2":[15,96,97,74,37,69,81]}}
export function random(n){
  return Math.floor(Math.random()*n)
}
export function getScreenData(){
  let todayUser = ref(2020)
  let growthLastDay = ref(14)
  let growthLastMonth = ref(120)
  let task
  const ageData = ref(ageMockData)
  const averageAgeData = ref(28)
  const riderData= ref(riderMockData)
  const devices = ref(deviceMockData)
  const hotCategoryData = ref(hotCategoryMockData)
  onMounted(()=>{
    task = setInterval(()=>{
      todayUser.value = todayUser.value +random(10)
      growthLastDay.value = growthLastDay.value +random(5)
      growthLastMonth.value = growthLastMonth.value +random(5)
      /* averageAgeData.value = averageAgeData.value+random(4)*0.2 */

      //浅拷贝
      let copyData = [...ageData.value]
      copyData.forEach(item=>{
        item.startValue = item.value
        item.value = item.value + random(100)
      })
      ageData.value = copyData

     
      const _devicesData = {...deviceMockData}
      _devicesData.totalDevices += random(100)
      _devicesData.devices.forEach(item=>{
        item.startVal = item.value
        item.value += random(100)
      })
      devices.value = _devicesData

      const _riderData = {...riderData.value}
      _riderData.orderData.data1.map(item=>item+random(100))
      _riderData.orderData.data2.map(item=>item+random(100))
      _riderData.rateData.data1.map(item=>item+random(100))
      _riderData.rateData.data1.map(item=>item+random(100))
      riderData.value = _riderData
      const _hotCategoryData = {...hotCategoryData.value}
      _hotCategoryData.data1.data1 = _hotCategoryData.data1.data1.map(item=>item+random(10))
      _hotCategoryData.data1.data2 = _hotCategoryData.data1.data2.map(item=>item+random(10))
      _hotCategoryData.data2.data1 = _hotCategoryData.data2.data1.map(item=>item+random(10))
      _hotCategoryData.data2.data2 = _hotCategoryData.data2.data2.map(item=>item+random(10))
      hotCategoryData.value = _hotCategoryData
     },2000)

    
  })
  onUnmounted(()=>{
    task && clearInterval(task)
  })
  return {
    todayUser,
    growthLastDay,
    growthLastMonth,
    ageData,
    averageAgeData,
    devices,
    riderData,
    hotCategoryData
  }
}