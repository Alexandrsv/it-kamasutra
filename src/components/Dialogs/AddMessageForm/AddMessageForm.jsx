import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field} from "redux-form/es";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import React from "react";

const maxLength = maxLengthCreator(50)

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name={'newMessageBody'} component={Textarea} validate={[required, maxLength]}/>
            </div>
            <div>
                <button>Add message</button>
            </div>
        </form>
    )
}


export default reduxForm({
    form: 'dialogAddMessageForm'
})(AddMessageForm)
