import Vue from "vue";
import Vuex from "vuex";
import auth from "@/store/modules/auth";
import assignments from "@/store/modules/assignments";
import filter from "@/store/modules/filter";

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        auth,
        assignments,
        filter,
    },
});
