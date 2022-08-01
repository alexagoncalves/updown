import './todopage.scss';
import PropTypes from 'prop-types';

import AddTaskForm from 'src/components/AddTaskForm';
import TodoList from 'src/components/TodoList';

const TodoPage = ({toDoList, addNewTask, setIsEditing, isEditing, newTaskValue, setNewTaskValue, editTask, doneTask, deleteTask, errorMessage, setErrorMessage}) => {
    
    return (
        <div className="todo-page">
            <AddTaskForm addNewTask={addNewTask} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>
            <TodoList toDoList={toDoList} setIsEditing={setIsEditing} isEditing={isEditing} newTaskValue={newTaskValue} setNewTaskValue={setNewTaskValue} editTask={editTask} doneTask={doneTask} deleteTask={deleteTask}/>
        </div>
    )
}

TodoPage.propTypes = {
    toDoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    newTask: PropTypes.string,
    addNewTask: PropTypes.func,
    setIsEditing: PropTypes.func,
    isEditing: PropTypes.number,
    newTaskValue: PropTypes.string,
    setNewTaskValue: PropTypes.func,
    editTask: PropTypes.func,
    doneTask: PropTypes.func,
    deleteTask: PropTypes.func,
};

export default TodoPage;