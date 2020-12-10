<template>
  <div class="Demo6">
    <h1>动态样式绑定 2种方式</h1>
    <h2>示例1 属性绑定</h2>
    <!-- <div :class="{changeColor}" 
    @click="changeColor=!changeColor">
      <span>hello</span>
    </div> -->
    <h2>示例2 计算属性绑定</h2>
    <el-button type="primary" @click="changeColor=!changeColor">changeColor</el-button>
    <el-button type="primary" @click="changeLength=!changeLength">changeLength</el-button>
    <div :class="compareClass">
      <span>hello</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Demo6',
  data() {
    return {
      changeColor: false,
      changeLength: false
    }
  },
  computed: {
    compareClass() {
      return { changeColor: this.changeColor, changeLength: this.changeLength }
    }
  }
}
</script>

<style scoped lang="scss">
span {
  background-color: red;
  display: inline-block;
  padding: 10px;
  color: #fff;
  margin: 10px 0;
}
.changeColor span {
  background: blueviolet;
}

.changeLength span:after {
  content: '1111111111';
  margin-left: 20px;
}
</style>