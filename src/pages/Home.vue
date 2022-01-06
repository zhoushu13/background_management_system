<template>
  <el-row class="home" :gutter="20">
    <el-col class="left" :span="8" style="margin-top: 0.5rem">
      <User />
      <Table />
    </el-col>
    <el-col class="right" :span="16" style="margin-top: 0.5rem">
      <InOut />
      <Chart />
      <Graph />
    </el-col>
  </el-row>
</template>

<script>
import User from "../components/card/User";
import Table from "../components/card/Table";
import InOut from "../components/card/InOut";
import Chart from "../components/card/Chart";
import Graph from "../components/card/Graph";
export default {
  components: {
    User,
    Table,
    InOut,
    Chart,
    Graph,
  },
};
</script>

<style scoped>
.home {
  min-width: 600px;
}
@media screen and (max-width: 1200px) {
  .home .left {
    display: none;
  }
  .home .right {
    width: 100%;
  }
}
</style>