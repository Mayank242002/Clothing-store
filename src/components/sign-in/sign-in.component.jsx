import React, { useState } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import { auth, SignInWithGoogle } from '../../firebase/firebase.utils';

function SignIn() {
  const [signin, SetSignin] = useState({ email: '', password: '' });

  async function HandleSubmit(event) {
    event.preventDefault();

    const { email, password}=signin;

    try{
      await auth.signInWithEmailAndPassword(email, password);
      SetSignin({email:'',password:''});
    }catch(error)
    {
      console.log(error);
    }
  };

  function HandleChange(event) {
    const { name, value } = event.target;
    SetSignin((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  }

  return (
    <div className='sign-in'>
      <h2>I already have an account</h2>
      <span>Sigin with your email and password</span>
      <form onSubmit={HandleSubmit}>
        <FormInput
          name='email'
          type='email'
          value={signin.email}
          label='email'
          HandleChange={HandleChange}
          required
        />

        <FormInput
          name='password'
          type='password'
          value={signin.password}
          label='password'
          HandleChange={HandleChange}
          required
        />
        <div className='buttons'>
          <CustomButton type='submit'>Sign in</CustomButton>
          <CustomButton type="button" onClick={SignInWithGoogle} isGoogleSignIn>
            Sign in with Google
          </CustomButton>
        </div>
      </form>
    </div>
  );
}

export default SignIn;
