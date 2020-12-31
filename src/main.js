import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
//!每个组件都是个插件 export default function（vue) {全局注册}  实现 按需加载 就是在node_modules里面找对应文件即可 或者直接都把他在i最外层index.js导出 那么就只要找index.js文件即可 不用那么多层
/*export testA
export testB
export defalut {
  testA,testB
}
*/ //!这样就既可以全部引入 也可以单个引入
import dataV from 'vue3-datav-libs' 
//tree-shaking更加好
createApp(App).use(router).use(store).use(dataV).mount('#app')
