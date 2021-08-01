import React, { useState } from 'react'; 
import {v4 as uuidv4} from 'uuid';
import { BrowserRouter as Router, Route } from 'react-router-dom';

import Tasks from './components/Tasks';
import AddTask from './components/AddTask'; 
import Header from './components/Header'; 
import TaskDetails from './components/TaskDetails';

import './App.css';

const App = () => {
  const [tasks, setTasks] = useState([
    {
      id: '1', 
      title: 'Estudar programação', 
      completed: false, 
    }, 
    {
      id: '2', 
      title: 'Ler livros', 
      completed: true,       
    }, 
  ]);

  const handleTaskClick = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) return {...task, completed: !task.completed}
      return task;
    });

    setTasks(newTasks);

  };

  // pt4 - função que atualiza a lista
  const handleTaskAddition = (taskTitle) => {
    const newTasks = [...tasks, {
      title: taskTitle, 
      id: uuidv4(), 
      completed: false,
    }];

    setTasks(newTasks);
  }

  const handleAddTaskDelete = (taskId) => {
    const newTasks = tasks.filter(task => task.id !== taskId);

    setTasks(newTasks);
  }

  return (
    <Router>
      <div className='container'>
        <Header />
        <Route 
          path='/' 
          exact // só vai ser utilizado para padronizar a tela carregada como inicial representando /
          render={() => (
            <>
              <AddTask handleTaskAddition={handleTaskAddition} />
              <Tasks 
                tasks={tasks} 
                handleTaskClick={handleTaskClick} 
                handleAddTaskDelete={handleAddTaskDelete} 
              />
            </>
          )}
        />
        <Route 
          path='/:taskTitle'  // o componente vai ser chamado passando um parâmetro
          exact 
          component={TaskDetails}
        />
      </div>
    </Router>
  );
};

export default App;