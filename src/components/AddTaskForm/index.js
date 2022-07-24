import PropTypes from 'prop-types';
import { useState } from 'react';
import './addtaskform.scss';

const AddTaskForm = ({addNewTask}) => {
    const [newTask, setNewTask] = useState('');

    const handleChange = (e) => {
        setNewTask(e.currentTarget.value)
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();
        addNewTask(newTask);
        setNewTask('');
      }

    return (
        <div className="form" onSubmit={handleSubmit}>
            <form className="form-new">
                <input type="text" className="form-new__task" placeholder="New Task" value={newTask} onChange={handleChange} />
            </form>
                <button type="button" onClick={handleSubmit}className="material-symbols-outlined">add_task</button>
        </div>
    )
}

AddTaskForm.propTypes = {
    addNewTask: PropTypes.func,
}

export default AddTaskForm;