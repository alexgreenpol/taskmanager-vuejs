<template>
    <div class="assignments-page">
        <div class="container">
            <div class="assignments-page__top-holder">
                <h1 class="assignments-page__title">Current assignment</h1>
                <MyButton @click="comeBack"> Back </MyButton>
            </div>
            <AssignmentItem
                :item="currentAssignment"
                :isAlone="true"
                @openEditAssignmentModal="openEditAssignmentModal"
                @editAssignment="editAssignment"
                @removeAssignment="removeAssignment"
            />
        </div>
        <Modal ref="editAssignmentModal" title="Edit assignment">
            <EditAssignmentForm
                :id="currentId"
                slot="content"
                @editAssignment="editAssignment"
            />
        </Modal>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import AssignmentItem from "@/components/assignments/AssignmentItem.vue";
import MyButton from "@/components/buttons/MyButton.vue";
import Modal from "@/components/modal/Modal.vue";
import EditAssignmentForm from "@/components/forms/EditAssignmentForm.vue";

export default {
    name: "AssignmentPage",
    components: {
        AssignmentItem,
        MyButton,
        Modal,
        EditAssignmentForm,
    },
    data() {
        return {
            currentId: this.$route.params.id,
        };
    },
    mounted() {
        if (!this.getAssignments) {
            try {
                this.$store.dispatch("getAssignments");
            } catch (e) {
                console.error(e);
            }
        }
    },
    computed: {
        ...mapGetters(["isAuthenticated", "getAssignments"]),
        currentAssignment() {
            return (
                this.getAssignments?.find(
                    (item) => item.id === this.currentId
                ) || []
            );
        },
    },
    methods: {
        comeBack() {
            this.$router.back();
        },
        async removeAssignment(id) {
            try {
                await this.$store.dispatch("removeAssignment", id);
                this.$router.push("/assignments");
            } catch (e) {
                console.error(e);
            }
        },
        openEditAssignmentModal() {
            this.$refs.editAssignmentModal.open();
        },
        async editAssignment(formData) {
            try {
                await this.$store.dispatch("editAssignment", formData);
                this.$refs.editAssignmentModal.close();
            } catch (e) {
                console.error(e);
            }
        },
    },
};
</script>

<style lang="scss">
.assignments-page {
    border-top: 1px solid rgba(0, 0, 0, 0.2);

    &__top-holder {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 20px;
    }
}
.assignment-list__item {
    margin-bottom: 20px;
}
</style>