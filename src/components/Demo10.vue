<template>
  <div class="Demo10">
    <el-button type="primary" :plain="type!=='vif'" @click="handleClick('vif')">切换vif</el-button>
    <el-button type="primary" :plain="type!=='vshow'" @click="handleClick('vshow')">切换vshow</el-button>
    <br />
    <el-button type="primary" plain @click="handleChange(1)">success</el-button>
    <el-button type="danger" plain @click="handleChange(2)">error</el-button>
    <el-button type="info" plain @click="handleChange(3)">others</el-button>

    <div v-if="type==='vif'">
      <p v-if="success">show success</p>
      <p v-else-if="error">show error</p>
      <p v-else="others">show others</p>
    </div>
    <div v-else>
      <p v-show="success">show success</p>
      <p v-show="error">show error</p>
      <p v-show="others">show others</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo10',
  data() {
    return {
      success: false,
      error: false,
      others: false,
      type: 'vif',
      index: 1
    }
  },
  methods: {
    handleClick(param) {
      if (param === 'vif') {
        this.type = 'vif'
        console.log('this.type====', this.type)
      } else {
        this.type = 'vshow'
        console.log('this.type====', this.type)
      }
    },
    handleChange(num) {
      if (num === 1) {
        this.success = true
        this.error = false
        this.others = false
      } else if (num === 2) {
        this.success = false
        this.error = true
        this.others = false
      } else {
        this.success = false
        this.error = false
        this.others = true
      }
    }
  }
}
</script>

<style scoped lang="scss">
</style>