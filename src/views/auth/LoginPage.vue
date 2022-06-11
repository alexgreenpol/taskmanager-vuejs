<template>
    <div v-if="!isAuthenticated" class="login-page">
        <div class="login-page__form">
            <h2 class="login-page__title">Login</h2>
            <LoginForm />
            <ErrorBox v-if="serverResponseError" :error="serverResponseError" />
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import LoginForm from "@/components/forms/LoginForm.vue";
import ErrorBox from "@/components/alerts/ErrorBox.vue";
import AssignmentsRoutes from "@/router/assignments/";

export default {
    name: "LoginPage",
    components: {
        LoginForm,
        ErrorBox,
    },
    mounted() {
        if (this.isAuthenticated) {
            this.$router.push({
                name: AssignmentsRoutes.AssignmentsRoute.name,
            });
        }
    },
    beforeDestroy() {
        this.$store.dispatch("clearErrors");
    },
    computed: {
        ...mapGetters(["serverResponseError", "isAuthenticated"]),
    },
};
</script>

<style lang="scss" scoped>
.login-page {
    height: calc(100vh - 100px);
    background: url("../../assets/images/bg-space.jpg") no-repeat bottom left;
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    &__form {
        max-width: 400px;
        margin: 10px;
        background: $brandWhite;
        padding: 30px 30px;
    }

    &__title {
        margin-bottom: 10px;
    }

    & .error-box {
        margin-top: 20px;
    }
}
</style>
