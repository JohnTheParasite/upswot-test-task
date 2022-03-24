<template>
  <div class="page">
    <div class="upper-half">
      <div class="upper-block"></div>
      <div class="logo-block"></div>
      <div class="background-pic">
        <div class="content">
          <div class="welcome-text">
          Welcome to<br/>
          Business Analytics Online
          </div>
        </div>
      </div>
    </div>
    <div class="lower-half">
      <div class="content text-block">
        <div class="left-part">
          <div>
            Business Analytics — a new, convenient tool for managing and forecasting your business performance, which
            will help analyze your own finances and cash flows, visualize your reporting, business processes, KPI's
          </div>
          <div>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.</div>
          <div>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.</div>
          <div>In just a few clicks, you can connect your data from 1C, CRM (Bitrix24, AmoCRM, ZohoCRM), E-commerce (PROM.UA, Rozetka, ebay), Logistic (Nova Poshta), Google Analytics and many more systems that reflect different aspects of business activities.</div>
        </div>
        <div class="right-part">
          <div class="login-page">
            <form @submit="login">
              <div class="inputs">
                <text-input ref="login" label="Name" @input="onInput('login', $event)"></text-input>
                <text-input ref="password" label="Password" type="password"
                            @input="onInput('password', $event)"></text-input>
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
        </div>
      </div>
      <div class="lower-block"></div>
    </div>
  </div>
</template>

<script>
import TextInput from "@/components/controls/TextInput";
import FormButton from "@/components/controls/FormButton";

export default {
  name: 'Login',
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

<style lang="scss">
.page {
  width: 100%;
  height: 100%;

  .upper-half {
    height: 50%;
    overflow: hidden;

    .upper-block {
      background-color: #333333;
      height: 53px;
    }

    .logo-block {
      background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
      height: 96px;
    }

    .background-pic {
      height: calc(100% - 149px);
      background: no-repeat url("../assets/login-background.jpg");
      display: flex;
      justify-content: center;
      align-items: flex-end;

      .welcome-text {
        font-size: 55px;
        line-height: 156.69%;
        color: #FFFFFF;
        width: 629px;
        margin-bottom: 70px;
      }
    }
  }

  .lower-half {
    height: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    .text-block {
      display: grid;
      grid-template-columns: 1fr 1fr;
    }

    .lower-block {width: 100%;
      background-color: #333333;
      height: 175px;
    }
  }


  .login-page {
    margin-top: -180px;



    width: 100%;
    height: 464px;
    background: #FFFFFF;
    box-shadow: 2px 2px 15px 2px rgba(0, 0, 0, 0.1);

    .inputs {
      display: flex;
      justify-content: center;
      flex-direction: column;
      margin: 40px 30px 0 30px;
      //width: 421px;
    }

    .buttons {
      display: flex;
      justify-content: center;
      align-items: center;
      flex-direction: column;
      margin: 0px 30px;
      //width: 421px;

      .btn {
        height: 53px;
        font-weight: 400;
        font-size: 25px;
        line-height: 29px;
        margin-top: 0;
        margin-bottom: 20px;
        width: 100%;
      }

      .forgot {
        font-weight: 400;
        font-size: 20px;
        line-height: 23px;
        cursor: pointer;
        margin-bottom: 23px;
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

  @media screen and (max-width: 768px) {
    .content {
      width: 100%;
    }

    .upper-block {
      display: none;
    }
    .upper-half {

      height: 140px;
      .logo-block {
        height: 40px;
      }
    }

    .lower-half {
      height: auto;

      .text-block{
        display: flex;
        flex-direction: column-reverse;

        .login-page {
          margin-top: 0;
        }
      }
    }



      .upper-half {
        .background-pic {
          height: calc(100% - 40px);
          .welcome-text {
            font-size: 20px;
            margin-bottom: 5px;
          }
        }
      }

  }

}

</style>
