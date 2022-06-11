import Vue from "vue";

import VueAxiosInit from "./vue-axios/vue-axios";
import VeeValidateInit from "./vee-validate/vee-validate";

export function initializePlugins() {
    VueAxiosInit(Vue);
    VeeValidateInit(Vue);
}
