import React, { useState } from 'react';
import { FormField } from '../types/form'

interface CustomFormProps {
  formFields: FormField[];
  onSubmit: (formData: { [key: string]: any }) => void;
}

const Form: React.FC<CustomFormProps> = ({ formFields, onSubmit }) => {
  const [formData, setFormData] = useState({} as Record<string, any>);
  const [errors, setErrors] = useState({} as Record<string, any>);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    setFormData({ ...formData, [name]: value });
    const fieldModel = formFields.find((field) => field.name == name)
    if (fieldModel) {
      fieldModel.value = formData[name]
    }
    console.log('FieldModel : ', fieldModel)
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let isValid = true;
    const newErrors: Record<string, any> = {};
    formFields.forEach((field) => {
      console.log(field.value)
      if (field.validation && field.validation.required && !formData[field.name]) {
        isValid = false;
        newErrors[field.name] = "This field is required";
      }
      if (field.validation && field.validation.minLength && formData[field.name] && formData[field.name].length < field.validation.minLength) {
        isValid = false;
        newErrors[field.name] = `This field must be at least ${field.validation.minLength} characters`;
      }
    });
    if (!isValid) {
      setErrors(newErrors);
    } else {
      setErrors({})
      onSubmit(formData);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      {formFields.map((field, index) => (
        <div key={index}>
          <label>
            {field.label}
            <input type={field.type} name={field.name} onChange={handleChange} />
          </label>
          {errors[field.name] && <p>{errors[field.name]}</p>}
        </div>
      ))}
      <button type="submit">Submit</button>
    </form>
  );
};

export default Form;
