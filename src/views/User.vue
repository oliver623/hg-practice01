<template>
  <div class="User">
    <h3>用户页面{{$route.params.id}}</h3>
 <h3> {{id}}</h3>
 <!-- <h3> {{title}}</h3> -->
  </div>
</template>

<script>
export default {
  name: 'User',
  data() {
    return {}
  },
  props: ['id', 'title'],

  created() {
    console.log('id====', this.id)
    console.log('this.$route.params====', this.$route.params)
  },
  watch: {
    $route() {
      // console.log('this.$route.params====', this.$route.params.id)
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('this.$route.params====', this.$route.params.id)
    next()
  }
}
</script>

<style scoped lang="scss">
</style>