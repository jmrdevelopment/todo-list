import { useState } from 'react';

import styles from './NewTodoForm.module.css';

const NewTodoForm = ({ handleAddTodo }) => {
    const initialState = {
        title: {
            label: 'Title',
            name: 'title',
            placeholder: 'Add a title here...',
            value: '',
        },
        description: {
            label: 'Description',
            name: 'description',
            placeholder: 'Some description...',
            value: '',
        },
    };

    const [formConfig, setFormConfig] = useState(initialState);

    const handleChangeInput = (event) => {
        const updatedElement = {
            ...formConfig[event.target.name],
            ...{
                value: event.target.value,
            },
        };

        const updatedForm = {
            ...formConfig,
            ...{
                [event.target.name]: updatedElement,
            },
        };

        setFormConfig(updatedForm);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (formConfig.title.value) {
            handleAddTodo(formConfig.title.value, formConfig.description.value);
            setFormConfig(initialState);
        } else {
            alert('Please, set a title');
        }
    };

    return (
        <form
            onSubmit={(event) => handleSubmit(event)}
            className={styles.NewTodoForm}
        >
            <div className={styles.FormElement}>
                <input
                    type="text"
                    name={formConfig.title.name}
                    value={formConfig.title.value}
                    placeholder={formConfig.title.placeholder}
                    onChange={(event) => handleChangeInput(event)}
                />
            </div>
            <div className={styles.FormElement}>
                <textarea
                    name={formConfig.description.name}
                    value={formConfig.description.value}
                    placeholder={formConfig.description.placeholder}
                    onChange={(event) => handleChangeInput(event)}
                />
            </div>
            <div className={styles.FormElement}>
                <button type="submit">ADD</button>
            </div>
        </form>
    );
};

export default NewTodoForm;
