<template>
    <ValidationObserver v-slot="{ handleSubmit }">
        <form class="login-form" @submit.prevent="handleSubmit(submitForm)">
            <MyInput
                v-model="formData.email"
                :disabled="isSending"
                name="email"
                type="email"
                placeholder="Email"
                veeValidateRules="required|email"
            />

            <MyInput
                v-model="formData.password"
                :disabled="isSending"
                name="password"
                type="password"
                placeholder="Password"
                veeValidateRules="required|min:8|max:32"
            />

            <FormButton :disabled="isSending" type="submit" text="Login" />
        </form>
    </ValidationObserver>
</template>

<script>
import { mapGetters } from "vuex";
import MyInput from "@/components/inputs/MyInput.vue";
import FormButton from "@/components/buttons/FormButton.vue";
import AssignmentsRoutes from "@/router/assignments/";

export default {
    name: "RegisterForm",
    components: {
        MyInput,
        FormButton,
    },
    data() {
        return {
            formData: {
                email: "",
                password: "",
            },
        };
    },
    computed: {
        ...mapGetters(["isSending"]),
    },
    methods: {
        async submitForm() {
            try {
                await this.$store.dispatch("login", this.formData);
                this.$router.push({
                    name: AssignmentsRoutes.AssignmentsRoute.name,
                });
            } catch (e) {
                console.error(e);
            }
        },
    },
};
</script>

<style lang="scss">
.form-button {
    margin-top: 10px;
}
</style>
