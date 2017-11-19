<template>
  <div>
    <h1>命名视图</h1>
    <el-row>
      <el-col :span="12">
        <router-view class="view one"></router-view>
      </el-col>
      <el-col :span="12">
        <router-view class="view two" name="a"></router-view>
      </el-col>
    </el-row>
    <el-row>
      <router-view class="view three" name="b"></router-view>
    </el-row>
  </div>
</template>

<style scoped>
  .view {
    border: 1px solid rgb(255, 160, 122);
    border-radius: 5px;
    padding: 5px;
  }

  .one, .two {
    height: 300px;
  }

  .two {
    margin-left: 10px;
  }

  .one {
    margin-right: 10px;
  }

  .three {
    height: 40px;
    margin-top: 5px;
  }
</style>