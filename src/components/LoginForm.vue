<template>
  <div class="login-page">
    <form @submit="login">
      <div class="inputs">
        <text-input ref="login" label="Name" @input="onInput('login', $event)" required></text-input>
        <text-input ref="password" label="Password" type="password"
                    @input="onInput('password', $event)" required></text-input>
      </div>
      <div class="buttons">
        <form-button label="LOGIN" :disabled="!enableSubmit" type="submit"/>
        <a target="_blank" class="forgot">
          Forgot Password
        </a>
      </div>
    </form>
    <div class="register">
      Register now
    </div>
  </div>
</template>

<script>
import FormButton from "@/components/controls/FormButton";
import TextInput from "@/components/controls/TextInput";

export default {
  name: "LoginForm",
  components: {FormButton, TextInput},
  data() {
    return {
      formGroup: {
        login: "",
        password: ""
      },
      errorMessage: "Enter"
    }
  },
  methods: {
    login(event) {
      event.preventDefault()
      event.stopImmediatePropagation()
      if (this.formGroup.login === "Admin" && this.formGroup.password === "12345") {
        localStorage.setItem("logged", "true");
        localStorage.setItem("username", this.formGroup.login);
        this.$router.push("/todo");
      } else {
        this.$refs.login.showError("Wrong login");
        this.$refs.password.showError("or wrong password");
      }
    },
    onInput(field, value) {
      this.formGroup[field] = value;
    }
  },
  computed: {
    enableSubmit() {
      return this.formGroup.login.length && this.formGroup.password.length
    }
  }
}
</script>

<style lang="scss" scoped>
.login-page {
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  width: 100%;
  height: 464px;
  background: #FFFFFF;
  box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);

  form {
    padding: 40px 30px 0;
  }
  .inputs {
    display: flex;
    justify-content: center;
    flex-direction: column;
  }

  .buttons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .btn {
      height: 53px;
      font-weight: 400;
      font-size: 25px;
      line-height: 29px;
      margin-top: 0;
      width: 100%;
    }

    .forgot {
      font-weight: 400;
      font-size: 20px;
      line-height: 23px;
      padding: 20px 0 23px;
      cursor: pointer;
      color: #056DAE;
    }
  }

  .register {
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: #F6F6F6;
    height: 63px;
    cursor: pointer;

    font-weight: 400;
    font-size: 25px;
    line-height: 29px;

    color: #333333;
  }
}
</style>
