import PropTypes from 'prop-types';
import { useState } from 'react';
import './addtaskform.scss';

const AddTaskForm = ({addNewTask, errorMessage, setErrorMessage}) => {
    const [newTask, setNewTask] = useState('');

    const handleChange = (e) => {
        setNewTask(e.currentTarget.value)
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();

        if (newTask !== "") {
            addNewTask(newTask);
            setNewTask('');
            setErrorMessage('');

        } else (
            setErrorMessage('Please make sure the field is filled in correctly.')
        )
      }

    return (
        <>
        <p className="form-error">{errorMessage}</p>
        <div className="form" onSubmit={handleSubmit}>
            <form className="form-new">
                <input type="text" className="form-new__task" size="5" placeholder="New Task" value={newTask} onChange={handleChange} />
            </form>
                <button type="button" onClick={handleSubmit} className="material-symbols-outlined">add_task</button>
        </div>
        </>
    )
}

AddTaskForm.propTypes = {
    addNewTask: PropTypes.func,
}

export default AddTaskForm;