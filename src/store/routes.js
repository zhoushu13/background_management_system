import routes from "src/router/routes";
export default {
  getters: {
    routes() {
      let filters = routes.filter((v) => v.meta.nav);
      return filters.map((v) => {
        let res = {
          path: v.path,
          name: v.name,
          meta: {
            title: v.meta.title,
            icon: v.meta.icon,
          },
        };
        if (v.children && v.children.length) {
          let childrenFilters = v.children.filter((v) => v.meta.nav);
          let children = childrenFilters.map((c) => {
            return {
              path: c.path,
              name: c.name,
              meta: {
                title: c.meta.title,
                icon: c.meta.icon,
              },
            };
          });
          res.children = children;
        }
        return res;
      });
    },
  },
};
