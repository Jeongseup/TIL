import Playground from "./Playground";
Vue.component("playground", Playground);

const app = Vue.createApp({
    data() {
        return {
            message: "Using Single File Components",
        };
    },
});
