import Vue from "vue";
import VueRouter from "vue-router";
import AuthRoutes from "./auth";
import AssignmentsRoutes from "./assignments";

Vue.use(VueRouter);

const router = new VueRouter({
    mode: "history",
    base: process.env.BASE_URL,
    routes: [
        AuthRoutes.LoginRoute,
        AuthRoutes.RegisterRoute,
        AssignmentsRoutes.AssignmentsRoute,
        AssignmentsRoutes.AssignmentRoute,
    ],
});

export default router;
