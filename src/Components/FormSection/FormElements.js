import styled from "styled-components";
import { Formik, Form, Field } from "formik";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";

export const FormikContainer = styled(Formik)`
    width: 100%;
`;

export const FormContainer = styled(Form)`
    width: 100%;
`;

export const Label = styled.label`
    font-weight: normal;
    color: #88c2f2;
    display: flex;
    margin-bottom: 5px;
    font-size: 18px;
    line-height: 26px;
`;

export const Input = styled(Field)`
    display: block;
    width: 100%;
    padding: 6px 12px;
    font-size: 14px;
    line-height: 18px;
    color: #02121f;
    background-color: #f5fbff;
    background-image: none;
    border-radius: 4px;
    border-bottom: 3px solid #1085e4;
    margin-bottom: 5px;
    margin-top: 3px;
    outline: none;
`;

export const FormControl = styled.div`
    margin-bottom: 15px;
    width: 100%;
    font-weight: normal;
`;

export const Error = styled.div`
    color: #ff0000;
    font-size: 15px;

    @media screen and (max-width: 550px) {
        font-size: 13px;
    }
`;

export const BtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    padding-top: 15px;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 24px;
`;
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 24px;
    //
`;
