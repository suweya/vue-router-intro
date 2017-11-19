<template>
  <div>
    <p>多参数模式(/post/:post_id/comment/:comment_id)</p>
    <p>$route.params.comment_id = {{ $route.params.comment_id }}</p>
    <p>$route.params.post_id = {{ $route.params.post_id }}</p>
    <p>$route.query.vname = {{ $route.query.vname }}</p>
    <p>$route.hash = {{ $route.hash }}</p>

    <p>post_id = {{ post_id }}</p>
    <p>comment_id = {{ comment_id }}</p>
  </div>
</template>

<script>
export default {
  props: ['comment_id', 'post_id']
}
</script>
