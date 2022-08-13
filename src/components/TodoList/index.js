import './todolist.scss';
import DoneButtons from 'src/components/DoneButtons';
import TodoMenu from 'src/components/TodoMenu';
import { useDispatch, useSelector } from 'react-redux';
import { changeTaskContent, getTasksData, showTaskEditInput, showTaskMenu } from '../../actions/tasks';
import { editTask } from '../../functions/tasks';
import { useEffect } from 'react';


const TodoList = () => {

    const todoList = useSelector((state) => state.todo.arrayName);
    const isShowingTaskMenu = useSelector((state) => state.todo.selectedTask);
    const isShowingEditInput = useSelector((state) => state.todo.editing);
    const taskContent = useSelector((state) => state.todo.content);
    
    const dispatch = useDispatch();
    
    useEffect(() => {
    
    })
    

    const handleClickList = (e) => {
        const idCurrentTask = parseInt(e.target.id);
        if (isShowingTaskMenu === idCurrentTask ) {
            dispatch(showTaskMenu(0))
        } else {
            dispatch(showTaskMenu(idCurrentTask));
        }
    };

    const handleEditChange = (e) => {
        dispatch(changeTaskContent(e.currentTarget.value));
    }

    const handleEditSubmit = (e) => {
        e.preventDefault();
        editTask(todoList, isShowingEditInput, taskContent);
        dispatch(showTaskEditInput(0));
      }

    return(
        <div className="todolist">
            <h2 className="todolist-title">To Do</h2>
            <ul className="todolist-tasklist">
                {todoList.filter(task => task.done === false).map((task) => (
                    <li className="donelist-task" id={task.id} key={task.id} onClick={handleClickList}>
                    
                    { isShowingEditInput === task.id ?
                        <>
                        <form className="todolist-form__edit" onSubmit={handleEditSubmit}>
                        <input type="text" value={taskContent} className="todolist-task__edit" onChange={handleEditChange} /> 
                        <button type="button" onClick={handleEditSubmit} className="material-symbols-outlined todolist-edit__button">published_with_changes</button>
                        </form>
                        </> :
                        task.task }

                    { isShowingTaskMenu === task.id ? <TodoMenu todoList = {todoList}/> : null }
                    </li>
                ))}
            </ul>
        
            <h2 className="donelist-title">Done</h2>
            <ul className="donelist-tasklist">
                {todoList.filter(task => task.done === true).map(task => (
                    <li className="donelist-task" id={task.id} key={task.id} onClick={handleClickList}>
                    {task.task}
                    
                    { isShowingTaskMenu === task.id ? <DoneButtons todoList = {todoList}/> : null }

                    </li>
                ))}
            </ul>
        </div>
    )
}

export default TodoList;