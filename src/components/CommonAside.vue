<template>
  <el-menu
    class="el-menu-vertical-demo navContainer"
    :collapse="isCollapse"
    :unique-opened="true"
  >
    <h3>{{ isCollapse ? "后台" : "后台管理系统" }}</h3>
    <AsideItems :children="noChildren" />
    <el-submenu v-for="i of hasChildren" :key="i.path" :index="i.name">
      <template slot="title">
        <i class="item" :class="`el-icon-${i.meta.icon}`" />
        <span class="item" slot="title">{{ i.meta.title }}</span>
      </template>
      <el-menu-item-group>
        <AsideItems :children="i.children" />
      </el-menu-item-group>
    </el-submenu>
  </el-menu>
</template>


<script>
import AsideItems from "./AsideItems.vue";
export default {
  name: "CommonAside",
  components: {
    AsideItems,
  },
  data() {
    return {
      menuItems: this.$store.state.routes,
    };
  },
  computed: {
    noChildren() {
      return this.menuItems.filter((v) => !v.children);
    },
    hasChildren() {
      return this.menuItems.filter((v) => v.children);
    },
    isCollapse() {
      return this.$store.state.asideTrigger.isCollapse;
    },
  },
};
</script>


<style>
.el-menu > h3 {
  font-size: 1rem;
  line-height: 4rem;
}
.el-menu-item i {
  margin-right: 2rem;
}

.el-menu.navContainer {
  width: auto;
}
.el-menu .item {
  font-size: 0.8rem;
}
i {
  margin-right: 5px;
}
</style>