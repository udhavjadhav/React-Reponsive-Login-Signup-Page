import './Signup.css'
import React from 'react';
import { Link } from 'react-router-dom';

function Signup() {
  const [name, setName] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [pass, setPass] = React.useState('');
  const [success, setSuccess] = React.useState('');
  const [nameError, setNameError] = React.useState('');
  const [emailError, setEmailError] = React.useState('');
  const [passError, setPassError] = React.useState('');
//   const navigate = useNavigate();

  const handleSubmit = (e) => {
    if (name === '' && email=== '' && pass === '') {
      setNameError('Please enter your name');
      setEmailError('Please enter your email');
      setPassError('Please enter your password');
    } else {
      setNameError('');
      setEmailError('');
      setPassError('');
      setSuccess('Login SuccessFul !')
    }

    if (name === '' ) {
      setNameError('Please enter your name');
      setSuccess('')
    } else {
      setEmailError('')
      setPassError('');
    }
    if (email === '' ) {
        setEmailError('Please enter your email');
        setSuccess('')
      } else {
        setNameError('');
        setPassError('');
      }
    if (pass === '' ) {
      setPassError('Please enter your password');
      setSuccess('')
    } else {
        setNameError('');
        setEmailError('')

    }
  }
  
  return (
    <div className='parent'>
    <div className="App">
      <h1>Create an Account</h1>
      <div className='username'>
        <label className='label'>Name</label>
        <input onChange={(e)=>setName(e.target.value)} className='user' type="text"/>
        <p className='error' style={{color: 'red'}}>{nameError}</p>
      </div>
      <div className='emailId'>
        <label className='label'>Email</label>
        <input onChange={(e)=>setEmail(e.target.value)} className='email' type="email"/>
        <p className='error' style={{color: 'red'}}>{emailError}</p>
      </div>
      <div className='password'>
      <label className='label'>Password</label>
        <input onChange={(e)=>setPass(e.target.value)} className='pass' type="password"/>
        <p className='error' style={{color: 'red'}}>{passError}</p>
      </div>
      <div className='check'>
        <input type="checkbox" />
        <span>Remember me</span>
      </div>
      <div className='button'>
        <button onClick={handleSubmit} className='btn'>Submit</button>
        <h4 style={{color:'green', textAlign:'center'}}>{success}</h4>
      </div>
      <div>
        Already have an account? <Link to='/login'><span style={{cursor:'pointer'}} >Log In</span></Link>
      </div>
    </div>
    </div>
  )
}

export default Signup;