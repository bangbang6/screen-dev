import { ref,onMounted ,onUnmounted} from "vue"
function fillZero(number){
  return number<10 ? '0'+number : number
}
function parseData(date){
  const month = fillZero(date.getMonth()+1)
  const day = fillZero(date.getDate())
  return `${date.getFullYear()}-${month}-${day}`
}
function parseTime(date){
  
  const hours = fillZero(date.getHours())

  const minutes = fillZero(date.getMinutes())
  const seconds = fillZero(date.getSeconds())
  return `${hours}:${minutes}:${seconds}`
}
export function useClock(){



  const time = ref('')
  const date = ref('')
  const now = new Date()
  date.value = parseData(now)
  time.value = parseTime(now)
  let task
  onMounted(()=>{
    task = setInterval(()=>{
      const now = new Date()
      date.value = parseData(now)
      time.value = parseTime(now)
    },1000)
    onUnmounted(()=>{
      task && clearInterval(task)
    })
  })
  return {
    date,
    time
  }
}