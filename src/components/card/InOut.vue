<template>
  <div class="num">
    <el-card
      shadow="hover"
      v-for="(i, k) of countData"
      :key="i.id"
      :body-style="{ display: 'flex', padding: 0 }"
    >
      <i
        class="icon"
        :class="`el-icon-${i.icon}`"
        :style="{ background: color[k], color: '#fff' }"
      ></i>
      <div class="detail">
        <p class="txt">{{ i.title }}</p>
        <p class="number">￥{{ i.count }}</p>
      </div>
    </el-card>
  </div>
</template>

<script>
import { inOut } from "../../api/data";
export default {
  name: "InOut",
  data() {
    return {
      countData: [],
      color: this.$store.state.color,
    };
  },
  methods: {
    getData() {
      inOut().then((res) => (this.countData = res));
    },
  },
  mounted() {
    this.getData();
  },
};
</script>

<style scoped>
.icon {
  font-size: 4rem;
}

.detail,
.num {
  display: flex;
  flex-flow: row wrap;
  justify-content: space-around;
  align-items: center;
  flex: 1;
  font-size: 1rem;
}
.num {
  align-items: flex-start;
  justify-content: space-between;
}
.el-card {
  width: 30%;
  margin-bottom: 1rem;
}
</style>