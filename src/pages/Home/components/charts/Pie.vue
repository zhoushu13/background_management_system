<template>
  <el-card style="height: 300px" shadow="hover">
    <Echarts :options="echartsData" width="240px" height="300px"></Echarts>
  </el-card>
</template>
<script>
import Echarts from "src/components/base/Echarts";
import { pie } from "src/api/data";
export default {
  name: "Pie",
  components: { Echarts },
  data() {
    return {
      echartsData: {
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
      });
    },
  },
  beforeMount() {
    this.getData();
  },
};
</script>
