<template>
  <div>
    <text-input label="Company name" @input="onInput('compname', $event)"></text-input>
    <text-input label="Company name 2" @input="onInput('compname2', $event)" type="password"></text-input>
    <form-button :disabled="!enableSubmit" type="submit" label="Apply now"></form-button>
  </div>
</template>

<script>
import TextInput from "@/components/controls/TextInput";
import FormButton from "@/components/controls/FormButton";
export default {
  name: 'HelloWorld',
  components: {FormButton, TextInput},
  props: {
    msg: String
  },
  data() {
    return {
      formGroup: {
        compname: "",
        compname2: ""
      }
    }
  },
  methods: {
    onInput(field, value) {
      this.formGroup[field] = value;
    }
  },
  computed: {
    enableSubmit() {
      return this.formGroup.compname.length && this.formGroup.compname2.length
    }
  }
}
</script>

<style scoped lang="scss">

</style>
