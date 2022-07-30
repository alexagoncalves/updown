import './todomenu.scss';
import { useState } from 'react';
import PropTypes from 'prop-types';

const TodoMenu = ({setIsEditing, isEditing, setNewTaskValue, doneTask, deleteTask}) => {
    
    const handleClickEdit = (e) => {
        e.preventDefault();
        const selectedTask = e.currentTarget.closest('.donelist-task');
        const idCurrentTask = parseInt(selectedTask.id);
        const currentTaskText = selectedTask.firstChild.textContent;
        setNewTaskValue(currentTaskText);
                        
        if ( isEditing === idCurrentTask ) {
            setIsEditing(0);
        } else {
            setIsEditing(idCurrentTask);
        }
    };

    const handleClickDone = (e) => {
        e.preventDefault();
        const selectedTask = e.currentTarget.closest('.donelist-task');
        const idCurrentTask = parseInt(selectedTask.id);
        doneTask(idCurrentTask);
    }

    const handleClickDelete = (e) => {
        e.preventDefault();
        const selectedTask = e.currentTarget.closest('.donelist-task');
        const idCurrentTask = parseInt(selectedTask.id);
        deleteTask(idCurrentTask);
    }

    return (
        <div className="todomenu-buttons">
            <button type="button" onClick={handleClickEdit} className="material-symbols-outlined">edit_note</button>
            <button type="button" onClick={handleClickDone}className="material-symbols-outlined">task_alt</button>
            <button type="button" onClick={handleClickDelete}className="material-symbols-outlined">delete</button>
        </div>
    )
}

TodoMenu.propTypes = {
    isEditing: PropTypes.number,
    setIsEditing: PropTypes.func,
    setNewTaskValue: PropTypes.func,
    doneTask: PropTypes.func,
}

export default TodoMenu;