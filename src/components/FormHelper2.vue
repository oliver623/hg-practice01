<template>
  <div class="FormHelper2">
    <h1>填充以下表单内容</h1>
    <form>
      <div id="form-herder">
        <slot name="form-header"></slot>
      </div>
      <div id="form-fields">
        <slot name="form-fields"></slot>
      </div>
      <div id="form-controls">
        <slot name="form-controls"></slot>
      </div>
      <div id="useFul-links">
        <ul>
          <li><a href="#"> link 1</a></li>
          <li><a href="#"> link 2</a></li>
          <li><a href="#"> link 3</a></li>
          <li><a href="#"> link 4</a></li>
        </ul>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'FormHelper2',
  data () {
    return {}
  }
}
</script>

<style scoped lang="postcss">
h1{
  text-align: center;
}
form{
  width: 100%;
  min-width: 960px;
  margin: 0 auto;
}
#useFul-links ul {
  padding: 0;
}
#useFul-links li {
  display: inline-block;
  margin-right: 10px;
}
form > div{
  padding: 20px;
  background: #eee;
  margin: 20px 0;
}
#form-header{
  background: #ddd;
  border: 1px solid #bbb;
} 
</style>