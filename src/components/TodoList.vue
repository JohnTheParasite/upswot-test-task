<template>
  <div>
    <div class="add-button">
      <form-button label="Add" @click="addClick"></form-button>
    </div>

    <div v-for="todoElem in todoElements" :key="todoElem.id">
      <div class="todo-element">
        <div class="text" :class="{ done: todoElem.done }">
          <text-input v-if="todoElem.edit" :init-value="todoElem.task" @input="onInput('task', $event, todoElem)"></text-input>
          <div class="task-text" v-else @click="toggle('done', todoElem)">{{todoElem.task}}</div>
        </div>
        <form-button v-if="!todoElem.edit" label="edit" @click="toggle('edit', todoElem)"></form-button>
        <form-button v-else label="apply" @click="toggle('edit', todoElem)"></form-button>
        <form-button label="delete" @click="deleteEdit(todoElem)"></form-button>
      </div>
    </div>
  </div>
</template>

<script>
import FormButton from "@/components/controls/FormButton";
import TextInput from "@/components/controls/TextInput";
export default {
  name: "TodoList",
  components: {TextInput, FormButton},
  data() {
    return {
      todoElements: [
        {id: 1, task: "shower", edit: false, done: false},
        {id: 2, task: "dance", edit: false, done: false},
        {id: 3, task: "learn", edit: false, done: false}
      ]
    }
  },
  methods: {
    onInput(field, value, todoElem) {
      todoElem[field] = value
    },
    addClick() {
      let newId = 0;
      if (this.todoElements.length) {
        newId = Math.max.apply(Math, this.todoElements.map(function(elem) { return elem.id; }))
      }
      this.todoElements.push({id: newId + 1, task: "new", edit: true, done: false})
    },
    toggle(field, todoElem) {
      todoElem[field] = !todoElem[field];
    },
    deleteEdit(todoElem) {
      for ( let i = 0; i < this.todoElements.length; i++ ) {
        if (this.todoElements[i].id === todoElem.id) {
          this.todoElements.splice(i, 1);
        }
      }
    }
  }
}
</script>

<style lang="scss" scoped>

.add-button {
  display: flex;
  justify-content: center;
  margin: 20px;

  .btn {
    margin-top: 0;
    height: 54px;
    width: 105px;
  }
}

.todo-element {
  display: flex;
  justify-content: center;
  gap: 10px;
  margin-bottom: 10px;

  .text {
    width: 360px;
    cursor: pointer;
    background-color: #00AFED;

    &.done {
      background-color: #9A9A9A;
      text-decoration: line-through;
      color: #333333;
    }
  }

  .task-text {
    padding: 15px;
    width: calc(100% - 25px);
    font-weight: 400;
    font-size: 18px;
    white-space: pre-wrap;
    word-break: break-all;
  }

  .btn {
    margin-top: 0;
    height: 54px;
    width: 105px;
  }
}

@media screen and (max-width: 650px) {
  .todo-element {
    width: 99vw;

    .text {
      width: 60%;
    }

    .btn {
      width: 18%;
      padding: 0;
    }
  }
}

</style>
