<template>
  <el-card style="height: 300px" shadow="hover">
    <div class="bar" ref="bar"></div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";
import { bar } from "../../api/data";
export default {
  name: "Bar",
  data() {
    return {
      echartsData: {
        legend: { textStyle: { color: "#333" } },
        grid: { left: "20%" },
        tooltips: { trigger: "axis" },
        series: [],
        color: this.$store.state.color,
        xAxis: {
          type: "category",
          data: [],
          axisLine: {
            lineStyle: {
              color: "#fff000",
            },
          },
          axisLabel: {
            interval: 0,
            color: "#333",
          },
        },
        yAxis: {
          type: "value",
          axisLine: {
            lineStyle: {
              color: "#000fff",
            },
          },
        },
      },
    };
  },
  methods: {
    getData() {
      bar().then((res) => {
        const keys = Object.keys(res[0]);
        this.echartsData.xAxis.data = Object.keys(res);
        keys.forEach((v) => {
          this.echartsData.series.push({
            name: v,
            data: res.map((o) => o[v]),
            type: "bar",
            emphasis: {
              label: {
                show: true,
              },
            },
            label: {
              show: false,
            },
          });
        });

        const myEchartsOrder = echarts.init(this.$refs.bar);
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
.bar {
  height: 260px;
}
</style>