import { findDOMNode } from 'react-dom';
import { logIn, signUp } from '../service/user';
import React, { Component, PropTypes } from 'react';
import {
  Button,
  ControlLabel,
  Form,
  FormControl,
  FormGroup,
  FieldGroup,
  Checkbox,
  Radio
} from 'react-bootstrap';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';

export default class Login extends Component {
  onSubmitValue = async () => {
    let username1 = document.getElementById('username1').value;
    let password1 = document.getElementById('password1').value;

    const payload = {
      username: username1,
      password: password1
    };
    console.log('My payload...', payload);
    // cHECK if user is validate or not
    const result = await logIn(payload);
    console.log('tesut', result);
    if (result.status === '200') {
      alert('Succesfully registered');
    } else {
      alert('Username/password is incorret');
    }
    console.log(result);
  };
  render() {
    return (
      <div className='main-w3layouts wrapper'>
        <h1>Login Form</h1>
        <div className='main-agileinfo'>
          <div className='agileits-top'>
            <input
              id='username1'
              className='text'
              type='text'
              name='Username'
              placeholder='Username'
              required=''
            />
            <input
              id='password1'
              className='text'
              type='password'
              name='password'
              placeholder='Password'
              required=''
            />
            <div className='wthree-text'>
              <div className='clear'> </div>
            </div>
            <input
              type='submit'
              value='LOGIN IN'
              onClick={this.onSubmitValue}
            />
            <p>
              Don't have an Account? <a href='#'> Login Now!</a>
            </p>
          </div>
        </div>
        <ul className='colorlib-bubbles'>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
      </div>
    );
  }
}
