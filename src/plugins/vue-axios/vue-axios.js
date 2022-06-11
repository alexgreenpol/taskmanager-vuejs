import axios from "axios";
import VueAxios from "vue-axios";
import setTokenInterceptor from "./interceptors/set-token";

export default (Vue) => {
    axios.defaults.baseURL = process.env.VUE_APP_BASE_URL;
    setTokenInterceptor();

    Vue.use(VueAxios, axios);
};
