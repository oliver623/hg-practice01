import Vue from 'vue'
// 导入模块
import Vuex from 'vuex'

// 使用当前插件
Vue.use(Vuex)

// 创建store
export default new Vuex.Store({
  // 当前的状态
  state: {
    count: 0
  },
  // 声明同步的方法
  mutations: {
    add(state){
      // 修改状态
      console.log('state====', state)
      state.count++
    },
    des(state){
      state.count--
    }
  },
  // 声明异步的方法
  actions: {
    // add(context){ 
    //   console.log('context====', context)
    //   //  commit mutation中声明的方法
    //   context.commit('add')
    // },
    // des({commit}){// 从context中解构commit
    //   commit('des')
    // }
  },
  modules: {
  }
})
