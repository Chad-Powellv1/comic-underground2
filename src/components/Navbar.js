import { AiOutlineSearch } from 'react-icons/ai';
import comic from '../assets/comic.png';
import { Link } from 'react-router-dom';
import '../App.css';
import React from 'react';
import {useGlobalState} from '../context/GlobalState';
import { useNavigate } from 'react-router';




export const Navbar = () => {
    let navigate = useNavigate();
    const logout = () => {
        localStorage.clear();
        navigate("/")
        window.location.reload()
    }
    const [ state ] = useGlobalState();
  return (
    <>
        { state && (
        <div className='d-flex flex-row ml-3 p-3'>
            <div className='mr-auto'>
                <div className='header-wrapper'>
                    <span>Hello,</span>
                </div>
            </div>
        
        <div className='header-link'>
            { !state.currentUser && (
            <Link to='/login'style={{textDecoration: 'none', fontFamily: 'var(--ff-arial)', }}><span className="header-sell">Login</span></Link>)}
            { state.currentUser && (
            <button onClick={() => {logout()}}
                style={{
                    backgroundColor: 'transparent',
                    fontFamily: 'var(--ff-arial)',
                    border: 0,
                    marginBottom: '1.5rem',
                }}
            >
            <span className="header-sell">Logout</span>
            </button>)}
            <Link to='/register' style={{textDecoration: 'none', fontFamily: 'var(--ff-arial)'}}><span className="header-sell">Register</span></Link>
            {/* <Link to='/sell' style={{textDecoration: 'none', fontFamily: 'var(--ff-arial)'}}><span className="header-sell">Sell</span></Link>
            <Link to='/watchlist' style={{textDecoration: 'none', fontFamily: 'var(--ff-arial)'}}><span className="header-sell">Watchlist</span></Link> */}
            <Link to="/about" style={{textDecoration: 'none', color:'black'}}>About Us</Link>
        </div>
        </div>)}

        { state && (
        <div className='header'>
        <img className='header-logo' src={comic} alt='Comic Underground icon' />
            <div className='header-search'>
            <input className='header-searchInput' type='text' placeholder="Search"/>
            <AiOutlineSearch className='header-searchIcon' />
            </div>
        </div>)}


    </>
  )
}
