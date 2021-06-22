import { createSlice } from '@reduxjs/toolkit';

const todosSlice = createSlice({
    name: 'todos',
    initialState: {
        todos: [],
    },
    reducers: {
        fetchTodos(state, action) {
            state.todos = action.payload.todos;
        },
        removeTodo(state, action) {
            state.todos = state.todos.filter(
                (todo) => todo.id !== action.payload.todoId
            );
        },
        addTodo(state, action) {
            state.todos = [...state.todos, action.payload.todo];
        },
        markAsCompleted(state, action) {
            const elementIndex = state.todos.findIndex(
                (element) => element.id === action.payload.todo.id
            );
            let newArray = [...state.todos];
            newArray[elementIndex] = {
                ...newArray[elementIndex],
                completed: action.payload.todo.completed,
            };
            state.todos = newArray;
        },
        sortByDone(state, action) {
            state.todos = state.todos.sort((x, y) =>
                x.completed === y.completed ? 1 : -1
            );
        },
    },
});

export const todosActions = todosSlice.actions;

export default todosSlice;
