<template>
  <header>
    <div class="l-content">
      <el-button
        @click="changeCollapse"
        plain
        icon="el-icon-menu"
        size="mini"
      ></el-button>
      <Bread />
    </div>
    <Userhead />
  </header>
</template>

<script>
import Bread from "./Bread.vue";
import Userhead from "./Userhead.vue";
export default {
  name: "CommonHeader",
  components: {
    Bread,
    Userhead,
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