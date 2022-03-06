import React from "react";
import { ErrorMessage } from "formik";

import * as Yup from "yup";

import {
    FormikContainer,
    FormContainer,
    Label,
    Input,
    FormControl,
    Error,
} from "./FormElements";

const initialValues = {
    name: "",
    email: "",
    companyName: "",
    phoneNumber: "",
    message: "",
};
const onSubmit = (values) => {
    alert(JSON.stringify(values, null, 2));
};
// const validate = (values) => {
//     let ErrorMessages = {};

//     if (!values.name) {
//         ErrorMessages.name = "This field is required";
//     }
//     if (!values.email) {
//         ErrorMessages.email = "This field is required";
//     } else if (
//         !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)
//     ) {
//         ErrorMessages.email = "Invalid Email Address";
//     }
//     if (!values.companyName) {
//         ErrorMessages.companyName = "This field is required";
//     }
//     if (!values.phoneNumber) {
//         ErrorMessages.phoneNumber = "This field is required";
//     }
//     if (!values.message) {
//         ErrorMessages.message = "This field is required";
//     }
//     return ErrorMessages;
// };
const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
    name: Yup.string().required("This field is required"),
    email: Yup.string()
        .email("Invalid email address")
        .required("This field is required"),
    companyName: Yup.string().required("This field is required"),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid")
        .required("This field is required")
        .min(8, "Phone number is not valid"),
    message: Yup.string().required("This field is required"),
});

const FormSection = () => {
    // Pass the useFormik() hook initial form values and a submit function that will
    // be called when the form is submitted
    // const formik = useFormik({
    //     initialValues,
    //     onSubmit,
    //     // validate,
    //     validationSchema,
    // });
    return (
        <FormikContainer
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <FormContainer>
                <FormControl>
                    <Label htmlFor="name">Name</Label>
                    <Input id="name" name="name" type="text" />
                    <ErrorMessage name="name">
                        {(errorMsg) => <Error>{errorMsg}</Error>}
                    </ErrorMessage>
                </FormControl>
                <FormControl>
                    <Label htmlFor="email">E-mail</Label>
                    <Input id="email" name="email" type="email" />
                    <ErrorMessage name="email">
                        {(errorMsg) => <Error>{errorMsg}</Error>}
                    </ErrorMessage>
                </FormControl>
                <FormControl>
                    <Label htmlFor="companyName">Company Name</Label>
                    <Input id="companyName" name="companyName" type="text" />
                    <ErrorMessage name="companyName">
                        {(errorMsg) => <Error>{errorMsg}</Error>}
                    </ErrorMessage>
                </FormControl>
                <FormControl>
                    <Label htmlFor="phoneNumber">Phone Number</Label>
                    <Input id="phoneNumber" name="phoneNumber" type="tel" />
                    <ErrorMessage name="phoneNumber">
                        {(errorMsg) => <Error>{errorMsg}</Error>}
                    </ErrorMessage>
                </FormControl>
                <FormControl>
                    <Label htmlFor="message">Message</Label>
                    <Input
                        component="textarea"
                        id="message"
                        name="message"
                        type="text"
                    />
                    <ErrorMessage name="message">
                        {(errorMsg) => <Error>{errorMsg}</Error>}
                    </ErrorMessage>
                </FormControl>

                <button type="submit">Submit</button>
            </FormContainer>
        </FormikContainer>
    );
};

export default FormSection;
