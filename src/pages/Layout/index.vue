<template>
  <el-container>
    <el-aside :width="isCollapse ? '6rem' : '12rem'">
      <CommonAside />
    </el-aside>

    <el-container>
      <el-header height="auto">
        <CommonHeader />
      </el-header>
      <el-main>
        <BaseTag />
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "./components/CommonAside";
import CommonHeader from "./components/CommonHeader";
import BaseTag from "src/components/base/BaseTag";
export default {
  name: "Layout",
  components: {
    CommonAside,
    CommonHeader,
    BaseTag,
  },
  computed: {
    isCollapse() {
      return this.$store.state.isCollapse.isCollapse;
    },
  },
};
</script>

<style scoped>
.el-header {
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: stretch;
  background-color: #e6ffda;
  color: #333;
  text-align: center;
}

.el-aside {
  color: #333;
  text-align: center;
  line-height: 1;
  padding: 0 1rem;
  transition: all 1s;
  overflow-x: hidden;
}
.el-aside * {
  border: none;
}

.el-main {
  background-color: #e9eef3;
  color: #333;
  text-align: center;
  line-height: 1;
}

body > .el-container {
  margin-bottom: 40px;
}
</style>
