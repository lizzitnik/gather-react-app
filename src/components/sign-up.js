import React from 'react'

import '../styles/sign-up.css'
//import {reduxForm, Field} from 'redux-form';

export default function SignUp() {
  return (
    <form className='signup-form'>
      <label htmlFor='name'>Name</label>
      <input name='name' id='name' type='text' component='input' />
      <label htmlFor='email'>Email</label>
      <input name='email' id='email' type='email' component='input' />
      <label htmlFor='password'>Password</label>
      <input name='password' id='password' type='password' component='input' />
      <label htmlFor='confirm-password'>Confirm Password</label>
      <input name='confirm-password' id='confirm-password' type='password' component='input' />
      <button type='submit'>Join Us!</button>
    </form>
  )
}
