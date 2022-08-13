import './addtaskform.scss';
import { useDispatch, useSelector } from 'react-redux';
import { newTaskToList, getTasksData, showErrorMessage } from '../../actions/tasks';
import { addNewTask } from '../../functions/tasks';

const AddTaskForm = () => {
    // const [newTask, setNewTask] = useState('');

    const newTaskValue = useSelector((state) => state.todo.taskValue);
    const todoList = useSelector((state) => state.todo.arrayName);
    const errorMessage = useSelector((state) => state.todo.message);

    const dispatch = useDispatch();

    const handleChange = (e) => {
        dispatch(newTaskToList(e.currentTarget.value));
      };
      
      const handleSubmit = (e) => {
        e.preventDefault();

        if (newTaskValue !== "") {
            addNewTask(todoList, newTaskValue);
            dispatch(newTaskToList(''));
            dispatch(showErrorMessage(''));
            dispatch(getTasksData([...todoList]));
        } else {
            dispatch(showErrorMessage('Please make sure the field is filled in correctly.'))
        }
            
      }

    return (
        <>
        <p className="form-error">{errorMessage}</p>
        <div className="form" onSubmit={handleSubmit}>
            <form className="form-new">
                <input type="text" className="form-new__task" size="5" placeholder="New Task" value={newTaskValue} onChange={handleChange} />
            </form>
                <button type="button" onClick={handleSubmit} className="material-symbols-outlined">add_task</button>
        </div>
        </>
    )
}

export default AddTaskForm;