<template>
 <div class="User">
   <!-- <h1>user</h1> -->
   <ul>
     <li v-for="(user, index) in users" v-colorful:bbb.aaa.ccc="'hhh'" :key="index">{{user}}</li>
     <input v-model.trim="val" type="text" name="" id="">
     <span>{{sbqname}}</span>
   </ul>

 </div>
</template>

<script>
export default {
  name: 'User',
  // props: ['sbqname'],
  props:{
    sbqname: {
      type: String 
    }
  },
  directives: {
    colorful (el, binding, vnode) {
      el.style.color = '#' + Math.random().toString().slice(2, 8)
      // console.log(vnode.context.val = '123')
    }
  },
  data(){                                                                                    
    return{
      val: '',
      users: ['xff', 'lh', 'hc']
    }
  }
}
</script>

<style scoped>
h1{
  color: forestgreen;
}

li {
  font-weight: bold;
  font-size: 24px;
}
</style>