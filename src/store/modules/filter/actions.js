import MUTATIONS from "@/store/modules/filter/mutation-types";

export default {
    filterAssignments({ commit }, filterData) {
        commit(MUTATIONS.FILTER_ASSIGNMENTS, filterData);
    },
    removeFilteredAssignment({ commit }, id) {
        commit(MUTATIONS.REMOVE_FILTERED_ASSIGNMENT, id);
    },
};
