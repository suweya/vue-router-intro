<template>
  <div>
    <h1>命名路由</h1>
    通过此方式访问
    <router-link :to="{ name: 'named', params: { id: 789 }}">User</router-link>
  </div>
</template>
