<template>
  <div class="ScopeSlot">
    <slot name="hg" :row="row" form="form"></slot>
  </div>
</template>

<script>
export default {
  name: 'ScopeSlot',
  data () {
    return {
      row: 'hhhh'
    }
  }
}
</script>

<style scoped lang="scss">

</style>