<template>
    <div :id="item.id" class="assignment-list__item">
        <h3 class="assignment-list__title">{{ item.title }}</h3>
        <p class="assignment-list__description">{{ item.text }}</p>
        <p class="assignment-list__date">Created: {{ prepareDate() }}</p>
        <div class="assignment-list__links">
            <a
                v-if="!isAlone"
                href="#"
                class="assignment-list__link"
                @click.prevent="openAssignment"
            >
                Open
            </a>
            <a
                v-if="isAuthenticated"
                href="#"
                class="assignment-list__link"
                @click.prevent="initEditAssignmentModal"
            >
                Edit
            </a>
            <a
                v-if="isAuthenticated"
                href="#"
                class="assignment-list__link"
                @click.prevent="removeAssignment"
            >
                Remove
            </a>
        </div>
    </div>
</template>

<script>
import { mapGetters } from "vuex";
import formatDate from "@/helpers/formatDate.js";

export default {
    name: "AssigmentItem",
    props: {
        item: {
            type: Object,
            required: true,
        },
        isAlone: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        ...mapGetters(["isAuthenticated"]),
    },
    methods: {
        prepareDate() {
            return formatDate(this.item.created);
        },
        openAssignment() {
            this.$router.push(`/assignments/${this.item.id}`);
        },
        initEditAssignmentModal() {
            this.$emit("addCurrentAssignmentId", this.item.id);
            this.$emit("openEditAssignmentModal");
        },
        removeAssignment() {
            this.$emit("removeAssignment", this.item.id);
        },
    },
};
</script>

<style lang="scss">
.assignment-list {
    &__item {
        border: 1px solid $brandSteelBlue;
        padding: 10px;
    }

    &__title {
        margin-bottom: 10px;
    }

    &__description {
        margin-bottom: 10px;
    }

    &__date {
        margin-bottom: 10px;
    }

    &__link {
        margin-right: 10px;
    }
}
</style>