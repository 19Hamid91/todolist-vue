import { createStore } from "vuex";

const store = createStore({
  state: {
    todos: JSON.parse(localStorage.getItem("todos")) || [],
  },
  getters: {
    finishedTodos: (state) => {
      return state.todos.filter((todo) => todo.status === "finished");
    },
    pendingTodos: (state) => {
      return state.todos.filter((todo) => todo.status === "pending");
    },
    trashedTodos: (state) => {
      return state.todos.filter((todo) => todo.status === "trashed");
    },
    getTodoById: (state) => (id) => {
      return state.todos.find((todo) => todo.id == id);
    },
  },
  actions: {
    addTodo({ commit }, todo) {
      commit("newTodo", todo);
    },
    editTodo({ commit }, id, todo) {
      commit("editTodo", id, todo);
    },
    removeTodo({ commit }, id) {
      commit("deleteTodo", id);
    },
    updateStatus({ commit }, id, status) {
      commit("updateStatus", id, status);
    },
  },
  mutations: {
    newTodo: (state, todo) => {
      state.todos.push(todo);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    editTodo: (state, payload) => {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      if (index) {
        state.todos[index] = payload;
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    deleteTodo: (state, id) => {
      state.todos = state.todos.filter((todo) => todo.id !== id);
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
    updateStatus: (state, payload) => {
      const index = state.todos.findIndex((todo) => todo.id === payload.id);
      if (index !== -1) {
        state.todos[index].status = payload.status;
      }
      localStorage.setItem("todos", JSON.stringify(state.todos));
    },
  },
});

export default store;
