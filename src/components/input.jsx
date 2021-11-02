import React from 'react'

const input = (props) => {

    let inputClassName = 'form-control';
    if(props.hasError !== undefined){
        inputClassName += props.hasError ? ' is-invalid' : ' is-valid';
    }
        
    return (
        <div>
        {props.label && <label>{props.label}</label>}
           <input type={props.type || 'text'}
            placeholder= {props.placeholder}
                value = {props.value}
                onChange = {props.onChange}
            />
            {props.hasError && <span className="invalid-feedback">
                {props.error}
            </span>}
        </div>
    );
}

input.defaultProps = {
    onChange : () => {}
}

export default input
