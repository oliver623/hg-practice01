<template>
  <div class="Page">
    <h3>Page页面</h3>
  </div>
</template>

<script>
export default {
  name: 'Page',
  data () {
    return {}
  },
  created(){
    console.log('this.$route====', this.$route)
    const {id, title} = this.$route.query
    console.log('id====', id)
    console.log('title====', title)
  }
}
</script>

<style scoped lang="scss">

</style>