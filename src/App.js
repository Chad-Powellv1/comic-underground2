import { GlobalProvider } from './context/GlobalState';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Outlet } from "react-router-dom";
import { Home } from './components/home/Home';
import Login from './components/user/Login';
import Register from './components/user/Register';
import Profile from './components/user/Profile';
// import PrivateRoute from './common/privateroute';
import './App.css';

export const App = () => {
  return (
    <GlobalProvider>
      <Router>
        <Navbar />
        <Home />
        <Routes>
          <Route exact path='/login' element={<Login />} />
          <Route exact path='/register' element={<Register />} />
          <Route exact path='/profile' element={<Profile />} />
        </Routes>
      </Router>
      <Outlet />
    </GlobalProvider>
  );
};