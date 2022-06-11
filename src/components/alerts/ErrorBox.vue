<template>
  <div class="error-box">
      <p class="error-box__error">{{ error }}</p>
  </div>
</template>

<script>
export default {
  name: 'ErrorBox',
  props: {
    error: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped>
.error-box {
  background: $brandRed;
  padding: 5px;
  border-radius: 4px;

  &__error {
    color: $brandWhite;
    text-align: center;
  }
}
</style>
