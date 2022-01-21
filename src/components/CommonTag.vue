<template>
  <div class="tag">
    <el-tag
      v-for="(t, i) of tags"
      :key="t.name"
      size="medium"
      type="warning"
      :closable="t.closable"
      @click="jump(t)"
      :effect="$route.name === t.name ? 'dark' : 'light'"
      @close="close(t, i)"
    >
      {{ t.label }}
    </el-tag>
  </div>
</template>

<script>
import { mapState, mapMutations } from "vuex";
export default {
  name: "Tag",
  computed: {
    ...mapState({ tags: (state) => state.tags.tabList }),
  },
  methods: {
    ...mapMutations({
      closeTag: "closeTag",
      bread: "selectMenu",
    }),
    jump(t) {
      this.$router.push({ name: t.name });
      this.bread(t.name);
      console.log(this.$store);
    },
    close(t, i) {
      let len = this.tags.length - 1;
      this.closeTag(t.name);

      if (t.name !== this.$route.name) {
        return;
      }
      if (i === len) {
        this.$router.push({ name: this.tags[i - 1].name });
      } else {
        this.$router.push({ name: this.tags[i].name });
      }
    },
  },
};
</script>

<style scoped>
.tag {
  display: flex;
  justify-content: flex-start;
  font-size: 0.5rem;
  cursor: pointer;
}
.tag * {
  display: inline-block;
  margin-right: 1rem;
  font-size: 0.6rem;
}
</style>