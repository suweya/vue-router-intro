<template>
  <div class="post">
    <h1>导航完成后获取数据</h1>
    <div class="loading" v-if="loading">
      Loading...
    </div>

    <div v-if="error" class="error">
      {{ error }}
    </div>

    <div v-if="post" class="content">
      <h2>{{ post.title }}</h2>
      <p>{{ post.body }}</p>
    </div>

    <h1>在导航完成前获取数据</h1>
    <router-link :to="{name: 'FetchingData', params: {id: 123}}">在导航完成前获取数据</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      post: null,
      error: null
    }
  },
  created() {
    // 组件创建完后获取数据，
    // 此时 data 已经被 observed 了
    this.fetchData()
  },
  watch: {
    // 如果路由有变化，会再次执行该方法
    $route: 'fetchData'
  },
  methods: {
    fetchData() {
      this.error = this.post = null
      this.loading = true
      // replace getPost with your data fetching util / API wrapper
      this.getPost(this.$route.params.id, (err, post) => {
        this.loading = false
        if (err) {
          this.error = err.toString()
        } else {
          this.post = post
        }
      })
    },
    getPost(id, callback) {
      setTimeout(() => {
        callback(null, {title: `title-${id}`, body: `body - ${id}`})
      }, 3000)
    }
  },
  beforeRouteLeave(to, from, next) {
    this.post = null
    this.error = null
    this.loading = true
    console.log('before route leave')
    next()
  }
}
</script>
