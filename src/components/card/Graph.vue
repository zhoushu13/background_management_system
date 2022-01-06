<template>
  <div class="graph">
    <Bar />
    <Pie />
  </div>
</template>

<script>
import Bar from "./Bar.vue";
import Pie from "./Pie.vue";

export default {
  name: "Graph",
  components: {
    Bar,
    Pie,
  },
  data() {
    return {};
  },
};
</script>

<style scoped>
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