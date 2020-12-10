<template>
  <div class="FormOne">
    <form-helper2>
      <template #form-header>
        <h1>FormOne</h1>
        <span>请输入</span>
        <el-input v-model="ddd"></el-input>
      </template>

      <template #form-fields>
        <span>请输入</span>
        <el-input v-model="qqq"></el-input>
      </template>
      <template #form-controls>
        <span>请输入</span>
        <el-input v-model="ggg"></el-input>
      </template>
    </form-helper2>
  </div>
</template>

<script>
export default {
  name: 'FormOne',
  components: {
    FormHelper2: () => import('./FormHelper2')
  },
  data() {
    return {
      ddd: '',
      qqq: '',
      ggg: ''
    }
  }
}
</script>

<style scoped lang="postcss">
</style>