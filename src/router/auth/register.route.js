const RegisterPage = () => import("@/views/auth/RegisterPage.vue");

export const RegisterRoute = {
    name: "register",
    path: "/register",
    component: RegisterPage,
};
