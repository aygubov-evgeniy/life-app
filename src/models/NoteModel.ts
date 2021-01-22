import ToDo from "@/models/ToDoModel";

export default interface NoteModel {
  title: string;
  todos: Array<ToDo>;
  id: number;
}
