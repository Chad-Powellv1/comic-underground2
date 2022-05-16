import comic from '../assets/comic.png';
import { Link } from 'react-router-dom';
import '../App.css';
import React, { useState, useEffect } from 'react';
import { useGlobalState } from '../context/GlobalState';
import { API_URL } from '../services/auth.constants';
import { useNavigate } from 'react-router';
import request from '../services/api.request';


export const Navbar = () => {
    let navigate = useNavigate();
    const [state] = useGlobalState();
    const [ name, setName ] = useState({
        id: "user_id",
        email: '',
        username:'',
        first_name: '',
        last_name: '',
    });

    // useEffect(() => {
    //     request({ 
    //         url: API_URL + 
    //         'users/' + 
    //         state.currentUser?.user_id,
    //         method: 'get',
    //         data: name,
    //     })
    //         .then(resp => {
    //             setName(resp.data)
    //             localStorage.setItem('name', resp.data.username)
    //         })
    // }, [])

    const logout = () => {
        localStorage.clear();
        navigate("/")
        window.location.reload()
    }

    return (
        <>
            {state && (
                <div className='d-flex flex-row ml-3 p-3'>
                    <div className='mr-auto'>
                            <div className='header-wrapper'>
                                <span>Hello, { name.username } </span>
                            </div>
                    </div>
                    <div className='header-link'>
                        {!state.currentUser && (
                            <>
                            <Link to='/login' style={{ textDecoration: 'none', fontFamily: 'var(--ff-arial)', }}><span className="header-sell">Login</span></Link>
                            <Link to='/register' style={{ textDecoration: 'none', fontFamily: 'var(--ff-arial)' }}><span className="header-sell">Register</span></Link>
                            </>
                            )}
                        {state.currentUser && (
                            <button onClick={() => { logout() }}
                                style={{
                                    backgroundColor: 'transparent',
                                    fontFamily: 'var(--ff-arial)',
                                    border: 0,
                                    marginBottom: '1.5rem',
                                }}
                            >
                                <span className="header-sell">Logout</span>
                            </button>)}
                    </div>
                </div>)}
            {state && (
                <div className='header'>
                    <img className='header-logo' src={comic} alt='Comic Underground icon' />
                </div>)}
        </>
    )
}
