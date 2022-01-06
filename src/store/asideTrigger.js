export default {
    state: {
        isCollapse: false,
    },
    mutations: {
        change(context) {
            context.isCollapse = !context.isCollapse;
        }
    }
}