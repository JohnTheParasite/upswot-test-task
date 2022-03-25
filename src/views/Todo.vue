<template>
  <div class="page">
    <div class="background"></div>
    <div class="content">
      <img alt="Logo" src="../assets/logo.png" height="119" width="186">
      <div class="body">
        <div class="hello">Thank you {{loggedUser}}!</div>
        <todo-list></todo-list>
      </div>
    </div>
  </div>


</template>

<script>
import TodoList from "@/components/TodoList";
export default {
  name: "Todo",
  components: {TodoList},
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
      }
    }
  }

  @media screen and (max-width: 768px) {
    .background {
      height: 100%;
    }
    .content {
      width: 650px;

      img {
        display: block;
        max-width: 140px;
        max-height: 80px;
        width: auto;
        height: auto;
      }
    }
  }

  @media screen and (max-width: 425px) {
    .content {
      width: 420px;

      .body {
        .hello {
          font-size: 30px;
        }
      }
    }
  }
}

</style>
