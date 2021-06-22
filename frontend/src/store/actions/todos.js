import api from '../../utils/api';
import moment from 'moment';

import { todosActions } from '../slices/todos-slice';
import { isLoading } from '../slices/ui-slice';

export const fetchTodos = () => {
    return async (dispatch) => {
        try {
            dispatch(isLoading(true));
            const response = await api.get('/todo');

            const todos = response.data.map((todo) => {
                return transformTodoResponseObject(todo);
            });

            dispatch(
                todosActions.fetchTodos({
                    todos: todos,
                })
            );
        } catch (error) {
            console.log(error);
        } finally {
            dispatch(isLoading(false));
        }
    };
};

export const addTodo = (title, description) => {
    return async (dispatch) => {
        try {
            const response = await api.post('/todo', {
                title: title,
                description: description,
            });
            const todo = transformTodoResponseObject(response.data);

            dispatch(
                todosActions.addTodo({
                    todo: todo,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const removeTodo = (id) => {
    return (dispatch) => {
        try {
            api.delete(`/todo/${id}`);
            dispatch(
                todosActions.removeTodo({
                    todoId: id,
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};

export const markAsCompleted = (id, completed) => {
    return async (dispatch) => {
        try {
            const response = await api.patch(`/todo/${id}/complete`, {
                completed,
            });
            dispatch(
                todosActions.markAsCompleted({
                    todo: transformTodoResponseObject(response.data),
                })
            );
        } catch (error) {
            console.log(error);
        }
    };
};

/**
 * NOTE: If the data from the API is not retrieved as needed, we transform it before to pass it to the components
 */
const transformTodoResponseObject = (todo) => {
    return {
        id: todo.id,
        title: todo.title,
        description: todo.description,
        completed: todo.completedAt ? true : false,
        createdAt: moment(todo.createdAt).format('dddd DD/MM/YYYY'),
    };
};
