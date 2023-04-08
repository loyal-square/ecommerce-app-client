import React, { FC, useState } from 'react';
import { confirmSignUp, signUp } from '../helpers/amplifyHelpers';

const Register: FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [code, setCode] = useState('');

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
          signUp(email, password);
        }}>
        Sign In
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
        placeholder="code"
        onChange={(evt) => {
          setCode(evt.target.value);
        }}
      />
      <button
        onClick={() => {
          confirmSignUp(email, code);
        }}>
        Verify
      </button>
    </div>
  );
};

export default Register;
