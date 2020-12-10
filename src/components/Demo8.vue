<template>
  <div class="Demo8">
    <span class="tag" :class="{chooseo: choose === 1 }" @click="choose = 1">tag1</span>
    <span class="tag" :class="{chooseo: choose === 2 }" @click="choose = 2">tag2</span>
    <span class="tag" :class="{chooseo: choose === 3 }" @click="choose = 3">tag3</span>
  </div>
</template>

<script>
export default {
  name: 'Demo8',
  data() {
    return {
      choose: 1
    }
  }
}
</script>

<style scoped lang="scss">
.tag {
  border: 2px solid transparent;
  background: rgb(125, 129, 136);
  padding: 0 10px;

  &.chooseo {
    background: #fb3;
  }
}
</style>