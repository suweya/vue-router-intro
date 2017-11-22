<template>
  <div>
    <h1>嵌套路由</h1>
    <p>用户名：<span>{{ $route.params.uname }}</span></p>
    <el-button :type="leftType" @click="goto('profile')">Profile</el-button>
    <el-button :type="rightType" @click="goto('posts')">Posts</el-button>
    
    <router-view class="content">
    </router-view>
  </div>
</template>

<script>
export default {
  data() {
    return {
      leftType: '',
      rightType: ''
    }
  },
  methods: {
    goto(tag) {
      if (tag === 'posts') {
        this.rightType = 'primary'
        this.leftType = ''
      } else {
        this.rightType = ''
        this.leftType = 'primary'
      }
      const uname = this.$route.params.uname
      this.$router.push(`/router/nested/${uname}/${tag}`, function() {
        console.log('route push onComplete')
      }, function() {
        console.log('route push onAbort')
      })
    }
  }
}
</script>

<style scoped>
.content {
  border: 3px solid lightblue;
  min-height: 200px;
  padding: 20px;
  margin-top: 10px;
}
</style>
