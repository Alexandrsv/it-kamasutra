import {maxLengthCreator, required} from "../../../utils/validators/validators";
import {Field, InjectedFormProps} from "redux-form";
import {Textarea} from "../../common/FormsControl/FormsControl";
import {reduxForm} from "redux-form";
import React from "react";
import {NewMessageFormType} from "../Dialogs";

const maxLength = maxLengthCreator(50)

type NewMessageFormKeysType = Extract<keyof NewMessageFormType, string>
type PropsType = {}

const AddMessageForm: React.FC<InjectedFormProps<NewMessageFormKeysType, PropsType> & PropsType> = (props) => {
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


export default reduxForm<NewMessageFormKeysType>({
    form: 'dialogAddMessageForm'
})(AddMessageForm)
