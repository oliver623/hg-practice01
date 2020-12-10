<template>
  <div class="Demo9">
    <input type="text" ref="focusMe"/>
    <button @click="handleClick">点老子</button>
  </div>
</template>

<script>
export default {
  name: 'Demo9',
  props:{
    a: String,
  },
  data () {
    return {}
  },
  methods:{
    handleClick(){
      this.$refs.focusMe.focus()
    }
  }
}
</script>

<style scoped lang="scss">

</style>