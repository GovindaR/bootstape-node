import React, { Component, PropTypes } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import { findDOMNode } from 'react-dom';
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
import { logIn, signUp } from '../service/user';

export default class SignUp extends Component {
  onSubmitValue = async () => {
    let username = document.getElementById('username').value;
    let email = document.getElementById('email').value;
    let password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmpassword').value;

    if (password !== confirmPassword) {
      alert('Password didnt match');
      return false;
    }
    let prefix;
    const payload = {
      username,
      email,
      password
    };
    console.log('My payload...', payload);
    const result = await signUp(payload);

    if (result && result.statusText == 'OK') {
      document.getElementById('username').innerText = '';
      alert('Succesfully registered');
    }
    console.log(result);

    // local storage
    // window.localStorage.setItem("Username", username);
    // window.localStorage.setItem("Email", email);
    // window.localStorage.setItem("password", password);
  };

  render() {
    return (
      <Router>
        <div className='main-w3layouts wrapper'>
          <h1>Creative SignUp Form</h1>
          <div className='main-agileinfo'>
            <div className='agileits-top'>
              <input
                id='username'
                className='text'
                type='text'
                name='Username'
                placeholder='Username'
                required=''
                // onClick={this.myValidate("username")}
              />
              <input
                id='email'
                className='text email'
                type='email'
                name='email'
                placeholder='Email'
                required=''
                // onClick={this.myValidate("email")}
              />
              <input
                id='password'
                className='text'
                type='password'
                name='password'
                placeholder='Password'
                required=''
              />
              <input
                id='confirmpassword'
                className='text w3lpass'
                type='password'
                name='password'
                placeholder='Confirm Password'
                required=''
              />
              <div className='wthree-text'>
                <label className='anim'>
                  <input type='checkbox' className='checkbox' required='' />
                  <span>I Agree To The Terms & Conditions</span>
                </label>
                <div className='clear'> </div>
              </div>
              {/* <Link to="/Login"> */}
              <input
                type='submit'
                value='SIGNUP'
                onClick={this.onSubmitValue}
              />
              {/* </Link> */}
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
      </Router>
    );
  }
}
