import styled from "styled-components";
import { Formik, Form,Field } from "formik";


export const FormikContainer = styled(Formik)`
    /* color: #fff; */
    width: 100%;
`;

export const FormContainer = styled(Form)`
    /* color: #fff; */
    width: 100%;
`;

export const Label = styled.label`
    font-weight: bold;
    display: flex;
    margin-bottom: 5px;
`;

export const Input = styled(Field)`
    display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 1.42;
    color: #555;
    background-color: #fff;
    background-image: none;
    border: 1px solid #ccc;
    border-radius: 4px;
    margin-bottom: 5px;
`;

export const FormControl = styled.div`
    margin-bottom: 20px;
    width: 100%;
`;

export const Error = styled.div`
    color: red;
`;
