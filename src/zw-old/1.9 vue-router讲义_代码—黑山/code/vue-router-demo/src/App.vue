<template>
  <div id="app">
    <router-link to="/">首页</router-link>
    <router-link :to="{path: '/news'}" style="margin: 0 10px;">新闻页</router-link>
    <router-link to="/login">登录页</router-link>

    <router-view></router-view>
  </div>
</template>

<script>

export default {
  name: 'App',
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
#app a {
  margin: 0 10px;
}
</style>
