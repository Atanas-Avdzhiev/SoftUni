import { useState } from "react";

export function useForm(initialValues, submitCallback) {
    const [values, setValues] = useState(initialValues);

    const changeHandler = (e) => {
        setValues(state => ({
            ...state,
            [e.target.name]: e.target.value // note this will not work for checkbox
        }))
    }

    const submitHandler = (e) => {
        e.preventDefault();
        // to add validation here
        submitCallback(values);
    }

    const resetForm = () => {
        setValues(initialValues);
    };

    return {
        values,
        changeHandler,
        submitHandler,
        setValues,
        resetForm
    }
}