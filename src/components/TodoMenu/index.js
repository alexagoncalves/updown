import './todomenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskContent, showTaskEditInput, getTasksData } from '../../actions/tasks';
import { doneTask, deleteTask } from '../../functions/tasks';

const TodoMenu = ({todoList}) => {
    
    const isShowingEditInput = useSelector((state) => state.todo.editing);
    // const todoList = useSelector((state) => state.todo.arrayName);
    const dispatch = useDispatch();
    
    const handleClickEdit = (e) => {
        e.preventDefault();
        const selectedTask = e.currentTarget.closest('.donelist-task');
        const idCurrentTask = parseInt(selectedTask.id);
        const currentTaskText = selectedTask.firstChild.textContent;
        dispatch(changeTaskContent(currentTaskText));
                        
        if ( isShowingEditInput === idCurrentTask ) {
            dispatch(showTaskEditInput(0));
        } else {
            dispatch(showTaskEditInput(idCurrentTask));
        }
    };

    const handleClickDone = (e) => {
        e.preventDefault();
        const selectedTask = e.currentTarget.closest('.donelist-task');
        const idCurrentTask = parseInt(selectedTask.id);
        doneTask(todoList, idCurrentTask);
    }

    const handleClickDelete = (e) => {
        e.preventDefault();
        const selectedTask = e.currentTarget.closest('.donelist-task');
        const idCurrentTask = parseInt(selectedTask.id);
        deleteTask(todoList, idCurrentTask);
        dispatch(getTasksData(todoList));
    }

    return (
        <div className="todomenu-buttons">
            <button type="button" onClick={handleClickEdit} className="material-symbols-outlined">edit_note</button>
            <button type="button" onClick={handleClickDone}className="material-symbols-outlined">task_alt</button>
            <button type="button" onClick={handleClickDelete}className="material-symbols-outlined">delete</button>
        </div>
    )
}

export default TodoMenu;