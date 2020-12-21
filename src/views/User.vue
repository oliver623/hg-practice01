<template>
  <div class="User">
    <h3>用户页面{{$route.params.id}}</h3>
 <h3>id: {{id}}</h3>
 <h3>title: {{title}}</h3>
 <button @click="goHome">首页</button>
 <button @click="goRefresh">刷新</button>
 <button @click="goForward">前进</button>
 <button @click="goBack">后退</button>
 <router-view></router-view>
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
    console.log('this.$router====', this.$router)
    console.log('this.$route.params====', this.$route)
  },
  watch: {
    $route() {
      // console.log('this.$route.params====', this.$route.params.id)
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('this.$route.params====', this.$route.params.id)
    next()
  },
  methods:{
    goHome(){
      // this.$router.push('/')
      // this.$router.push({
      //   name: 'user',
      //   params:{id:2},
      //   query:{title:'cdffv'}
      // })
      // this.$router.push({
      //   path: '/user',
      //   params: {id:2}
      // })
      this.$router.push({
        path: '/', 
      })
    },
    goRefresh(){
      this.$router.go(0)
    },
    goBack(){
      this.$router.go(-1)
    },
    goForward(){
      this.$router.go(1)
    },
  }
}
</script>

<style scoped lang="scss">
</style>