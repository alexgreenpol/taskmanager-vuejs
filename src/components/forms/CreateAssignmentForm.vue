<template>
    <ValidationObserver v-slot="{ handleSubmit }">
        <form class="create-form" @submit.prevent="handleSubmit(submitForm)">
            <MyInput
                v-model="formData.title"
                :disabled="isSending"
                name="title"
                type="text"
                placeholder="Title..."
                veeValidateRules="required"
            />

            <MyInput
                v-model="formData.text"
                :disabled="isSending"
                name="text"
                type="text"
                placeholder="Your text..."
                veeValidateRules="required"
            />

            <FormButton :disabled="isSending" type="submit" text="Create" />
        </form>
    </ValidationObserver>
</template>

<script>
import { mapGetters } from 'vuex';
import MyInput from "@/components/inputs/MyInput.vue";
import FormButton from "@/components/buttons/FormButton.vue";

export default {
    name: "CreateAssignmentForm",
    components: {
        MyInput,
        FormButton,
    },
    data() {
        return {
            formData: {
                title: "",
                text: "",
            },
        };
    },
    computed: {
        ...mapGetters(["isSending"]),
    },
    methods: {
        submitForm() {
            this.$emit("createNewAssignment", this.formData);
        },
    },
};
</script>

<style lang="scss">
.form-button {
    margin-top: 10px;
}
</style>
