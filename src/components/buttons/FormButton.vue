<template>
    <button
        :type="type"
        :disabled="disabled"
        class="form-button"
    >
        <slot>
            {{ text }}
        </slot>
    </button>
</template>

<script>
export default {
    name: "ButtonItem",

    props: {
        text: {
            type: String,
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
        type: {
            type: String,
            default: "button",
            validator(value) {
                return ["submit", "button", "reset"].indexOf(value) !== -1;
            },
        },
    },
};
</script>

<style lang="scss" scoped>
.form-button {
    box-sizing: border-box;
    font-size: 22px;
    font-weight: 600;
    color: $brandWhite;
    text-align: center;
    background: $brandGreen;
    padding: 10px 20px;
    max-height: 52px;
    border: 2px solid $brandGreen;
    border-radius: 3px;
    white-space: nowrap;
    cursor: pointer;
    transition: all 0.4s;
    outline: none;

    &:hover {
        background: transparent;
        color: $brandGreen;
    }

    &:disabled {
        background: $brandSteelBlue;
        color: $brandWhite;
        border-color: $brandSteelBlue;
        cursor: not-allowed;
    }
}
</style>
