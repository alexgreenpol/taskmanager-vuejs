import makeRequest from "../makeRequest";

export default {
    getAssignments() {
        return makeRequest({
            url: `/task`,
            method: "get",
        });
    },
    getAssignmentById(id) {
        return makeRequest({
            url: `/task/${id}`,
            method: "get",
        });
    },
    addAssignment({ title, text }) {
        return makeRequest({
            url: `/task`,
            method: "post",
            data: { title, text },
            headers: { Token: true },
        });
    },
    editAssignment({ id, title, text }) {
        return makeRequest({
            url: `/task/${id}`,
            method: "put",
            data: { title, text },
            headers: { Token: true },
        });
    },
    removeAssignment(id) {
        return makeRequest({
            url: `/task/${id}`,
            method: "delete",
            headers: { Token: true },
        });
    },
};
