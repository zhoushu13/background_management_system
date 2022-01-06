<template>
  <el-breadcrumb separator="/">
    <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
    <el-breadcrumb-item
      style="cursor: pointer"
      :to="{ name: current.name }"
      v-if="current"
    >
      {{ current.label }}
    </el-breadcrumb-item>
  </el-breadcrumb>
</template>

<script>
import { mapState } from "vuex";

export default {
  name: "Bread",
  computed: {
    ...mapState({
      current: (state) => state.currentMenu,
    }),
  },
};
</script>

<style>
.el-breadcrumb .el-breadcrumb__item .el-breadcrumb__inner {
  color: #303133 !important;
  font-size: 0.8rem !important;
  font-weight: normal !important;
  cursor: pointer !important;
}
</style>