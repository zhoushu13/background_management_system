<template>
  <el-card
    shadow="hover"
    style="height: 450px"
    :body-style="{ padding: '1rem' }"
  >
    <h4>{{ title }}</h4>
    <Echarts :options="echartsData" width="800px" height="400px"></Echarts>
  </el-card>
</template>

<script>
import Echarts from "src/components/base/Echarts";
import { chart } from "src/api/data";
export default {
  name: "Chart",
  components: { Echarts },
  data() {
    return {
      title: "近7天销量",
      echartsData: {
        series: [],
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
      });
    },
  },
  beforeMount() {
    this.getData();
  },
};
</script>

<style scoped>
h4 {
  font-size: 1rem;
  padding-bottom: 1rem;
}
</style>
