import Register from './components/user/Register';
import Profile from './components/user/Profile';
import 'bootstrap/dist/css/bootstrap.min.css';
import Login from './components/user/Login';
import ReactDOM from 'react-dom/client';
import { App } from './App';
import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
      <Routes>
        <Route path='/' element={ <App /> } >
        <Route path='login' element={ <Login /> } />
        <Route path='register' element={ <Register /> } />
        <Route path='profile' element={ <Profile /> } />
        </Route>
      </Routes>
    </Router>
  </React.StrictMode>
);