import Vue from 'vue'
import App from './App.vue'
import router from './router'
// 导入创建的store
import store from './store'
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
// //注册全局组件
// //引入组件
// import User from './components/User'
// //注册组件
// Vue.component('user', User)

Vue.config.productionTip = false
Vue.use(ElementUI);
new Vue({
  // 挂在
  router,
  store,
  render: h => h(App)
}).$mount('#app')
