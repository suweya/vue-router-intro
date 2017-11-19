<template>
  <div>
    <h1>动态路由匹配</h1>
    <p>一个『路径参数』使用冒号 : 标记。当匹配到一个路由时，参数值会被设置到 this.$route.params，可以在每个组件内使用</p>
    <p>$route.params.id = {{ $route.params.id }}</p>
    <hr>
    <h2>更多模式</h2>
    <router-link to="/post/123/comment/456">$route.params</router-link>
    <router-link to="/post/098/comment/789?vname=suweya">$route.query</router-link>
    <h2>响应路由的变化</h2>
    <router-link to="/matching/XXX">复用组件引起的路由变化</router-link>
  </div>
</template>

<script>
export default {
  name: 'Matching',
  watch: {
    '$route'(to, from) {
      console.log('watch $route change to from', to, from)
    }
  },
  beforeRouteUpdate(to, from, next) {
    console.log('before route update to from ', to, from)
    next()
  },
  beforeRouteEnter(to, from, next) {
    console.log('before route enter')
    next()
  },
  beforeRouteLeave(to, from, next) {
    console.log('before route leave')
    next()
  }
}
</script>
