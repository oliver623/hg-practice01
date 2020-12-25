<template>
  <div class="Eaditor">
    <h2>编辑</h2>
    <textarea v-model="text" name="" id="" cols="30" rows="10" @keyup.enter="handleSubmit"></textarea>
    <ul v-for="(item, index) in list" :key="index">
      <li> {{item.content}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'Eaditor',
  data () {
    return {
      text: '',
      list: []
    }
  },
  methods: {
    handleSubmit () {
      this.list.push({content: this.text})
      this.text = ''
    }
  },
  
  beforeRouteLeave(to, from, next){
    if(this.text){
      alert('请确保保存信息后再离开')
      next(false)
    }else{
     next()
    }
  }
}
</script>

<style scoped lang="scss">

</style>