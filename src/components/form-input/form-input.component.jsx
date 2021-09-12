import React from 'react';
import './form-input.styles.scss';

function FormInput({ HandleChange, label, ...OtherProps }) {
  return (
    <div className='group'>
      <input className='form-input' onChange={HandleChange} {...OtherProps} />
      {label ? (
        <label
          className={`${
            OtherProps.value.length ? 'shrink' : ''
          } form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
}

export default FormInput;
