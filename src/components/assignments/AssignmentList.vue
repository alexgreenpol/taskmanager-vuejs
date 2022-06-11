<template>
    <div class="assignment-list">
        <AssignmentItem
            v-for="item in assignments"
            :key="item.id"
            :item="item"
            @addCurrentAssignmentId="addCurrentAssignmentId"
            @openEditAssignmentModal="openEditAssignmentModal"
            @removeAssignment="removeAssignment"
        />
    </div>
</template>

<script>
import AssignmentItem from "@/components/assignments/AssignmentItem.vue";

export default {
    name: "AssignmentList",
    components: {
        AssignmentItem,
    },
    props: {
        assignments: {
            type: Array,
            required: true,
        },
    },
    methods: {
        openEditAssignmentModal() {
            this.$emit("openEditAssignmentModal");
        },
        addCurrentAssignmentId(id) {
            this.$emit("addCurrentAssignmentId", id);
        },
        removeAssignment(id) {
            this.$emit("removeAssignment", id);
        },
    },
};
</script>