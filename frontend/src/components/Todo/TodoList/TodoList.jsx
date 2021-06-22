import TodoItem from '../TodoItem/TodoItem';

import styles from './TodoList.module.css';

const TodoList = ({
    todos,
    handleMarkAsCompleted,
    handleRemoveTodo,
    handleSortBy,
}) => {
    return (
        <div className={styles.TodoList}>
            {todos.length > 0 && (
                <button onClick={handleSortBy}>Sort by Done</button>
            )}
            {todos.map((todo) => {
                return (
                    <TodoItem
                        key={todo.id}
                        id={todo.id}
                        title={todo.title}
                        description={todo.description}
                        createdAt={todo.createdAt}
                        completed={todo.completed}
                        onRemoveTodo={handleRemoveTodo}
                        onCompletedTodo={handleMarkAsCompleted}
                    />
                );
            })}
        </div>
    );
};

export default TodoList;
