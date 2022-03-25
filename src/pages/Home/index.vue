<template>
  <el-row class="home" :gutter="20">
    <el-col class="left" :span="8" style="margin-top: 0.5rem">
      <User />
      <Table />
    </el-col>
    <el-col class="right" :span="16" style="margin-top: 0.5rem">
      <InOut />
      <Chart />
      <div class="graph">
        <Bar />
        <Pie />
      </div>
    </el-col>
  </el-row>
</template>

<script>
import Bar from "./components/charts/Bar";
import Chart from "./components/charts/Chart";
import Pie from "./components/charts/Pie";
import User from "./components/display/User";
import InOut from "./components/display/InOut";
import Table from "./components/display/Table";

export default {
  components: {
    User,
    Table,
    InOut,
    Chart,
    Bar,
    Pie,
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
.graph {
  margin-top: 1rem;
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
}
.graph .el-card {
  width: 49%;
}
</style>
