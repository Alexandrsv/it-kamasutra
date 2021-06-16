import {Field, Form, Formik} from "formik";
import React, {FC} from "react";
import {FilterT} from "../../redux/users-reducer";

const userSearchFormValidate = (values: any) => {
    const errors: any = {};
    // if (!values.email) {
    //     errors.email = 'Required';
    // } else if (
    //     !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
    // ) {
    //     errors.email = 'Invalid email address';
    // }
    return errors;
}

type PropsType = {
    onFilterChanged: (filter: FilterT) => void
}

export const UsersSearchForm: FC<PropsType> = React.memo(({onFilterChanged}) => {
    const submit = (values: FilterT, {setSubmitting}: any) => {

        let filter: FilterT = {
            term: values.term,
            // @ts-ignore
            friend: values.friend === 'null' ? null : values.friend === 'true'
        }
        onFilterChanged(filter)
        setSubmitting(false)
    }
    return <div>
        <Formik
            initialValues={{term: '', friend: false}}
            validate={userSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field as="select" name="friend">
                        <option value={'true'}>Подписан</option>
                        <option value={'false'}>Не подписан</option>
                        <option value={'null'}>Все</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik></div>
})
