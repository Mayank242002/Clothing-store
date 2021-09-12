import React from 'react';

import './sign-in -and-sign-up.scss';
import SignIn from '../../components/sign-in/sign-in.component';
import SignUp from '../../components/sign-up/sign-up.component';

function SignInAndSignUpPage() {
  return (
    <div className='sign-in-and-sign-up'>
      <SignIn />
      <SignUp></SignUp>
    </div>
  );
}

export default SignInAndSignUpPage;
