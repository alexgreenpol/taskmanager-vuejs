<template>
    <div class="assignments-page">
        <div class="container">
            <div class="assignments-page__top-holder">
                <h1 class="assignments-page__title">Assignments</h1>
                <MyButton
                    v-if="isAuthenticated"
                    @click="openCreateAssignmentModal"
                >
                    Add new assignment
                </MyButton>
            </div>

            <AssignmentFilter
                v-if="isAuthenticated"
                ref="assignmentsFilter"
                @filterAssignments="filterAssignments"
                @resetFilter="resetFilter"
            />

            <AssignmentList
                v-if="basicAssignments"
                :assignments="
                    isFilterActive ? filteredAssignments : basicAssignments
                "
                @addCurrentAssignmentId="addCurrentAssignmentId"
                @openEditAssignmentModal="openEditAssignmentModal"
                @removeAssignment="removeAssignment"
            />
        </div>
        <Modal ref="createAssignmentModal" title="Create new assignment">
            <CreateAssignmentForm
                slot="content"
                @createNewAssignment="createNewAssignment"
            />
        </Modal>
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
import AssignmentList from "@/components/assignments/AssignmentList.vue";
import MyButton from "@/components/buttons/MyButton.vue";
import Modal from "@/components/modal/Modal.vue";
import CreateAssignmentForm from "@/components/forms/CreateAssignmentForm.vue";
import EditAssignmentForm from "@/components/forms/EditAssignmentForm.vue";
import AssignmentFilter from "@/components/filters/AssignmentFilter.vue";

export default {
    name: "AssignmentsPage",
    components: {
        AssignmentList,
        MyButton,
        Modal,
        CreateAssignmentForm,
        EditAssignmentForm,
        AssignmentFilter,
    },
    data() {
        return {
            currentId: "",
            isFilterActive: false,
        };
    },
    mounted() {
        try {
            this.$store.dispatch("getAssignments");
        } catch (e) {
            console.error(e);
        }
    },
    computed: {
        ...mapGetters({
            isAuthenticated: "isAuthenticated",
            basicAssignments: "getAssignments",
            filteredAssignments: "getFilteredAssignments",
        }),
    },
    methods: {
        openCreateAssignmentModal() {
            this.$refs.createAssignmentModal.open();
        },
        openEditAssignmentModal() {
            this.$refs.editAssignmentModal.open();
        },
        addCurrentAssignmentId(id) {
            this.currentId = id;
        },
        removeAssignment(id) {
            try {
                this.$store.dispatch("removeAssignment", id);
                this.$store.dispatch("removeFilteredAssignment", id);
            } catch (e) {
                console.error(e);
            }
        },
        async createNewAssignment(formData) {
            try {
                await this.$store.dispatch("addAssignment", formData);
                this.$refs.createAssignmentModal.close();
                this.$refs.assignmentsFilter.resetFilter();
            } catch (e) {
                console.error(e);
            }
        },
        async editAssignment(formData) {
            try {
                await this.$store.dispatch("editAssignment", formData);
                this.$refs.editAssignmentModal.close();
            } catch (e) {
                console.error(e);
            }
        },
        filterAssignments(filterOptions) {
            if (!this.isFilterActive) {
                this.isFilterActive = true;
            }

            this.$store.dispatch("filterAssignments", {
                assignments: this.basicAssignments,
                filterOptions,
            });
        },
        resetFilter() {
            this.isFilterActive = false;
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