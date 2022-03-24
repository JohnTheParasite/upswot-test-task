<template>
  <div class="form-group">
    <label class="input-label" >{{ label }}</label>
    <div class="input-group" :class="{ invalid: hasError }" role="group">
      <input class="form-control" :class="{ invalid: hasError }" :type="type" v-model.trim="inputModel" @focusout="focusout" @input="input">
      <div v-show="errorMessage">
        <img alt="X" src="../../assets/error.svg">
        <small class="text-error">{{errorMessage}}</small>
      </div>
    </div>
  </div>

</template>

<script>
export default {
  name: "TextInput",
  props: {
    label: {
      type: String,
      default: ""
    },
    warningMessage: {
      type: String,
      default: "Enter"
    },
    type: {
      type: String,
      default: "text"
    }
  },
  data() {
    return {
      inputModel: "",
      errorMessage: "",
      focused: false
    }
  },
  methods: {
    focusout() {
      this.focused = false
      if (!this.inputModel.length) {
        this.showError(this.warningMessage + " " + this.label.toLowerCase());
      }
    },
    input(event) {
      this.errorMessage = ""
      this.$emit("input", this.inputModel, this, event)
    },
    showError(Message) {
      this.errorMessage = Message;
    }
  },
  computed: {
    hasError() {
      return this.errorMessage.length || this.warningMessage === "Wrong"
    }
  }
}
</script>

<style lang="scss" scoped>
.form-group {
  .input-label {
    display: inline-block;

    font-weight: 300;
    font-size: 18px;
    line-height: 21px;
    color: #333333;

    margin-bottom: 7px;
  }

  .input-group {
    display: flex;
    flex-direction: column;
    margin-bottom: 40px;

    &.invalid {
      margin-bottom: 16px;
    }

    .form-control {
      outline: none;
      background: #FFFFFF;
      border: 1px solid #9A9A9A;
      box-sizing: border-box;

      width: 100%;
      height: 53px;

      font-weight: 400;
      font-size: 18px;
      line-height: 21px;

      padding: 16px 15px;

      &:focus{
        border: 1px solid #101010;
        transition: all 0.2s ease;
      }

      &.invalid {
        border: 1px solid #D60000;
        transition: all 0.2s ease;
      }
    }

    img {
      margin-right: 10px;
    }

    .text-error {
      display: inline-block;
      font-weight: 400;
      font-size: 16px;
      line-height: 19px;
      color: #D60000;
      margin-top: 5px;
    }
  }
}
</style>
