<template>
    <Transition name="fade" mode="out-in">
        <section v-if="isOpenInner" class="modal" @click.self="close">
            <div class="modal__body">
                <div class="modal__content">
                    <slot v-if="title" :title="title" name="header">
                        <div class="modal-title-wrapper">
                            <h2 class="modal__title">
                                {{ title }}
                            </h2>
                        </div>
                    </slot>

                    <slot name="content" />

                    <button
                        aria-label="Close"
                        class="modal-close"
                        type="button"
                        @click="close"
                    >
                        <img
                            class="modal-close__icon"
                            alt="close modal"
                            src="@/assets/images/modal-close.svg"
                        />
                    </button>
                </div>
            </div>
        </section>
    </Transition>
</template>

<script>
export default {
    name: "Modal",
    props: {
        title: {
            type: String,
            default: "Modal",
        },
    },
    data() {
        return {
            isOpenInner: false,
        };
    },
    methods: {
        open() {
            this.isOpenInner = true;
            document.body.classList.add("lock");
        },
        close() {
            this.isOpenInner = false;
            document.body.classList.remove("lock");
        },
    },
};
</script>

<style lang="scss">
.modal {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 100;
    background: rgba(0, 0, 0, 0.8);
    display: flex;
    justify-content: center;
    align-items: center;

    &__body {
        width: 100%;
        max-width: 500px;
        padding-left: 20px;
        padding-right: 20px;
    }

    &__content {
        position: relative;
        background: $brandWhite;
        box-shadow: 0 0 20px $brandSteelBlue;
        border-radius: 3px;
        padding: 30px;
    }

    &__title {
        margin: 0 0 25px 0;
    }
}

.modal-close {
    position: absolute;
    width: 18px;
    height: 18px;
    top: 20px;
    right: 20px;
    background: transparent;
    border: none;
    cursor: pointer;

    &__icon {
        max-width: 18px;
    }
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity 0.3s;
}

.fade-enter, .fade-leave-to {
    opacity: 0;
}
</style>
