<template>
    <button class="btn" @click="onClick">
        <slot></slot>
    </button>
</template>

<script>
export default {
    name: "MyButton",
    methods: {
        onClick() {
            this.$emit('click');
        }
    }
};
</script>

<style lang="scss">
.btn {
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
}
</style>