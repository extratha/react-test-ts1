import React, { useState } from 'react';
import { FormModel, FieldModel } from '../../types/form'

interface CustomFormProps {
  fieldModel: FieldModel,
}
const InputText: React.FC<CustomFormProps> = (props) => {
  const [fieldModelState,setFieldModelState] = useState(props.fieldModel) 
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    let fieldModel = fieldModelState
    fieldModel.value = value
  };

  return (
    <div className="input">
      <input type={fieldModelState.type} name={fieldModelState.name} onChange={fieldModelState.onChange || handleChange} />
    </div>
  );

}



export default InputText;
