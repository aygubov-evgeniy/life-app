<template>
  <li>
    <div>
      <input v-model="checked" type="checkbox" />
    </div>
    <div>
      <span
        :class="{ completed: todo.completed }"
        v-if="!editable"
        @click="editable = !editable"
      >
        {{ todo.text ? todo.text : "Click to edit Todo" }}
      </span>
      <template v-else>
        <input
          type="text"
          v-model="title"
          v-on:keyup.enter="editable = !editable"
        />
        <textarea v-model="text"></textarea>
      </template>
    </div>

    <div>
      <button @click="onUpdateTodo">
        {{ editable ? "Save" : "Edit" }}
      </button>
      <button @click="$emit('remove-todo', todo)">Delete</button>
    </div>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";
import ToDo from "@/models/ToDoModel";

export default defineComponent({
  name: "TodoItem",
  props: {
    todo: {
      type: Object as PropType<ToDo>,
      required: true
    }
  },
  data() {
    return {
      editable: false,
      title: "",
      text: ""
    };
  },
  methods: {
    onUpdateTodo() {
      this.$emit("update-todo", this.title, this.text);
    }
  },
  computed: {
    checked: {
      get(): boolean {
        return this.todo.completed;
      },
      set(value: boolean) {
        this.$emit("checkbox-click", value);
      }
    }
  }
});
</script>

<style scoped>
.completed {
  text-decoration: line-through;
}
</style>
