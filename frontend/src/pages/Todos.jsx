import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import NewTodoForm from '../components/Todo/NewTodoForm/NewTodoForm';
import TodoList from '../components/Todo/TodoList/TodoList';

import {
    fetchTodos,
    removeTodo,
    addTodo,
    markAsCompleted,
} from '../store/actions/todos';

import { todosActions } from '../store/slices/todos-slice';

import styles from './Todos.module.css';

const Todos = () => {
    const dispatch = useDispatch();
    const todos = useSelector((state) => state.todos.todos);

    useEffect(() => {
        dispatch(fetchTodos());
    }, [dispatch]);

    const handleRemoveTodo = (id) => {
        dispatch(removeTodo(id));
    };

    const handleMarkAsCompleted = (id, completed) => {
        dispatch(markAsCompleted(id, completed));
    };

    const handleAddTodo = (title, description) => {
        dispatch(addTodo(title, description));
    };

    const handleSortByDone = () => {
        dispatch(todosActions.sortByDone());
    };

    return (
        <section className={styles.Todos}>
            <header>
                <h2>Todos Management</h2>
            </header>
            <div className={styles.Content}>
                <NewTodoForm handleAddTodo={handleAddTodo} />
                <TodoList
                    todos={todos}
                    handleMarkAsCompleted={handleMarkAsCompleted}
                    handleRemoveTodo={handleRemoveTodo}
                    handleSortBy={handleSortByDone}
                />
            </div>
        </section>
    );
};

export default Todos;
