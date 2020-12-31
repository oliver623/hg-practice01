<template>
  <div class="About">
    <h3>这是关于页面</h3>
    {{Mycount}}==={{user}}==={{evenOrOdd}}
    <el-button @click="add" type="primary">count+1</el-button>
    <el-button @click="des" type="primary">count-1</el-button>
    <el-button @click="asyncAdd" type="primary">异步count+1</el-button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapMutations, mapActions } from 'vuex'
export default {
  name: 'About',
  data () {
    return {}
  },
  computed: {
    // count(){
    //   return this.$store.state.count
    // },
    // userName(){
    //   return this.$store.state.userName
    // },
    // ...mapState(['count', 'userName'])

    // 辅助函数仅用于不提交数据的方式
    ...mapState({
      Mycount: 'count',
      user: 'userName'
    }),
    // evenOrOdd() {
    //   return this.$store.getters.evenOrOdd
    // }
    ...mapGetters(['evenOrOdd'])
  },
  methods: {
    asyncAdd(){
      // 在组件内部提交数据  载荷形式分发
      // this.$store.dispatch('asyncAdd',{
      //   amount: 10
      // })
      this.$store.dispatch({
        type: 'asyncAdd',
        amount:10,
      })
    },

    // ...mapActions(['asyncAdd']),

    // add(){
    //   // dispatch action中声明的方法
    //   // dispatch 一般是异步的
    //   // this.$store.dispatch('add')
    //   this.$store.commit('add')
    // },
    // des(){
    //   // this.$store.dispatch('des')
    //   this.$store.commit('des')
    // }
    
    ...mapMutations(['add','des'])
  }
}
</script>

<style scoped lang="scss">

</style>