import './donebuttons.scss';
import { useDispatch, useSelector } from 'react-redux';
import { doneTask, deleteTask } from '../../functions/tasks';
import { getTasksData } from '../../actions/tasks';

const DoneButtons = ({todoList}) => {

    // const todoList = useSelector((state) => state.todo.arrayName);
    const dispatch = useDispatch();

    const handleClickDelete = (e) => {
        e.preventDefault();
        const selectedTask = e.currentTarget.closest('.donelist-task');
        const idCurrentTask = parseInt(selectedTask.id);
        deleteTask(todoList, idCurrentTask);
        dispatch(getTasksData(todoList));
    }

    const handleClickUndone = (e) => {
        e.preventDefault();
        const selectedTask = e.currentTarget.closest('.donelist-task');
        const idCurrentTask = parseInt(selectedTask.id);
        doneTask(todoList, idCurrentTask);
    }

    return (
        <div className="done-buttons">
            <button type="button" onClick={handleClickUndone} className="material-symbols-outlined">settings_backup_restore</button>
            <button type="button" onClick={handleClickDelete} className="material-symbols-outlined">delete</button>
        </div>
    )
}

export default DoneButtons;