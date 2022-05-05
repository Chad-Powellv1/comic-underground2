import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import ReactDOM from 'react-dom/client';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';

import Register from './components/user/Register';
import Profile from './components/user/Profile';
import Login from './components/user/Login';

import { App } from  './App';
import { Details } from './components/Details';
import { Home } from './components/home/Home';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<App />}>
            <Route path='' element={<Home />} />
            <Route path='login' element={<Login />} />
            <Route path='register' element={<Register />} />
            <Route path='profile' element={<Profile />} />
            <Route path='details/:auction' element={<Details />} />
          </Route>
        </Routes>
      </Router>
  </React.StrictMode>
);