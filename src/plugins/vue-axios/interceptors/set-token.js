import axios from "axios";
import store from "@/store";

export default function setTokenInterceptor() {
    axios.interceptors.request.use((request) => {
        if (request.headers.Token) {
            request.headers.Token = store.getters.user.token;
        }

        return request;
    });
}
