import React,  { useState } from 'react';
import { formErrorMessage, fieldErrorMessage, FormModel } from '../types/form'

interface CustomFormProps {
  formModel: FormModel;
  children: any;
  onSubmit: (formModel: FormModel, formData: { [key: string]: any }, formErrors: formErrorMessage) => void;
  [any: string]: any,
}


const Form: React.FC<CustomFormProps> = ({ formModel, children, onSubmit }) => {
  const [formData, setFormData] = useState({} as Record<string, any>);
  const [formModelState, setFormModelState] = useState(formModel)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isFormError = false
    const fieldKeys = Object.keys(formModelState.fields)
    let formErrors: formErrorMessage = {}
    fieldKeys.forEach((fieldName) => {
      const field = formModelState.fields[fieldName]
      formData[fieldName] = field.value
      field.errors = []
      console.log(field.value)
      if (field.validation && field.validation.required && !formData[fieldName]) {
        isFormError = true
        field.errors = ["This field is required"];
        formErrors[fieldName]= field.errors
      }
      console.log(formData[fieldName].length, field.validation.minLength)
      if (field.validation && field.validation.minLength && formData[fieldName] && formData[fieldName].length < field.validation.minLength) {
        isFormError = true
        field.errors = [`This field must be at least ${field.validation.minLength} characters`];

        formErrors[fieldName]= field.errors
      }
      if (field.validation && field.validation.maxLength && formData[fieldName] && formData[fieldName].length > field.validation.maxLength) {
        isFormError = true
        field.errors = [`This field must be less than ${field.validation.maxLength} characters`];
        formErrors[fieldName]= field.errors
      }
      console.log(fieldName, field.errors)
    });
    onSubmit(formModel, formData, formErrors);
  };

  return (
    <form onSubmit={handleSubmit}>
      {children}
      <button type="submit">Submit</button>

    </form>
  );
};

export default Form;
