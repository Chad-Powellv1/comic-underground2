import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import Register from './components/user/Register';
import Profile from './components/user/Profile';
import Login from './components/user/Login';
import { App } from './App';

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