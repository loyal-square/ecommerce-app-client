import React, { FC, useState } from 'react';
import { signIn, signOut } from '../helpers/amplifyHelpers';
import Auth, { CognitoHostedUIIdentityProvider } from '@aws-amplify/auth';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
      <button
        onClick={() => Auth.federatedSignIn({ provider: CognitoHostedUIIdentityProvider.Google })}
      >
        Open Google
      </button>
      <input
        type="text"
        placeholder="email"
        onChange={(evt) => {
          setEmail(evt.target.value);
        }}
      />
      <input
        type="text"
        placeholder="password"
        onChange={(evt) => {
          setPassword(evt.target.value);
        }}
      />
      <button
        onClick={() => {
          signIn(email, password);
        }}
      >
        Sign In
      </button>
      <button
        onClick={() => {
          signOut();
        }}
      >
        Sign Out
      </button>
    </div>
  );
};

export default Login;
