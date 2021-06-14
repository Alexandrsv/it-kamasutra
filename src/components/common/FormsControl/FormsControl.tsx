import React from 'react'
import s from './FormsControl.module.css'
import {WrappedFieldMetaProps, WrappedFieldProps} from "redux-form"


type FormPropsType = {
    meta: WrappedFieldMetaProps
    children: React.ReactNode
}


export const FormControl: React.FC<FormPropsType> = ({meta: {touched, error}, children}) => {
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

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (<FormControl {...props}><textarea {...input} {...restProps}/></FormControl>);
}

export const InputComponent: React.FC<WrappedFieldProps> = (props) => {
    const {input, meta, children, ...restProps} = props
    return (<FormControl {...props}><input {...input} {...restProps}/></FormControl>)
}

export type GetStringKeys<T> = Extract<keyof T, string>
