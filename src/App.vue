<template>
  <el-container>
    <el-header class="app-header">
      <el-menu :default-active="activeIndex" class="app-menu" mode="horizontal" @select="handleSelect" active-text-color="#409EFF">
        <li class="logo">Router</li>
        <el-submenu index="basic">
          <template slot="title">基础</template>
          <el-menu-item index="basic-matching">动态路由匹配</el-menu-item>
          <el-menu-item index="basic-nested">嵌套路由</el-menu-item>
          <el-menu-item index="basic-named">命名路由</el-menu-item>
          <el-menu-item index="basic-1">重定向和别名</el-menu-item>
          <el-menu-item index="basic-2">向路由组件传递props</el-menu-item>
          <el-menu-item index="basic-3">HTML5 History模式</el-menu-item>
        </el-submenu>
        <el-submenu index="advance">
          <template slot="title">进阶</template>
          <el-menu-item index="2-1">导航守卫</el-menu-item>
          <el-menu-item index="2-2">路由元信息</el-menu-item>
          <el-menu-item index="2-3">过度动效</el-menu-item>
          <el-menu-item index="2-3">数据获取</el-menu-item>
          <el-menu-item index="2-3">滚动行为</el-menu-item>
          <el-menu-item index="2-3">懒加载</el-menu-item>
        </el-submenu>
        <el-submenu index="api">
          <template slot="title">API文档</template>
          <el-menu-item index="3-1">选项1</el-menu-item>
        </el-submenu>
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
          case 'basic-matching':
            this.$router.push('/matching/111')
            break
          case 'basic-nested':
            this.$router.push('/nested/suweya')
            break
          case 'basic-named':
            this.$router.push({
              name: 'named',
              params: { id: 123 }
            })
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