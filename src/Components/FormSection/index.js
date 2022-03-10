import React, { useState } from "react";
import { ErrorMessage } from "formik";

import * as Yup from "yup";

import {
    FormikContainer,
    FormContainer,
    Label,
    Input,
    FormControl,
    Error,
    BtnWrapper,
    ArrowForward,
    ArrowRight,
} from "./FormElements";
import { Button } from "../ButtonElements";

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

const phoneRegExp =
    /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

const validationSchema = Yup.object({
    name: Yup.string().required("This field is required*"),
    email: Yup.string()
        .email("Invalid email address*")
        .required("This field is required*"),
    companyName: Yup.string().required("This field is required*"),
    phoneNumber: Yup.string()
        .matches(phoneRegExp, "Phone number is not valid*")
        .required("This field is required*")
        .min(8, "Phone number is not valid*"),
    message: Yup.string().required("This field is required*"),
});

const FormSection = () => {
    const [hover, setHover] = useState(false);

    const onHover = () => {
        setHover(!hover);
    };

    return (
        <FormikContainer
            initialValues={initialValues}
            onSubmit={onSubmit}
            validationSchema={validationSchema}
        >
            <FormContainer>
                <FormControl>
                    <Label htmlFor="name">Name:</Label>
                    <Input id="name" name="name" type="text" />
                    <ErrorMessage name="name">
                        {(errorMsg) => <Error>{errorMsg}</Error>}
                    </ErrorMessage>
                </FormControl>
                <FormControl>
                    <Label htmlFor="email">Email:</Label>
                    <Input id="email" name="email" type="email" />
                    <ErrorMessage name="email">
                        {(errorMsg) => <Error>{errorMsg}</Error>}
                    </ErrorMessage>
                </FormControl>
                <FormControl>
                    <Label htmlFor="companyName">Company Name:</Label>
                    <Input id="companyName" name="companyName" type="text" />
                    <ErrorMessage name="companyName">
                        {(errorMsg) => <Error>{errorMsg}</Error>}
                    </ErrorMessage>
                </FormControl>
                <FormControl>
                    <Label htmlFor="phoneNumber">Phone Number:</Label>
                    <Input id="phoneNumber" name="phoneNumber" type="tel" />
                    <ErrorMessage name="phoneNumber">
                        {(errorMsg) => <Error>{errorMsg}</Error>}
                    </ErrorMessage>
                </FormControl>
                <FormControl>
                    <Label htmlFor="message">Message:</Label>
                    <Input
                        component="textarea"
                        id="message"
                        name="message"
                        type="text"
                        rows="5"
                    />
                    <ErrorMessage name="message">
                        {(errorMsg) => <Error>{errorMsg}</Error>}
                    </ErrorMessage>
                </FormControl>
                <BtnWrapper type="submit">
                    <Button
                        onMouseEnter={onHover}
                        onMouseLeave={onHover}
                        primary="true"
                        dark="true"
                        wide
                        fontBig
                        height
                        radius
                        smooth={true}
                        duration={500}
                        spy={true}
                        exact="true"
                        offset={-60}
                    >
                        Send
                        {hover ? <ArrowForward /> : <ArrowRight />}
                    </Button>
                </BtnWrapper>

                {/* <button type="submit">Submit</button> */}
            </FormContainer>
        </FormikContainer>
    );
};

export default FormSection;
