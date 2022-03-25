<template>
  <div id="app">
    <Layout />
  </div>
</template>

<script>
import "src/assets/css/reset.css";
import Layout from "src/pages/Layout";
export default {
  name: "App",
  components: {
    Layout,
  },
};
</script>

<style>
:root {
  overflow: hidden;
  font-size: 24px;
}
#app {
  width: 100vw;
  height: 100vh;
  display: flex;
  flex: 1;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
