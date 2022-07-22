import './todopage.scss';
import PropTypes from 'prop-types';

import AddTaskForm from 'src/components/AddTaskForm';
import TodoList from 'src/components/TodoList';

const TodoPage = ({todolist}) => (
    <div className="todo-page">
        <AddTaskForm/>
        <TodoList todolist={todolist}/>
    </div>
)

TodoPage.propTypes = {
    todolist: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoPage;