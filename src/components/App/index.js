import { useState } from 'react';

// == Project imports
import Footer from 'src/components/Footer';
import Header from 'src/components/Header';
import MainMenu from 'src/components/MainMenu';
import TodoPage from 'src/components/TodoPage';
import Welcome from 'src/components/Welcome';

// == Same file imports
import './app.scss'

// == Data imports
import datas from 'src/datas/datas';

// == Composant
const App = () => {

  // == lists states
    const [ toDoList, setToDoList ] = useState(datas.todolist);
    const [expensesList, setExpensesList] = useState(datas.expenseslist);

  // == new task state
    
  
  const addNewTask = (newTask) => {
    let listCopy = [...toDoList];
    listCopy.push({id: toDoList.length + 1, task: newTask, done: false});
    setToDoList(listCopy);
    };

  return(
    <div className="app">
      <Header/>
      <TodoPage toDoList={toDoList} addNewTask={addNewTask}/>
      {/* <Welcome user={datas.userslist}/>
      <MainMenu/> */}
      <Footer/>
    </div>
  );
};

// == Export
export default App;
