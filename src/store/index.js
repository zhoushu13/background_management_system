import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import routes from "./routes";
import isCollapse from "./isCollapse";
import user from "./user";
import tags from "./tags";
export default new Vuex.Store({
  modules: {
    routes,
    isCollapse,
    user,
    tags,
  },
});
