import React, { useEffect, useState } from 'react';
import logo from './logo.svg';
import { FormModel, FieldModel, fieldErrorMessage, formErrorMessage } from '../types/form'


interface CustomFieldProps {
  fieldModel: FieldModel,
  fieldName?: string,
  children: React.ReactNode,
  errors?: fieldErrorMessage ;
  [any: string]: any
}
const Field: React.FC<CustomFieldProps> = ({ formModel, fieldModel, fieldName, children, errors}: CustomFieldProps) => {
  const [formModelState, setFormModelState] = useState(formModel)
  const [fieldModelState, setFieldModelState] = useState(fieldModel || formModelState?.fields[fieldName||''] as FieldModel)
  const [errorState, setErrorState] = useState(errors)
  useEffect(() => {

    console.log("🚀 ~ file: Field.tsx:16 ~ useEffect ~ fieldModelState", errors)
    setErrorState(errors)
  }, [errors])
  return (
    <div className="field">
      <label>{fieldModelState.label}</label>
      {children} 
      {
        errorState?.length ?
        <div className='field-errors' style={{ color: 'red' }}>
          {errorState.map((error: string, index: number) => {
            return <span key={index} >{error}</span>
          })}

        </div>: null


      }
    </div>
  )
}

export default Field;
