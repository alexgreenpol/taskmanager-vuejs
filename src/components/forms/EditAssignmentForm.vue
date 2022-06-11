<template>
    <ValidationObserver v-slot="{ handleSubmit }">
        <form class="edit-form" @submit.prevent="handleSubmit(submitForm)">
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

            <FormButton :disabled="isSending" type="submit" text="Edit" />
        </form>
    </ValidationObserver>
</template>

<script>
import { mapGetters } from "vuex";
import MyInput from "@/components/inputs/MyInput.vue";
import FormButton from "@/components/buttons/FormButton.vue";

export default {
    name: "EditAssignmentForm",
    components: {
        MyInput,
        FormButton,
    },
    props: {
        id: {
            type: String,
            required: true,
        },
    },
    data() {
        return {
            formData: {
                title: "",
                text: "",
            },
        };
    },
    async mounted() {
        try {
            const currentAssignment = await this.$store.dispatch(
                "getAssignmentById",
                this.id
            );
            this.formData.title = currentAssignment.title;
            this.formData.text = currentAssignment.text;
        } catch (e) {
            console.error(e);
        }
    },
    computed: {
        ...mapGetters(["isSending"]),
    },
    methods: {
        submitForm() {
            this.$emit("editAssignment", {
                id: this.id,
                ...this.formData,
            });
        },
    },
};
</script>

<style lang="scss">
.form-button {
    margin-top: 10px;
}
</style>
