export default {
    serverResponseError(state) {
        return state.serverResponseError;
    },
    user(state) {
        return state.user;
    },
    isAuthenticated(state) {
        return !!state.user.token;
    },
    isSending(state) {
        return state.isSending;
    },
};
