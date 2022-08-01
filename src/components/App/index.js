import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import axios from 'axios';

// == Project imports
import ExpensesPage from 'src/components/ExpensesPage';
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
  const [toDoList, setToDoList] = useState(datas.todolist);
  const [expensesList, setExpensesList] = useState(datas.expenseslist);
  const [isEditing, setIsEditing] = useState(0);
  const [newTaskValue, setNewTaskValue] = useState('');
  const [currentAmount, setCurrentAmount] = useState(datas.current.amount);
  const [isEditingAmount, setIsEditingAmount] = useState('');
  const [newOperation, setNewOperation] = useState('')
  const [newAmount, setNewAmount] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  
  let listCopy = [...toDoList];
  let expensesCopy = [...expensesList];

  const addNewTask = (newTask) => {
    listCopy.push({id: toDoList.length + 1, task: newTask, done: false});
    setToDoList(listCopy);
  };

  const addNewOperation = (newOperation, newAmount, buttonId) => {
    
    if (buttonId === 'add_button') {
      expensesCopy.push({id: expensesList.length + 1, place: newOperation, amount: parseFloat(newAmount), insert: 'keyboard_arrow_up'});
      setCurrentAmount(currentAmount + parseFloat(newAmount));
    } else {
      expensesCopy.push({id: expensesList.length + 1, place: newOperation, amount: parseFloat(newAmount), insert: 'keyboard_arrow_down'});
      setCurrentAmount(currentAmount - parseFloat(newAmount));
    } 
    setExpensesList(expensesCopy);
  }
    
  const editTask = () => {
    const taskInEdit = listCopy.find(task => task.id === isEditing);
    taskInEdit.task = newTaskValue;
  }
  
  const doneTask = (idCurrentTask) => {
    const taskInEdit = listCopy.find(task => task.id === idCurrentTask);
    if (taskInEdit.done === false) {
      taskInEdit.done = true;
    } else {
      taskInEdit.done = false;
    }
  }

  const deleteTask = (idCurrentTask) => {
    const taskInEdit = listCopy.find(task => task.id === idCurrentTask);
    const index = listCopy.indexOf(taskInEdit);
    listCopy.splice(index, 1);
    setToDoList(listCopy);
  }

  const deleteItem = (idCurrentItem) => {
    const itemInEdit = expensesCopy.find(item => item.id === idCurrentItem);
    const index = expensesCopy.indexOf(itemInEdit);
    expensesCopy.splice(index, 1);
    setExpensesList(expensesCopy);
  }

  return(
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<> <Welcome user={datas.userslist}/> <MainMenu/> </>} />
        
        <Route path="/todolist" element={<TodoPage toDoList={toDoList} addNewTask={addNewTask} setIsEditing={setIsEditing} isEditing={isEditing} newTaskValue={newTaskValue} setNewTaskValue={setNewTaskValue} editTask={editTask} doneTask={doneTask} deleteTask={deleteTask} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>} />
        
        <Route path="/expenses" element={<ExpensesPage expensesList={expensesList} setExpensesList={setExpensesList} currentAmount={currentAmount} setCurrentAmount={setCurrentAmount} isEditingAmount={isEditingAmount} setIsEditingAmount={setIsEditingAmount} newOperation={newOperation} setNewOperation={setNewOperation} newAmount={newAmount} setNewAmount={setNewAmount} addNewOperation={addNewOperation} deleteItem={deleteItem} errorMessage={errorMessage} setErrorMessage={setErrorMessage}/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
};

// == Export
export default App;
