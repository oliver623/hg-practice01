<template>
  <div class="Demo1">
    <h1>hello{{name}},我的QQ是：{{qq}}</h1>
    <span>{{greeting('Morning')}}</span>
    <a v-bind:href="website">百度</a>
    <p v-html="websiteTag"></p>
    <p><input type="text" :value="name"></p>
  </div>
</template>

<script>
export default {
  name: 'Demo1',
  data () {
    return {
      name: '张三',
      qq: '12312wws',
      website:'https://www.baidu.com',
      websiteTag:'<a href="https://www.taobao.com">淘宝</a>'
    }
  },
  methods: {
    greeting(time){
      return`Good ${time},${this.name}`
    }
  }
}
</script>

<style scoped lang="scss">
</style>