import { useState } from 'react';

import styles from './TodoItem.module.css';

import MoreIconUrl from '../../../assets/icons/more.png';

const TodoItem = ({
    id,
    title,
    description,
    createdAt,
    completed,
    onRemoveTodo,
    onCompletedTodo,
}) => {
    const [shouldSeeDetails, setShouldSeeDetails] = useState(false);

    const handleSeeDetails = () => {
        setShouldSeeDetails(!shouldSeeDetails);
    };

    const todoItemClasses = completed
        ? [styles.TodoItem, styles.Done].join(' ')
        : styles.TodoItem;

    return (
        <div className={todoItemClasses}>
            <div className={styles.Header}>
                <img
                    src={MoreIconUrl}
                    className={styles.Icon}
                    alt="More"
                    onClick={handleSeeDetails}
                />
                <div
                    className={styles.Title}
                    onClick={() => onCompletedTodo(id, !completed)}
                >
                    {title}
                </div>
                <span
                    className={styles.Remove}
                    onClick={() => onRemoveTodo(id)}
                >
                    X
                </span>
            </div>
            {shouldSeeDetails && (
                <div className={styles.Detail}>
                    <span>{createdAt}</span>
                    {description && <p>{description}</p>}
                </div>
            )}
        </div>
    );
};

export default TodoItem;
