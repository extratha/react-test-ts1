import React, { useEffect, useState } from 'react';
import Form from '../components/Form'
import Field from '../components/Field'
import InputText from '../components/inputs/Input';
import { FormModel, formErrorMessage } from '../types/form';
import { render } from '@testing-library/react';
const loginFormModel = {
  fields: {
    username: {
      name: 'username',
      label: 'Username',
      type: 'string',
      value: '',
      validation: {
        required: true,
        minLength: 3,
        maxLength: 10
      }
    },
    password: {
      name: 'password',
      label: 'Password',
      type: 'password',
      value: '',
      validation: {
        required: true,
        minLength: 3,
        maxLength: 10
      }
    }
  }
} as FormModel
function Login() {
  const [loginForm, setLoginForm] = useState(loginFormModel)
  const [formErrors, setFormErrors] = useState({} as formErrorMessage)
  const onLoginSubmit = async (formModel: FormModel, value: Record<string, any>, errors: formErrorMessage) => {
    setLoginForm(formModel)
    await setFormErrors(errors)
    if (Object.keys(errors).length) {
      console.log('validate failed ')
    }
    console.log('on submit login ', formModel, formErrors)

  }
  return (
    <div className="login">
      <Form
        formModel={loginForm}
        onSubmit={onLoginSubmit}
      >
        <div>
          <Field
            fieldModel={loginForm.fields.username}
            errors={formErrors.username}
          >
            <InputText
              fieldModel={loginForm.fields.username}
            />
          </Field>
          ::
          <Field
            fieldModel={loginForm.fields.password}
            errors={formErrors.password}
          >
            <InputText
              fieldModel={loginForm.fields.password}
            />
          </Field>
        </div >
      </Form >

    </div >
  );
}

export default Login;