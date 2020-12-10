<template>
  <div class="Demo5">
    <h1>Computed</h1>
    <el-button type="primary" @click="a++">加A</el-button>
    <el-button type="primary" @click="b++">加B</el-button>
    <p>A--- {{a}}</p>
    <p>B--- {{b}}</p>

    <!-- methods -->
    <!-- <p>Age + A = {{AddA()}}</p>
    <p>Age + B = {{AddB()}}</p> -->

    <!-- computed  必须要有返回值，必须要有return -->
    <p>Age + A = {{AddA}}</p>
    <p>Age + B = {{AddB}}</p>
  </div>
</template>

<script>
export default {
  name: 'Demo5',
  data() {
    return {
      a: 0,
      b: 0,
      age: 30
    }
  },
  computed: {
    AddA() {
      console.log('AAAAAAAA')
      return this.age + this.a
    },
    AddB() {
      console.log('BBBBBBBBB')
      return this.age + this.b
    }
  },
  methods: {
    // AddA(){
    //   console.log('AAAAAAAA')
    //   return this.age+this.a
    // },
    // AddB(){
    //   console.log('BBBBBBBBB')
    //   return this.age+this.b
    // }
  }
}
</script>

<style scoped lang="scss">
</style>