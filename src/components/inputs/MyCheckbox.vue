<template>
    <span class="input-wrapper">
        <label>
            {{ label }}
            <input
                :id="id"
                :class="className"
                :value="value"
                :checked="checked"
                type="checkbox"
                @change="onChange"
            />
        </label>
    </span>
</template>

<script>
export default {
    name: "MyCheckbox",
    props: {
        id: {
            type: String,
            default: "",
        },
        className: {
            type: String,
            default: "input-wrapper__checkbox",
        },
        value: {
            type: Boolean,
            default: false,
        },
        checked: {
            type: Boolean,
            default: false,
        },
        label: {
            type: String,
            default: "",
        },
    },
    methods: {
        onChange(event) {
            this.$emit("input", event.target.checked);
        },
    },
};
</script>

<style lang="scss"></style>