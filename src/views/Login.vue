<template>
  <div class="Login">
    <h2>登录页</h2>
    <el-input v-model="name" placeholder="请输入名称"></el-input>
    <el-input v-model="pwd" placeholder="请输入密码"></el-input>
    <el-button type="primary" @click="LoginIn">登录</el-button></el-button>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      name: '',
      pwd: ''
    }
  },
  methods:{
    LoginIn(){
      setTimeout(() => {
        if(this.name&&this.pwd) {localStorage.setItem('user', JSON.stringify({name:this.name}))
        //重定向到   从 router.beforeEach 传过来的query参数
        this.$router.push({
          path: this.$route.query.redirect
        })
        }
        else this.$message.error('用户名或密码不能为空');
      }, 2000)
    }
  }
}
</script>

<style scoped lang="scss">

</style>