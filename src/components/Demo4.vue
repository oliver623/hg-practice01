<template>
  <div class="demo4">
    <h1>ref, watch</h1>
    <label for>姓名</label>
    <input class="nameStyle" v-model="name" type="text" @keydown="logName" />
    <span>{{name}}</span>
    <br/>
    <label for>年龄</label>
    <input v-model="age" type="text" @keyup="logAge" />
    <span>{{age}}</span>
    <br/>
    <input v-model="form.a" type="text" />
    <br/>
    <input v-model="form.b" type="text" />
    <br/>
    <span>{{form}}</span>
    <br/>
  </div>
</template>

<script>
export default {
  name: 'demo4',
  data() {
    return {
      name: '',
      age: 34,
      form: {
        a: 123,
        b:11111
      }
    }
  },
  watch: {
    age(val, old) {
      console.log('val====', val)
      console.log('old====', old)
    },
    name(val, old) {
      console.log('val====', val)
      console.log('old====', old)
    },
    form:{
      handler(val,old){
        console.log('form====', val)
        console.log('old====', old)
      },
      immediate:true,
      deep: true
    },
    'form.a'(val,old){
      console.log('val====', val)
      console.log('old====', old)
    }
  },
  methods: {
    logName() {
      //  console.log(this.$refs)
    },
    logAge() {
      // console.log(this.$refs)
    }
  }
}
</script>

<style scoped lang="scss">
</style>