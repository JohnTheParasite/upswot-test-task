<template>
  <div class="page">
    <div class="background"></div>
    <div class="content">
      <img alt="Logo" src="../assets/logo.png" height="119" width="186">
      <div class="body">
        <div class="hello">Thank you {{ loggedUser }}!</div>
        <form-button label="Logout" @click="logout"/>
        <todo-list></todo-list>
      </div>
    </div>
  </div>


</template>

<script>
import TodoList from "@/components/TodoList";
import FormButton from "@/components/controls/FormButton";

export default {
  name: "Todo",
  components: {FormButton, TodoList},
  methods: {
    logout() {
      localStorage.setItem("logged", false);
      this.$router.push("/login");
    }
  },
  computed: {
    loggedUser() {
      return localStorage.getItem("username") || "*user not found*"
    }
  }
}
</script>

<style lang="scss" scoped>
.page {
  display: flex;
  justify-content: center;

  .background {
    position: fixed;
    z-index: 0;
    width: 100%;
    height: 84%;
    background: linear-gradient(180deg, #00AFED 0%, #00569A 100%);
  }

  .content {
    z-index: 1;
    display: flex;
    align-items: center;
    flex-direction: column;

    img {
      margin: 65px 0 66px 0;
    }

    .body {
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 100%;
      background-color: #FFFFFF;
      padding-bottom: 40px;

      .hello {
        margin-top: 32px;
        font-weight: 700;
        font-size: 60px;
        line-height: 94px;
        text-align: center;
      }

      .btn {
        height: 53px;
      }
    }
  }

  @media screen and (max-width: 768px) {
    .background {
      height: 100%;
    }
    .content {
      width: 650px;
      justify-content: start;

      img {
        display: block;
        max-width: 140px;
        max-height: 80px;
        width: auto;
        height: auto;
        margin: 15px 15px;
      }
    }
  }

  @media screen and (max-width: 500px) {

    .content {
      width: 100%;

      .body {
        .hello {
          font-size: 30px;
          line-height: 100%;
        }
      }
    }
  }
}

</style>
