export function debounce(delay,cb){
  let timer 
  return function(){
    clearTimeout(timer)
    timer = setTimeout(()=>{
    
      cb.apply(this,arguments)
    },delay)
  }
}