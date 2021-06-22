import {Field, Form, Formik} from "formik";
import React, {FC} from "react";
import {FilterT} from "../../redux/users-reducer";
import {useSelector} from "react-redux";
import {getFilter} from "../../redux/users-selectors";

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
    const filter = useSelector(getFilter)
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
            enableReinitialize={true}
            initialValues={{term: filter.term, friend: filter.friend} as any }
            validate={userSearchFormValidate}
            onSubmit={submit}
        >
            {({isSubmitting}) => (
                <Form>
                    <Field type="text" name="term"/>
                    <Field as="select" name="friend">
                        <option value={'null'}>Все</option>
                        <option value={'true'}>Подписан</option>
                        <option value={'false'}>Не подписан</option>
                    </Field>
                    <button type="submit" disabled={isSubmitting}>
                        Find
                    </button>
                </Form>
            )}
        </Formik></div>
})
