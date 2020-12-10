<template>
  <div class="Demo3">
    <h1>双向数据绑定  v-model</h1>
      <label for="">姓名</label>
      <input v-model.lazy="name" type="text" @keydown.enter="logName">
      <span>{{name}}</span>
      <label for="">年龄</label>
      <input v-model.number="age" type="text" @keyup.alt.enter="logAge">
      <span>{{age}}</span>
  </div>
</template>

<script>
export default {
  name: 'Demo3',
  data () {
    return {
      name: '',
      age: 10
    }
  },
  methods: {
    logName(){
      console.log('正在输入姓名...')
    },
    logAge(){
      console.log('正在输入年龄...')
    }
  }
}
</script>

<style scoped lang="postcss">

</style>