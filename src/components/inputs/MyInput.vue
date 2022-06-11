<template>
    <ValidationProvider
        v-slot="{ errors }"
        :rules="veeValidateRules"
        :vid="vid"
        tag="div"
        class="input-wrapper"
    >
        <slot :attrs="$attrs" name="input">
            <input
                v-bind="$attrs"
                :id="id"
                :value="value"
                :class="{ 'input-wrapper__input--error': errors.length }"
                :disabled="disabled"
                class="input-wrapper__input"
                @input="onInput"
            />
        </slot>

        <slot v-if="errors.length" :errors="errors" name="error">
            <span class="error">{{ errors[0] }}</span>
        </slot>
    </ValidationProvider>
</template>

<script>
export default {
    name: "MyInput",
    props: {
        id: {
            type: String,
            default: "",
        },
        value: {
            type: String,
            default: "",
        },
        vid: {
            type: String,
            default: "",
        },
        veeValidateRules: {
            type: [String, Object],
            default: "",
        },
        disabled: {
            type: Boolean,
            default: false,
        },
    },
    methods: {
        onInput(event) {
            this.$emit("input", event.target.value);
        },
    },
};
</script>

<style scoped lang="scss">
.input-wrapper {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    padding: 10px 0;

    &__input {
        height: 40px;
        border-radius: 3px;
        font-size: 16px;
        color: $brandSteelBlue;
        width: 100%;
        padding: 5px 20px;
        border: 2px solid $brandSteelBlue;

        &:focus {
            border-color: $brandGray;
            color: $brandGray;
            outline: none;
        }

        &::placeholder {
            font-size: 16px;
            color: $brandSteelBlue;
        }

        &:disabled {
            background-color: $brandSteelBlue;
            color: $brandWhite;
            cursor: not-allowed;
        }

        &--error {
            border: 2px solid $brandRed;
        }
    }

    .error {
        display: block;
        margin-top: 10px;
        color: $brandRed;
        font-size: 16px;
        line-height: 20px;
    }
}
</style>