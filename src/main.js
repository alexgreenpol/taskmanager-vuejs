import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import { initializePlugins } from "@/plugins/index";
import "@/assets/scss/styles.scss";

initializePlugins();

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    render: (h) => h(App),
}).$mount("#app");
