<template>
  <el-card style="height: 300px" shadow="hover">
    <Echarts :options="echartsData" width="240px" height="300px"></Echarts>
  </el-card>
</template>

<script>
import Echarts from "src/components/base/Echarts";
import { bar } from "src/api/data";
export default {
  name: "Bar",
  components: { Echarts },
  data() {
    return {
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
      });
    },
  },
  beforeMount() {
    this.getData();
  },
};
</script>
