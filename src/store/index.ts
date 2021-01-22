import { createStore } from "vuex";
import Note from "@/models/NoteModel";
import ToDo from "@/models/ToDoModel";

export default createStore({
  state: {
    notes: [] as Note[],
    currentNote: {
      title: "",
      todos: [] as Array<ToDo>,
      id: 0
    } as Note
  },
  mutations: {
    addNote(state) {
      state.notes.push(state.currentNote);
    },
    removeNote(state, id) {
      state.notes = state.notes.filter(note => note.id !== id);
    },
    updateNote(state) {
      const note = state.notes.filter(note => note.id === state.currentNote.id);
      const index = state.notes.indexOf((note as unknown) as Note);
      state.notes[index] = state.currentNote;
    },
    setCurrentNote(state, payload) {
      state.currentNote = payload;
    },
    updateTitle(state, payload: string) {
      state.currentNote.title = payload;
    },
    updateTodos(state, payload: ToDo[]) {
      state.currentNote.todos = payload;
    },
    addNewTodo(state) {
      state.currentNote.todos.push({
        text: "",
        completed: false
      });
    },
    deleteTodo(state, index: number) {
      state.currentNote.todos.splice(index, 1);
    }
  },
  actions: {},
  modules: {},
  strict: true
});
