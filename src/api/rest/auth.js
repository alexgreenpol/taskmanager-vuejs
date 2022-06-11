import makeRequest from "@/api/makeRequest";

export default {
    register({ email, password }) {
        return makeRequest({
            url: `/auth/signup`,
            method: "post",
            data: { email, password },
        });
    },
    login({ email, password }) {
        return makeRequest({
            url: `/auth/signin`,
            method: "post",
            data: { email, password },
        });
    },
    logout() {
        return makeRequest({
            url: `/auth/logout`,
            method: "post",
            headers: { Token: true },
        });
    },
};
