class TodoAPI {
  static async getAllTodos() {
    return JSON.parse(localStorage.getItem("todo-list") || "[]");
  }

  static async save(items) {
    localStorage.setItem("todo-list", JSON.stringify(items));
  }
}

export default TodoAPI;
