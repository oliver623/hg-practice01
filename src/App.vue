 <template>
  <div id="app">
    <!-- <h1>app</h1> -->
    <!-- 3调用组件 -->
    <!-- <hello-world :personInformation="personInformation" :str="str" @changeStr="handleChange"></hello-world> -->
    <!-- <user :sbqname="lh"></user> -->
    <!-- <form-helper>
      <div slot="title">
        <h2>这个是标题</h2>
      </div>
      <div slot="text">
        <span>{{text}}</span>
      </div>
    </form-helper>-->
    <!-- <scope-slot>
      <template #hg="{ row, form }">
        {{row}}--{{form}}
      </template>
    </scope-slot>-->
    <!-- <form-helper2></form-helper2> -->

    <!-- <keep-alive>
      <component :is="component"></component>
    </keep-alive>
    <el-button type="primary" @click="component = 'form-one'">切换到form-one</el-button>
    <el-button type="primary" @click="component = 'form-two'">切换到form-two</el-button> -->
    <!-- <form-one></form-one>
    <form-two></form-two>-->
    <!-- <Demo1></Demo1> -->
    <!-- <Demo2></Demo2> -->
    <!-- <Demo3></Demo3> -->
    <!-- <Demo4></Demo4> -->
    <!-- <Demo5></Demo5> -->
    <!-- <Demo6></Demo6> -->
    <!-- <Demo7></Demo7> -->
    <!-- <Demo8></Demo8> -->
    <!-- <Demo9 ref="demo9" a="111111" b="222222" @c="333333"></Demo9>
    <button @click="handleFocus">点我</button> -->
    <!-- <Demo10></Demo10> -->
    <!-- <Demo11></Demo11> -->
    <!-- <Demo12></Demo12> -->
    <!-- <Demo13></Demo13> -->

    
    <div class="router">
    <!-- <router-link to="/">首页 | </router-link>
    <router-link to="/about">关于 | </router-link> -->
      <router-link :to="{name: 'index'}">首页 | </router-link>
      <router-link :to="{name: 'about'}">关于 | </router-link>
      <router-link :to="{name: 'user', params: {id: 1}}">用户1 | </router-link>
      <router-link :to="{name: 'user', params: {id: 2}}">用户2 | </router-link>
      <router-link to="/user-admin">用户-其他 | </router-link> o'}}">Page页面 | </router-lin 
      <router-link :to="{path: '/user/1/posts'}">posts | </router-link>
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
// 1引入组件
import helloWorld from '../src/components/HelloWorld'
import user from './components/User'
import formHelper from './components/FormHelper'
export default {
  name: 'app',
  components: {
    // 2注册组件
    helloWorld,
    user,
    formHelper,
    ScopeSlot: () => import('./components/ScopeSlot'),
    formHelper2: () => import('./components/FormHelper2'),
    FormOne: () => import('./components/FormOne'),
    FormTwo: () => import('./components/FormTwo'),
    Demo1: () => import('./components/Demo1'),
    Demo2: () => import('./components/Demo2'),
    Demo3: () => import('./components/Demo3'),
    Demo4: () => import('./components/Demo4'),
    Demo5: () => import('./components/Demo5'),
    Demo6: () => import('./components/Demo6'),
    Demo7: () => import('./components/Demo7'),
    Demo8: () => import('./components/Demo8'),
    Demo9: () => import('./components/Demo9'),
    Demo10: () => import('./components/Demo10'),
    Demo11: () => import('./components/Demo11'),
    Demo12: () => import('./components/Demo12'),
    Demo13: () => import('./components/Demo13'),
  },
  data() {
    return {
      lh: '小花花哦',
      personInformation: [
        { name: 'huahua', age: '12', money: 'youqian', boy: 'shi', hobby: 'football' },
        { name: 'huahua', age: '12', money: 'youqian', boy: 'shi', hobby: 'football' }
      ],
      str: 'hihihihihhiihhihihi',
      text: '这个是文本内容',
      component: 'formTwo'
    }
  },
  mounted(){
    // console.log('process.env.NODE_ENV====', process.env.NODE_ENV)
    // console.log('process.env.VUE_APP_MODE====', process.env.VUE_APP_MODE)
  },
  methods: {
    handleChange(str) {
      this.str = str
    },
    handleFocus(){
      this.$refs.demo9.handleClick()
      console.log('this.$refs.demo9====', this.$refs.demo9)
    }

  }
}
</script>

<style  lang="scss" scoped>
h1 {
  color: red;
}
h2 {
  background: lightcoral;
}
.router{
  text-align: center;
}
</style>
