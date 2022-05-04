import { GlobalProvider } from './context/GlobalState';
import { Navbar } from './components/Navbar';
import { Outlet } from "react-router-dom";
import { Home } from './components/home/Home';
import { Details } from './components/Details';
import './App.css';

export const App = () => {
  return (
    <GlobalProvider> 
      <Navbar/>
      <Home />
      <Details />
      <Outlet />
    </GlobalProvider>
  );
};