import './todolist.scss';
import PropTypes from 'prop-types';


const TodoList = ({todolist}) => (
    <div className="todolist">
        <h2 className="todolist-title">To Do</h2>
        <ul className="todolist-tasklist">
            {todolist.filter(task => task.done === false).map(task => (
                <li className="donelist-task" key={task.id}>
                   {task.task}
                </li>
            ))}
        </ul>
    
        <h2 className="donelist-title">Done</h2>
        <ul className="donelist-tasklist">
            {todolist.filter(task => task.done === true).map(task => (
                <li className="donelist-task" key={task.id}>
                   {task.task}
                </li>
            ))}
        </ul>
    </div>
)

TodoList.propTypes = {
    todolist: PropTypes.arrayOf(PropTypes.object).isRequired,
};

export default TodoList;