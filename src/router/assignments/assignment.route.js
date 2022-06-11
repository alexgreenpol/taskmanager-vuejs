const AssignmentPage = () => import("@/views/assignments/AssignmentPage.vue");

export const AssignmentRoute = {
    name: "assignment",
    path: "/assignments/:id",
    component: AssignmentPage,
};
