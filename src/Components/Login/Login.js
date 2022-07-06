import React, { useState } from 'react'
import './Login.css'
import { Button } from 'semantic-ui-react'
import { useDispatch } from 'react-redux'
import { authActions } from '../../Store/authSlice'

const Login = () => {
  const [name, setName] = useState('')
  const [password, setPassword] = useState('')

  const dispatch = useDispatch()

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(authActions.login())
  }

  return (
    <div className='login-container'>
      <div className='form-control'>
        <h1>Login Form</h1>
        <input
          type='text'
          value={name}
          placeholder='Username'
          onChange={(e) => setName(e.target.value)}
        />
        <input
          type='text'
          value={password}
          placeholder='Password'
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button color='black' className='btn' onClick={handleSubmit}>
          Submit
        </Button>
      </div>
    </div>
  )
}

export default Login