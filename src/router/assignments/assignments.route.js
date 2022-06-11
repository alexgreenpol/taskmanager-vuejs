const AssignmentsPage = () => import("@/views/assignments/AssignmentsPage.vue");

export const AssignmentsRoute = {
    name: "assignments",
    path: "/assignments",
    component: AssignmentsPage,
};
