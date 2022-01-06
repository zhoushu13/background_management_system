<template>
  <el-card shadow="hover" style="margin-top: 1rem">
    <el-table
      highlight-current-row
      max-height="500px"
      stripe
      :data="listData"
      lazy
    >
      <el-table-column
        show-overflow-tooltip
        v-for="(v, k) in listLabel"
        :key="k"
        :prop="k"
        :label="v"
      ></el-table-column>
    </el-table>
  </el-card>
</template>

<script>
import { Table } from "../../api/data";
export default {
  name: "Table",
  data() {
    return {
      listLabel: {
        name: "品牌",
        value: "价格",
        today: "今日售出",
        week: "本周售出",
        month: "本月售出",
      },
      listData: [],
    };
  },
  methods: {
    getData() {
      Table().then((res) => {
        this.listData = res;
      });
    },
  },
  mounted() {
    this.getData();
  },
};
</script>