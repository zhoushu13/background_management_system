<template>
  <div>
    <el-menu-item
      class="item"
      v-for="i of children"
      :key="i.path"
      :index="i.name"
      :title="i.meta.title"
      @click="linkTo"
    >
      <i :class="`el-icon-${i.meta.icon}`" />
      <span slot="title">{{ i.meta.title }}</span>
    </el-menu-item>
  </div>
</template>

<script>
export default {
  name: "AsideItems",
  props: {
    children: {
      type: Array,
      require: true,
    },
  },
  methods: {
    linkTo(i) {
      this.$router.push({ name: i.index });
      this.$store.commit("selectMenu", i.index);
    },
  },
};
</script>
<style lang="css" scoped>
.el-menu-item i {
  margin: 0;
}
</style>