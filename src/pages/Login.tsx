import React from 'react';
import Form from '../components/Form'
const loginForm = [{
  name: 'username',
  label: 'Username',
  type: 'string',
  value: '',
  validation: {
    required: true,
    minLength: 0,
    maxLength: 10
  }
}, {
  name: 'password',
  label: 'Password',
  type: 'password',
  value: '',
  validation: {
    required: true,
    minLength: 0,
    maxLength: 10
  }
}
]
const onLoginSubmit = (value: Record<string, any>) => {
  console.log('on submit login ', value)
}

function Login() {
  return (
    <div className="login">
      <Form
        formFields={loginForm}
        onSubmit={onLoginSubmit}
      />

    </div>
  );
}

export default Login;