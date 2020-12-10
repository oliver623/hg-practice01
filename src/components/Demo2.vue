<template>
  <div class="Demo2">
    <el-button type="primary" @click.once="add(1)">点我加1</el-button>
    <el-button type="primary" @click="subtract(1)">点我减1</el-button>
    <el-button type="primary" @dblclick.native="add(10)">点我加10</el-button>
    <el-button type="primary" @dblclick.native="subtract(10)">点我减10</el-button>
    <span>{{time}} Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quod.</span>

    <!-- mousemove event -->
    <div id="canvas" @mousemove="updateXY">{{ x }} , {{ y }}</div>
    <div>
      <a @click.prevent="handleClick" href="http://www.baidu.com">baidu</a>
    </div>

    <div>
      <h1>EVENT</h1>
      <label for>姓名</label>
      <input type="text" @keydown.enter="logName" />
    </div>
    <label for>年龄</label>
    <input type="text" @keyup.alt.enter="logAge" /></div>
  </div>
</template>

<script>
export default {
  name: 'Demo2',
  data() {
    return {
      time: 0,
      x: 0,
      y: 0
    }
  },
  methods: {
    add(increase) {
      this.time += increase
    },
    subtract(decrease) {
      this.time -= decrease
    },
    updateXY(event) {
      console.log(event)
      this.x = event.offsetX
      this.y = event.offsetY
    },
    handleClick() {
      alert('hello')
    },
    logName() {
      console.log('正在输入姓名...')
    },
    logAge() {
      console.log('正在输入年龄...')
    }
  }
}
</script>

<style scoped lang="scss">
#canvas {
  width: 600px;
  padding: 200px 20px;
  text-align: center;
  border: 1px solid black;
}
</style>