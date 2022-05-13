import AuthService from "../../services/auth.service";
import React, { useState } from "react"
import { Modal } from "../Modal";

import { useNavigate } from 'react-router-dom';

const Register = () => {
  let navigate = useNavigate();
  const [user, setUser] = useState({
    username: "",
    password: "",
    passwordConf: "",
    firstName: "",
    lastName: "",
    email: "",
  })

  const handleChange = (key, value) => {
    setUser({
      ...user,
      [key]: value
    })
  }

  const handleRegister = (e) => {
    e.preventDefault();
    AuthService.register(user);
    navigate('/')
  }

  return (
    <Modal>
    <div className="c-form">
      <form onSubmit={handleRegister}>
      <div className="login-title"
       style={{
        textAlign:'center',
        fontSize:'var(--fs-400)',
        paddingBottom:'1.5rem',
        fontWeight: 'bold',
        }}>Registration
      </div>
        <div>
          <label htmlFor="username"
            style={{
              paddingRight: '.4rem',
              paddingBottom: '.75rem',
            }}
          >Username:</label>
          <input
            type="text"
            id="username"
            name="username"
            onChange={(e) => handleChange('username', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="email"
            style={{
              paddingRight: '2.5rem',
              paddingBottom: '.75rem',
            }}
          >Email:</label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={(e) => handleChange('email', e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="pass"
            style={{
              paddingRight: '.7rem',
              paddingBottom: '.75rem',
            }}
          >Password:</label>
          <input
            type="password"
            id="pass"
            name="password"
            minLength="8"
            placeholder="8 characters required 🦸 "
            required
            onChange={(e) => handleChange('password', e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="passConf"
            style={{
              paddingRight:'.3rem',
              paddingBottom: '.75rem',
            }}
          >Confirm Password:</label>
          <input
            type="password"
            id="passConf"
            name="password"
            minLength="8"
            required
            onChange={(e) => handleChange('passwordConf', e.target.value)} />
        </div>
        <div>
          <label htmlFor="firstName"
            style={{
              paddingRight:'3.5rem',
              paddingBottom: '.75rem',
            }}
            >First Name:</label>
          <input
            type="text"
            id="firstName"
            name="fname"
          
            required
            onChange={(e) => handleChange('firstName', e.target.value)} />
        </div>
        <div>
          <label htmlFor="lastName"
            style={{
              paddingRight:'3.6rem',
              paddingBottom: '.75rem',
            }}
          >Last Name:</label>
          <input
            type="text"
            id="lastName"
            name="lname"
            required
            onChange={(e) => handleChange('lastName', e.target.value)} />
        </div>
        <input
          type="submit"
          value="Register"
          disabled={(
            user.password &&
            user.password.length >= 8 &&
            user.password === user.passwordConf &&
            user.firstName &&
            user.lastName &&
            user.email
          ) ? false : true}
          style={{
            float: 'right',
            backgroundColor:'var(--clr-blue)'
          }}
        />
      </form>
    </div>
    </Modal>
  )

}

export default Register