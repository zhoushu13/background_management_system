<template>
  <el-card
    shadow="hover"
    style="height: 450px"
    :body-style="{ padding: '1rem' }"
  >
    <h4>{{ title }}</h4>
    <div class="echarts" ref="echarts"></div>
  </el-card>
</template>

<script>
import * as echarts from "echarts";
import { chart } from "../../api/data";
export default {
  name: "Chart",
  data() {
    return {
      title: "近7天销量",
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
      chart().then((res) => {
        this.echartsData.xAxis.data = res.date;
        res.data.forEach((e) => {
          this.echartsData.series.push({
            name: e[0].name,
            data: e.map((v) => v.value),
            type: "line",
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
        const myEchartsOrder = echarts.init(this.$refs.echarts);
        myEchartsOrder.setOption(this.echartsData);
      });
    },
  },
  mounted() {
    this.getData();
    this.$store.state.chart = this.echartsData;
  },
};
</script>

<style scoped>
.echarts {
  height: 400px;
}
h4 {
  font-size: 1rem;
  padding-bottom: 1rem;
}
</style>