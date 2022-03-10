/*
import React from "react";
import {useFormik} from "formik";
import * as Yup from "yup";

const Validate = () => {
    const formik = useFormik({
        initialValues: {
            email: '',
            password: '',
        },
        validationSchema: Yup.object({
            email: Yup.string().email("email required").required("required"),
            password: Yup.string().min(6).required("required")
        }),
        onSubmit: (values) => {
            console.log(values)
        }
    })

    console.log(formik.errors)
}

export default Validate;
*/

