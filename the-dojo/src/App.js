import { BrowserRouter, Route, Switch } from 'react-router-dom';

//styles
import './App.css'

//pages & components
import Dashboard from './pages/dashboard/Dashboard';
import Signup from './pages/signup/Signup';
import Login from './pages/login/Login';
import Project from './pages/project/Project';
import Create from './pages/create/Create';
import Navbar from './components/navbar/Navbar';
import Sidebar from './components/sidebar/Sidebar';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Sidebar />
        <div className="container">
          <Navbar />
          <Switch>
            <Route exact path='/'>
              <Dashboard />
            </Route>
            <Route path='/create'>
              <Create />
            </Route>
            <Route path='/project/:id'>
              <Project />
            </Route>
            <Route path='/signup'>
              <Signup />
            </Route>
            <Route path='/login'>
              <Login />
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App
