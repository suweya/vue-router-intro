<template>
  <el-container>
    <el-header class="app-header">
      <el-menu :default-active="activeIndex" class="app-menu" mode="horizontal" @select="handleSelect" active-text-color="#409EFF">
        <li class="logo">Sample</li>
        <el-menu-item index="router">Router</el-menu-item>
        <el-menu-item index="video">Video</el-menu-item>
      </el-menu>
    </el-header>
    <el-main>
      <transition>
        <router-view></router-view>
      </transition>
    </el-main>
  </el-container>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {
      activeIndex: 'basic-install'
    }
  },
  methods: {
    handleSelect(key, keyPath) {
      console.log(key, keyPath)
      switch (key) {
        case 'router':
          this.$router.push('/router')
          break
      }
    }
  }
}
</script>

<style scoped>
.logo {
  float: left;
  height: 60px;
  line-height: 60px;
  padding: 0 20px;
}

.logo:focus {
  outline: none;
}

.app-header {
  padding: 0;
}

.app-menu {
  padding: 0 20px;
}
</style>