const LoginPage = () => import("@/views/auth/LoginPage.vue");

export const LoginRoute = {
    name: "login",
    path: "/login",
    component: LoginPage,
};
