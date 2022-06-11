<template>
    <ValidationObserver v-slot="{ handleSubmit }">
        <form class="register-form" @submit.prevent="handleSubmit(submitForm)">
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
                vid="password"
                veeValidateRules="required|min:8|max:32"
            />

            <MyInput
                v-model="formData.confirmPassword"
                :disabled="isSending"
                name="confirm password"
                type="password"
                placeholder="Confirm password"
                veeValidateRules="required|confirmed:password"
            />

            <FormButton :disabled="isSending" type="submit" text="Register" />
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
                confirmPassword: "",
            },
        };
    },
    computed: {
        ...mapGetters(["isSending"]),
    },
    methods: {
        async submitForm() {
            try {
                await this.$store.dispatch("register", this.formData);
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
