import { useGlobalState } from "../../context/GlobalState";
import AuthService from "../../services/auth.service";
import { useNavigate } from 'react-router-dom';
import React, { useState } from "react";


import jwtDecode from "jwt-decode";
import { Modal } from '../Modal';

const Login = ({ isOpen, setIsOpen }) => {
    let navigate = useNavigate();
    const [state,dispatch] = useGlobalState();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    

    const handleLogin = (e) => {
        e.preventDefault();

        AuthService
            .login(username, password)
            .then(async (resp) => {
                let data = jwtDecode(resp.access)
                await dispatch({
                    currentUserToken: resp.access,
                    currentUser: data
                })
                navigate('/')
            });
    }

    return (
        <Modal isOpen={isOpen} close={() => setIsOpen(false)}>
        <div className="login">
            <div className="login-content">
                <div className="login-container">
                    <div className="login-title" style={{
                        textAlign:'center',
                        fontSize:'var(--fs-400)',
                        paddingBottom:'1.5rem',
                        fontWeight: 'bold',
                         }}>Login</div>
                    <div className="login-subtitle"></div>
                    <div className="login-form">
                        <div>
                            <label htmlFor="username" style={{
                                textAlign:'center',
                                marginLeft:'3rem',
                                paddingRight:'0.5rem',
                                paddingBottom:'1.25rem',
                                }}
                            >Username:</label>
                            <input
                                type="text"
                                id="username"
                                name="username"
                                onChange={(e) => setUsername(e.target.value)}
                                required
                            />
                        </div>
                        <div>
                            <label htmlFor="pass" style={{
                                textAlign:'center',
                                marginLeft:'3rem',
                                paddingRight:'0.8rem',
                                paddingBottom:'0.75rem',
                                }}>Password:</label>
                            <input
                                type="password"
                                id="pass"
                                name="password"
                                minLength="8"
                                required
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>
                        <button className="login-btn" onClick={handleLogin} style={{
                                float: 'right',
                                backgroundColor:'var(--clr-blue)'
                                }}>
                            Login
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </Modal>
  )
}
export default Login