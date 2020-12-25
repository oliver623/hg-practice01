<template>
  <div class="About">
    <h3>这是关于页面</h3>
    {{count}}
    <el-button @click="add" type="primary">count+1</el-button>
    <el-button @click="des" type="primary">count-1</el-button>
  </div>
</template>

<script>
export default {
  name: 'About',
  data () {
    return {}
  },
  computed: {
    count(){
      return this.$store.state.count
    }
  },
  methods: {
    add(){
      // dispatch action中声明的方法
      // dispatch 一般是异步的
      // this.$store.dispatch('add')
      this.$store.commit('add')
    },
    des(){
      // this.$store.dispatch('des')
      this.$store.commit('des')
    }
  }
}
</script>

<style scoped lang="scss">

</style>