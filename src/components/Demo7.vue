<template>
  <div class="Demo7">
    <span class="tag" :class="choose === 1 ? 'chooseo': ''" @click="choose = 1">tag1</span>
    <span class="tag" :class="choose === 2 ? 'chooseo': ''" @click="choose = 2">tag2</span>
    <span class="tag" :class="choose === 3 ? 'chooseo' : ''" @click="choose = 3">tag3</span>
  </div>
</template>

<script>
export default {
  name: 'Demo7',
  data() {
    return {
      choose: 1
    }
  }
}
</script>

<style scoped lang="scss">
.tag {
  border: 1px solid rgb(125, 129, 136);
  background: rgb(125, 129, 136);
  padding: 0 10px;

  &.chooseo {
    border: 1px solid #fb3;
    background: #fb3;
  }
}
</style>