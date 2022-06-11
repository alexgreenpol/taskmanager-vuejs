import MUTATIONS from "@/store/modules/assignments/mutation-types";

export default {
    [MUTATIONS.SET_SERVER_RESPONSE_ERROR](state, error) {
        state.serverResponseError = error;
    },
    [MUTATIONS.SET_ASSIGNMENTS](state, assignments) {
        state.assignments = assignments.sort(
            (firstItem, secondItem) => secondItem.created - firstItem.created
        );
    },
    [MUTATIONS.SET_ASSIGNMENT](state, assignment) {
        state.assignment = assignment;
    },
    [MUTATIONS.ADD_ASSIGNMENT](state, assignment) {
        state.assignments.unshift(assignment);
    },
    [MUTATIONS.EDIT_ASSIGNMENT](state, data) {
        state.assignments.forEach((assignment) => {
            if (assignment.id === data.id) {
                assignment.title = data.title;
                assignment.text = data.text;
            }
        });
    },
    [MUTATIONS.REMOVE_ASSIGNMENT](state, id) {
        state.assignments = state.assignments.filter(
            (assignment) => assignment.id !== id
        );
    },
    [MUTATIONS.TOGGLE_MODAL](state) {
        state.toggleModal = !state.toggleModal;
    },
};
