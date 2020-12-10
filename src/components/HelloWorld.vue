<template>
  <div class="HelloWorld">
    <div class="hello">
      <h1>{{msg}}</h1>
      <p>{{wechat}}</p>
      <p>{{greeting()}}</p>
    </div>
    <ul v-for="(item, index) in personInformation" :key="index">
      <li>{{item.name}}</li>
      <li>{{item.age}}</li>
      <li>{{item.hobby}}</li>
      <li>{{item.boy}}</li>
      <li>{{item.money}}</li>
      <hr />
    </ul>
    <el-button type="primary" @click="del"> 点击</el-button>
    <h1>{{str}}</h1>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  props: {
    personInformation: {
      type: Array,
      default: () => []
    },
    str:{
      type: String
    }
  },
  data() {
    return {
      msg: 'hi,xufff',
      wechat: 'hg123456',

    }
  },
  methods: {
    greeting() {
      return `${this.msg},你好，我的微信是${this.wechat}`
    },
    del(){
      // this.personInformation.pop()
      // this.str = '1111111111'
      this.$emit('changeStr', '1111111111111')
    }
  }
}
</script>

<style scoped lang="postcss">
</style>