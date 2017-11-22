<template>
  <div>
    <ul>
      <li>
        <router-link to="/router/matching/111">动态路由匹配</router-link>
      </li>
      <li>
        <router-link to="/router/nested/suweya">嵌套路由</router-link>
      </li>
      <li>
        <router-link :to="{ name: 'named', params: { id: 123 }}">命名路由</router-link>
      </li>
      <li>重定向和别名</li>
      <li>向路由组件传递props</li>
      <li>HTML5 History模式</li>
      <li>导航守卫</li>
      <li>路由元信息</li>
      <li>过度动效</li>
      <li>
        <router-link :to="{ name: 'Fetching', params: { id: 123 }}">数据获取</router-link>
      </li>
      <li>滚动行为</li>
      <li>懒加载</li>
      <li>API文档</li>
    </ul>
    <router-view></router-view>
  </div>
</template>
