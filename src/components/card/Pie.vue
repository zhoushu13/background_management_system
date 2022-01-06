<template>
  <el-card style="height: 300px" shadow="hover">
    <div class="pie" ref="pie"></div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";
import { pie } from "../../api/data";
export default {
  name: "Pie",
  data() {
    return {
      echartsData: {
        legend: { textStyle: { color: "#333" } },
        grid: { left: "20%" },
        tooltips: { trigger: "axis" },
        series: {
          type: "pie",
          data: [],
          emphasis: {
            label: {
              show: true,
            },
          },
          label: {
            show: false,
          },
        },
        color: this.$store.state.color,
      },
    };
  },
  methods: {
    getData() {
      pie().then((res) => {
        res.forEach((v) => {
          this.echartsData.series.data.push({
            name: v.name,
            value: v.value,
          });
        });

        const myEchartsOrder = echarts.init(this.$refs.pie);
        myEchartsOrder.setOption(this.echartsData);
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.pie {
  height: 240px;
}
</style>