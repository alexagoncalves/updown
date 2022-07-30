import './todolist.scss';
import PropTypes from 'prop-types';
import DoneButtons from 'src/components/DoneButtons';
import TodoMenu from 'src/components/TodoMenu';
import { useState } from 'react';


const TodoList = ({toDoList, setIsEditing, isEditing, newTaskValue, setNewTaskValue, editTask, doneTask, deleteTask}) => {

    const [isShowing, setIsShowing] = useState(0);

    const handleClickList = (e) => {
        const idCurrentTask = parseInt(e.target.id);
        if (isShowing === idCurrentTask ) {
            setIsShowing(0);
        } else {
            setIsShowing(idCurrentTask);
        }
    };

    const handleEditChange = (e) => {
        setNewTaskValue(e.currentTarget.value)
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        editTask(setNewTaskValue);
        setIsEditing(0);        
      }

    return(
        <div className="todolist">
            <h2 className="todolist-title">To Do</h2>
            <ul className="todolist-tasklist">
                {toDoList.filter(task => task.done === false).map((task) => (
                    <li className="donelist-task" id={task.id} key={task.id} onClick={handleClickList}>
                    
                    { isEditing === task.id ?
                        <>
                        <form className="todolist-form__edit" onSubmit={handleEditSubmit}>
                        <input type="text" value={newTaskValue} className="todolist-task__edit" onChange={handleEditChange} /> 
                        <button type="button" onClick={handleEditSubmit} className="material-symbols-outlined todolist-edit__button">published_with_changes</button>
                        </form>
                        </> :
                        task.task }

                    { isShowing === task.id ? <TodoMenu setIsEditing={setIsEditing} isEditing={isEditing} newTaskValue={newTaskValue} setNewTaskValue={setNewTaskValue} doneTask={doneTask} deleteTask={deleteTask} /> : null }
                    </li>
                ))}
            </ul>
        
            <h2 className="donelist-title">Done</h2>
            <ul className="donelist-tasklist">
                {toDoList.filter(task => task.done === true).map(task => (
                    <li className="donelist-task" id={task.id} key={task.id} onClick={handleClickList}>
                    {task.task}
                    
                    { isShowing === task.id ? <DoneButtons doneTask={doneTask} deleteTask={deleteTask} /> : null }

                    </li>
                ))}
            </ul>
        </div>
    )
}

TodoList.propTypes = {
    toDoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    isEditing: PropTypes.number,
    setIsEditing: PropTypes.func,
    newTaskValue: PropTypes.string,
    setNewTaskValue: PropTypes.func,
    doneTask: PropTypes.func,
    deleteTask: PropTypes.func,
};

export default TodoList;