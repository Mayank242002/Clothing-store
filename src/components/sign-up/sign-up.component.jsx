import React, { useState } from 'react';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';

import './sign-up.styles.scss';

function SignUp() {
  const [credential, setCredential] = useState({
    displayName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });

  async function Handlesubmit(event) {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = credential;
    if (password !== confirmPassword) {
      alert('password dont match');
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword(
        email,
        password
      );
      await createUserProfileDocument(user, { displayName });
      setCredential({
        displayName: '',
        email: '',
        password: '',
        confirmPassword: '',
      });
    } catch (error) {
      console.error(error);
    }
  }

  function Handlechange(event) {
    const { name, value } = event.target;
    setCredential((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  }

  const { displayName, email, password, confirmPassword } = credential;

  return (
    <div className='sign-up'>
      <h2 className='title'>I do not have an account</h2>
      <span>Sign up with your email and password</span>
      <form className='sign-up-form' onSubmit={Handlesubmit}>
        <FormInput
          type='text'
          name='displayName'
          value={displayName}
          onChange={Handlechange}
          label='displayName'
          required
        ></FormInput>
        <FormInput
          type='email'
          name='email'
          value={email}
          onChange={Handlechange}
          label='email'
          required
        ></FormInput>
        <FormInput
          type='password'
          name='password'
          value={password}
          onChange={Handlechange}
          label='password'
          required
        ></FormInput>
        <FormInput
          type='password'
          name='confirmPassword'
          value={confirmPassword}
          onChange={Handlechange}
          label='confirmPassword'
          required
        ></FormInput>
        <CustomButton type='submit'>SIGN UP</CustomButton>
      </form>
    </div>
  );
}

export default SignUp;
