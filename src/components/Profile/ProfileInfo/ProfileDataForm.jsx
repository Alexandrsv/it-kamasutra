import React from 'react';
import {Field, reduxForm} from "redux-form";
import {InputComponent, Textarea} from "../../common/FormsControl/FormsControl";
import s from "../../common/FormsControl/FormsControl.module.css";

const ProfileDataForm = ({profile, isOwner, handleSubmit, error}) => {
    return (
        <form onSubmit={handleSubmit}>
            {isOwner && <div>
                <button>💾save</button>
            </div>}
            {error && <div style={{padding: '19px 0'}}>
                <span className={s.formSummaryError}>{error}</span>
            </div>}
            <br/>
            <b>Full name:</b>
            <Field placeholder={'Full name'} name={'fullName'} validate={[]} component={InputComponent}/>
            <b>Looking for a job:</b>
            <Field name={'lookingForAJob'} type={'checkbox'} component={InputComponent}/>
            <b>My professional skills:</b>
            <Field placeholder={'My professional skills'} name={'lookingForAJobDescription'} validate={[]}
                   component={Textarea}/>
            <b>About me:</b>
            <Field placeholder={''} name={'aboutMe'} validate={[]} component={Textarea}/>


            <b>Contacts:</b>
            <div>{Object.entries(profile.contacts).map((i) => {
                return <div key={i[0]}>{i[0]}<Field name={'contacts.' + i[0]} component={InputComponent}/></div>
            })}</div>
        </form>
    );
};

export default reduxForm({form: 'edit-profile'})(ProfileDataForm);
