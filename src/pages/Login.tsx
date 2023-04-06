import React, { FC, useState } from 'react';
import { signIn } from '../helpers/amplifyHelpers';

const Login: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  return (
    <div>
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
        }}>
        Sign In
      </button>
    </div>
  );
};

export default Login;
