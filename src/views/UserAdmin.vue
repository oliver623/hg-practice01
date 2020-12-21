<template>
  <div class="UserAdmin">
    <h2>UserAdmin页面</h2>
    <h4>{{$route.params.pathMatch}}</h4>
  </div>
</template>

<script>
export default {
  name: 'UserAdmin',
  data () {
    return {}
  },
  created(){
    console.log('this.$route====', this.$route)
  }
}
</script>

<style scoped lang="scss">

</style>