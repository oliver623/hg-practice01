<template>
  <div class="Demo11">
    <!-- <ul>
      <li v-for="(an, index) in animals">{{index}} - {{an}}</li>
    </ul>-->
    <!-- <ul>
      <li v-for="(user, index) in users">
        {{index}}-姓名：{{user.name}},年龄：{{user.age}},爱好：{{user.hobby}}
      </li>
    </ul>-->
    <!-- <template v-for="(user, index) in users">
      <h3>序号：{{index}}</h3>
      <p>姓名：{{user.name}}</p>
      <p>年龄：{{user.age}}</p>
      <p>爱好：{{user.hobby}}</p>
    </template> -->
    <template v-for="(user, index) in users">
      <div v-for="(val, key, idx) in user">
        <p>{{idx}}-{{key}}-{{val}}</p>
      </div>
    </template>
  </div>
</template>

<script>
export default {
  name: 'Demo11',
  data() {
    return {
      animals: ['佩奇', '奥特曼', '小怪兽', '小羊肖恩', '乔治'],
      users: [
        { name: '佩奇', age: 5, hobby: 'water' },
        { name: '奥特曼', age: 12, hobby: '小怪兽' },
        { name: '小怪兽', age: 6, hobby: '搞破坏' },
        { name: '小羊肖恩', age: 5, hobby: 'cao' },
        { name: '乔治', age: 5, hobby: 'ball' }
      ]
    }
  }
}
</script>

<style scoped lang="scss">
</style>