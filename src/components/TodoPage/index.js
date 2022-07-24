import './todopage.scss';
import PropTypes from 'prop-types';

import AddTaskForm from 'src/components/AddTaskForm';
import TodoList from 'src/components/TodoList';

const TodoPage = ({toDoList, addNewTask}) => (
    <div className="todo-page">
        <AddTaskForm addNewTask={addNewTask}/>
        <TodoList toDoList={toDoList}/>
    </div>
)

TodoPage.propTypes = {
    toDoList: PropTypes.arrayOf(PropTypes.object).isRequired,
    newTask: PropTypes.string,
    addNewTask: PropTypes.func,
    handleChange: PropTypes.func,
    handleSubmit: PropTypes.func,
};

export default TodoPage;