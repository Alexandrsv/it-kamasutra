import React from 'react';
import s from './FormsControl.module.css'

export const FormControl = ({meta: {touched, error}, children}) => {
    const hasError = error && touched
    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    );
}

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props
    return (<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>);
}

export const InputComponent = (props) => {
    const {input, meta, child, ...restProps} = props
    return (<FormControl {...props}><input {...input} {...restProps}/></FormControl>)
}
