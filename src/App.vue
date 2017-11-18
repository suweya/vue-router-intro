<template>
  <el-container>
    <el-header class="app-header">
      <el-menu :default-active="activeIndex" class="app-menu" mode="horizontal" @select="handleSelect" active-text-color="#409EFF">
        <li class="logo">Router</li>
        <el-submenu index="basic">
          <template slot="title">基础</template>
          <el-menu-item index="basic-install">开始</el-menu-item>
          <el-menu-item index="basic-install">开始</el-menu-item>
          <el-menu-item index="basic-install">开始</el-menu-item>
          <el-menu-item index="basic-install">开始</el-menu-item>
          <el-menu-item index="basic-install">开始</el-menu-item>
          <el-menu-item index="basic-install">开始</el-menu-item>
        </el-submenu>
        <el-submenu index="advance">
          <template slot="title">进阶</template>
          <el-menu-item index="2-1">选项1</el-menu-item>
          <el-menu-item index="2-2">选项2</el-menu-item>
          <el-menu-item index="2-3">选项3</el-menu-item>
        </el-submenu>
        <el-submenu index="api">
          <template slot="title">API文档</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
        </el-submenu>
      </el-menu>
    </el-header>
    <el-main>
      <router-view></router-view>
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
