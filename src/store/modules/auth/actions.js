import API from "@/api/";
import MUTATIONS from "@/store/modules/auth/mutation-types";

export default {
    async register({ commit }, { email, password }) {
        commit(MUTATIONS.TOGGLE_SENDING_MODE);

        try {
            await API.auth.register({ email, password });
        } catch (err) {
            commit(
                MUTATIONS.SET_SERVER_RESPONSE_ERROR,
                err.response.data.message
            );
            throw err;
        } finally {
            commit(MUTATIONS.TOGGLE_SENDING_MODE);
        }
    },
    async login({ commit }, { email, password }) {
        commit(MUTATIONS.TOGGLE_SENDING_MODE);
        try {
            const { data } = await API.auth.login({ email, password });
            localStorage.setItem(
                "user",
                JSON.stringify({ email, token: data.token })
            );
            commit(MUTATIONS.SET_USER, { email, token: data.token });
        } catch (err) {
            localStorage.removeItem("user");
            commit(
                MUTATIONS.SET_SERVER_RESPONSE_ERROR,
                err.response.data.message
            );
            throw err;
        } finally {
            commit(MUTATIONS.TOGGLE_SENDING_MODE);
        }
    },
    async logout({ commit }) {
        try {
            await API.auth.logout();
            localStorage.removeItem("user");
            commit(MUTATIONS.LOGOUT_USER);
        } catch (err) {
            commit(
                MUTATIONS.SET_SERVER_RESPONSE_ERROR,
                err.response.data.message
            );
        }
    },
    setUser({ commit }, user) {
        commit(MUTATIONS.SET_USER, user);
    },
    clearErrors({ commit }) {
        commit(MUTATIONS.CLEAR_SERVER_RESPONSE_ERROR);
    },
};
