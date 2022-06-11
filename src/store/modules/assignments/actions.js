import API from "@/api/";
import MUTATIONS from "@/store/modules/assignments/mutation-types";

export default {
    async getAssignments({ commit }) {
        try {
            const { data } = await API.assignments.getAssignments();
            commit(MUTATIONS.SET_ASSIGNMENTS, data);
        } catch (err) {
            commit(
                MUTATIONS.SET_SERVER_RESPONSE_ERROR,
                err.response.data.message
            );
            throw err;
        }
    },
    async getAssignmentById({ commit }, id) {
        try {
            const { data } = await API.assignments.getAssignmentById(id);
            commit(MUTATIONS.SET_ASSIGNMENT, data);

            return data;
        } catch (err) {
            commit(
                MUTATIONS.SET_SERVER_RESPONSE_ERROR,
                err.response.data.message
            );
            throw err;
        }
    },
    async addAssignment({ commit }, { title, text }) {
        try {
            const { data } = await API.assignments.addAssignment({
                title,
                text,
            });
            commit(MUTATIONS.ADD_ASSIGNMENT, data);
        } catch (err) {
            commit(
                MUTATIONS.SET_SERVER_RESPONSE_ERROR,
                err.response.data.message
            );
            throw err;
        }
    },
    async editAssignment({ commit }, { id, title, text }) {
        try {
            await API.assignments.editAssignment({ id, title, text });
            commit(MUTATIONS.EDIT_ASSIGNMENT, { id, title, text });
        } catch (err) {
            commit(
                MUTATIONS.SET_SERVER_RESPONSE_ERROR,
                err.response.data.message
            );
            throw err;
        }
    },
    async removeAssignment({ commit }, id) {
        try {
            await API.assignments.removeAssignment(id);
            commit(MUTATIONS.REMOVE_ASSIGNMENT, id);
        } catch (err) {
            commit(
                MUTATIONS.SET_SERVER_RESPONSE_ERROR,
                err.response.data.message
            );
            throw err;
        }
    },
    toggleModal({ commit }) {
        commit(MUTATIONS.TOGGLE_MODAL);
    },
};
