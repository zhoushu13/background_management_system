<template>
  <header>
    <div class="l-content">
      <el-button
        @click="changeCollapse"
        plain
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <BaseBread />
    </div>
    <el-dropdown trigger="click">
      <el-button type="primary" style="background: transparent; border: none">
        <img width="40px" src="~src/assets/logo.png" />
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>个人中心</el-dropdown-item>
        <el-dropdown-item>退出</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </header>
</template>

<script>
import BaseBread from "src/components/base/BaseBread";
export default {
  name: "BaseHeader",
  components: {
    BaseBread,
  },
  methods: {
    changeCollapse() {
      this.$store.commit("change");
    },
  },
};
</script>

<style scoped>
header,
.l-content {
  display: flex;

  justify-content: space-between;
  align-items: center;
}
.l-content {
  height: 100%;
}
.l-content .el-button {
  margin-right: 1rem;
}
.l-content .el-button :first-child {
  margin: 0;
}
</style>
