<template>
  <div id="app">
    <Manager />
  </div>
</template>

<script>
import "./assets/css/reset.css";
import Manager from "./components/Manager.vue";
export default {
  name: "App",
  components: {
    Manager,
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
