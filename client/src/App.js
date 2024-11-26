import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import './App.css';
import './bootstrap.min.css';
import Header from './components/Header/Header';
import LandingPage from './components/LandingPage/LandingPage';
import MyTasks from './components/MyTasks/MyTasks';
import LoginPage from './components/LoginPage/LoginPage';
import RegisterPage from './components/RegisterPage/RegisterPage';
import CreateTasks from './components/CreateTask/CreateTasks';
import SingleTask from './components/SingleTask';

function App() {
  return (
    <Router>
      <Header />
      <main>
          <Route path="/" component={LandingPage} exact/>
          <Route path="/login" component={LoginPage}/>
          <Route path="/register" component={RegisterPage}/>
          <Route path="/createTask" component={CreateTasks}/>
          <Route path="/task/:id" component={SingleTask}/>
          <Route path="/mytasks" component={MyTasks} />
      </main>
    </Router>
  );
}

export default App;
