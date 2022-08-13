import { useEffect, useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

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
import { getTasksData } from '../../actions/tasks';
import { getCurrency, getCurrentAmountData, getExpensesData } from '../../actions/expenses';

// == Composant
const App = () => {
  
  const dispatch = useDispatch();
  
  useEffect(() => {
    dispatch(getTasksData(datas.todolist));
    dispatch(getExpensesData(datas.expenseslist));
    dispatch(getCurrentAmountData(datas.current.amount));
    dispatch(getCurrency(datas.current.currency));
  }, [])
  

  return(
    <div className="app">
      <Header/>
      <Routes>
        <Route path="/" element={<> <Welcome user={datas.userslist}/> <MainMenu/> </>} />
        
        <Route path="/todolist" element={<TodoPage/>} />
        
        <Route path="/expenses" element={<ExpensesPage/>} />
        
      </Routes>
      <Footer/>
    </div>
  );
};

// == Export
export default App;
