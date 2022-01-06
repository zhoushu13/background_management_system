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
        <CommonTag />
        <router-view />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import CommonAside from "./CommonAside.vue";
import CommonHeader from "./CommonHeader.vue";
import CommonTag from "./CommonTag.vue";
export default {
  name: "Manager",
  components: {
    CommonAside,
    CommonHeader,
    CommonTag,
  },
  computed: {
    isCollapse() {
      return this.$store.state.asideTrigger.isCollapse;
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