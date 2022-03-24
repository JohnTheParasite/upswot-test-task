<template>
  <button :disabled="disabled" :type="type" class="btn" @click="onclick">
    {{ label }}
  </button>
</template>

<script>
export default {
  name: "FormButton",
  props: {
    label: {
      type: String,
      default: ""
    },
    type: {
      type: String,
      default: "button"
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    onclick(event) {
      this.$emit("click", event)
    }
  },
}
</script>

<style lang="scss" scoped>
.btn {
  border: 2px solid #0076C0;
  color: #FFFFFF;
  font-weight: 500;
  font-size: 16px;
  line-height: 19px;
  padding: 8px 28px;
  background: #0076C0;
  margin-top: 10px;

  &:disabled {
    opacity: 0.55;
  }

  &:hover {
    &:not(:disabled) {
      background: white;
      color: #0076C0;
    }
  }

  &:not(:disabled) {
    cursor: pointer;
  }
}
</style>
