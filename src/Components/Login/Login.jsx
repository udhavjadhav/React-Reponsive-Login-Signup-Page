import './Login.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  const [user, setUser] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [userError, setUserError] = React.useState('');
  const [passError, setPassError] = React.useState('');

  const handleSubmit = (e) => {
    if (user === '' && pass === '') {
      setUserError('Please enter your username');
      setPassError('Please enter your password');
    } else {
      setUserError('');
      setPassError('');
      setSuccess('Login SuccessFul !')
    }
    if (user === '' ) {
      setUserError('Please enter your username');
      setSuccess('')
    } else {
      setPassError('');
    }
    if (pass === '' ) {
      setPassError('Please enter your password');
      setSuccess('')
    } else {
      setPassError('');

    }
  }
  
  return (
    <div className='parent'>
    <div className="login">
      <h1>Login Form</h1>
      <div className='username'>
        <label className='label'>Username</label>
        <input onChange={(e)=>setUser(e.target.value)} className='user' type="text"/>
        <p className='error' style={{color: 'red'}}>{userError}</p>
      </div>
      <div className='password'>
      <label className='label'>Password</label>
        <input onChange={(e)=>setPass(e.target.value)} className='pass' type="password"/>
        <p className='error' style={{color: 'red'}}>{passError}</p>
      </div>
      <div className='forget'>
        <a href=''>forget password</a>
      </div>
      <div className='button'>
        <button onClick={handleSubmit} className='btn-grad'>Submit</button>
        <h4 style={{color:'green', textAlign:'center'}}>{success}</h4>
      </div>
      <div>
        Already have an account? <Link to='/signup'><span style={{cursor:'pointer'}} >Sign Up</span></Link>
      </div>
    </div>
    </div>
  )
}

export default Login;