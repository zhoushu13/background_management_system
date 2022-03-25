<template>
  <div class="echarts" :style="{ width, height }" ref="echarts"></div>
</template>
<script>
import * as echarts from "echarts";
export default {
  name: "Echarts",
  props: {
    width: {
      type: String,
      required: true,
    },
    height: {
      type: String,
      required: true,
    },
    options: {
      type: Object,
      required: true,
    },
    theme: {
      type: String,
      default: "",
    },
  },
  data() {
    return {
      echartsContainer: null,
      echartsData: {},
      defaults: {
        title: "",
        legend: { textStyle: { color: "#333" } },
        grid: { left: "20%" },
        tooltips: { trigger: "axis" },
        series: [],
        color: [
          "#409EFF",
          "#67C23A",
          "#E6A23C",
          "#F56C6C",
          "#909399",
          "#606266",
        ],
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
    init() {
      this.echartsContainer = echarts.init(this.$refs.echarts);
    },
    assign(options = this.options) {
      this.echartsData = Object.assign(this.defaults, options);
    },
    setData() {
      this.echartsContainer.setOption(this.echartsData, this.theme);
    },
  },
  watch: {
    options: {
      handler(newOptions) {
        this.assign(newOptions);
        this.setData();
      },
      deep: true,
    },
  },
  mounted() {
    this.init();
    this.assign();
    this.setData();
  },
};
</script>
<style scoped>
.echarts {
  width: 100%;
  height: 100%;
}
</style>
