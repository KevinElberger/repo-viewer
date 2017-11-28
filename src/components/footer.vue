<template>
  <div id="footer">
    <ul>
      <li><a href="https://vuejs.org" target="_blank">About Vue</a></li>
      <li><a href="https://github.com/KevinElberger/repo-viewer" target="_blank">Github</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'footerView',
  data() {
    return {};
  },
};
</script>

<style scoped>
#footer {
  bottom: 0;
  width: 100%;
  position: fixed;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>