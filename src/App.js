import { GlobalProvider } from './context/GlobalState';
import { Navbar } from './components/Navbar';
import { Outlet } from "react-router-dom";
import './App.css';


export const App = () => {
  return (
    <GlobalProvider> 
      <Navbar/>
      <Outlet />
    </GlobalProvider>
  );
};