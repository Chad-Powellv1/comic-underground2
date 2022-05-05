import { GlobalProvider } from './context/GlobalState';
import { Navbar } from './components/Navbar';
import { Outlet } from "react-router-dom";

// import { Details } from './components/Details';
import './App.css';
// import { Home } from './components/home/Home';


export const App = () => {
  return (
    <GlobalProvider> 
      <Navbar/>
      {/* <Home /> */}
      {/* <Details /> */} 
      <Outlet />
    </GlobalProvider>
  );
};