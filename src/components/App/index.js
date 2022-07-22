import {useState} from 'react';

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

  const [newTask, setNewTask] = useState('');
  const handleChange = (e) => {
    setNewTask(e.currentTarget.value)
  };
  const addNewTask = (e) => {
    setNewTask(e.currentTarget.value)
  };

  return(
    <div className="app">
      <Header/>
      <TodoPage todolist={datas.todolist} newTask={newTask} addNewTask={addNewTask}/>
      {/* <Welcome user={datas.userslist}/>
      <MainMenu/> */}
      <Footer/>
    </div>
  );
};

// == Export
export default App;
