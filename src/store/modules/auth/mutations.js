import MUTATIONS from "@/store/modules/auth/mutation-types";

export default {
    [MUTATIONS.SET_SERVER_RESPONSE_ERROR](state, error) {
        state.serverResponseError = error;
    },
    [MUTATIONS.CLEAR_SERVER_RESPONSE_ERROR](state) {
        state.serverResponseError = null;
    },
    [MUTATIONS.SET_USER](state, user) {
        state.user = user;
    },
    [MUTATIONS.LOGOUT_USER](state) {
        state.user = {
            email: null,
            token: null,
        };
    },
    [MUTATIONS.TOGGLE_SENDING_MODE](state) {
        state.isSending = !state.isSending;
    },
};
