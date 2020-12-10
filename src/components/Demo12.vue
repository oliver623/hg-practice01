<template>
  <div class="Demo12">
    <el-checkbox :value="val" true-label="1" false-label="0" @change="val = $event">333</el-checkbox>
    <!-- <el-checkbox v-model="val" true-label="1" false-label="0">333</el-checkbox> -->
  </div>
</template>

<script>
export default {
  name: 'Demo12',
  data () {
    return {
      val: '0'
    }
  }
}
</script>

<style scoped lang="postcss">

</style>