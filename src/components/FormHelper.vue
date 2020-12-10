<template>
  <div class="FormHelper">
    <!-- lorem10 -->
   <slot name="title"></slot>
    <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, fuga.</h1>
    <slot name="text"></slot>
  </div>
</template>

<script>
export default {
  name: 'FormHelper',
  data () {
    return {}
  }
}
</script>

<style scoped lang="postcss">

</style>