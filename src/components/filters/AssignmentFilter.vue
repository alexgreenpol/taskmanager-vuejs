<template>
    <div class="assignment-filter">
        <form class="assigment-filet__form">
            <div class="assignment-filter__row">
                <MyInput
                    v-model="filterOptions.searchField"
                    type="text"
                    placeholder="Search..."
                    @input="onChange"
                />
            </div>
            <div class="assignment-filter__row">
                <MyCheckbox
                    v-model="filterOptions.oldAssignmentsFirst"
                    label="Old assignments first:"
                    @input="onChange"
                />
            </div>
            <div class="assignment-filter__row">
                <MyCheckbox
                    v-model="filterOptions.match"
                    label="Full match:"
                    @input="onChange"
                />
            </div>
            <div class="assignment-filter__row">
                <MyCheckbox
                    v-model="filterOptions.searchByTitles"
                    label="Just titles:"
                    @input="onChange"
                />
                <MyCheckbox
                    v-model="filterOptions.searchByDescriptions"
                    label="Just descriptions:"
                    @input="onChange"
                />
            </div>
            <div class="assignment-filter__row">
                <MyCheckbox
                    v-model="filterOptions.negativeSearch"
                    label="Negative search:"
                    @input="onChange"
                />
            </div>
            <div class="assignment-filter__row">
                <MyCheckbox
                    v-model="filterOptions.sensitiveCase"
                    label="Case sensitive:"
                    @input="onChange"
                />
            </div>
        </form>
    </div>
</template>

<script>
import MyInput from "@/components/inputs/MyInput.vue";
import MyCheckbox from "@/components/inputs/MyCheckbox.vue";

const defaultData = () => ({
    searchField: "",
    oldAssignmentsFirst: false,
    match: false,
    searchByTitles: false,
    searchByDescriptions: false,
    negativeSearch: false,
    sensitiveCase: false,
});

export default {
    name: "AssignmentFilter",
    components: {
        MyInput,
        MyCheckbox,
    },
    data() {
        return {
            filterOptions: defaultData(),
        };
    },
    methods: {
        onChange() {
            this.$emit("filterAssignments", this.filterOptions);
        },
        resetFilter() {
            this.filterOptions = defaultData();
            this.$emit("resetFilter");
        },
    },
};
</script>

<style lang="scss" scoped>
.assignment-filter {
    border: 1px solid $brandSteelBlue;
    padding: 10px;
    margin: 20px 0;

    &__row {
        margin: 10px 0;
    }
}
</style>
