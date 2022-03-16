import styled from "styled-components";

export const ContactContainer = styled.div`
    background: #02121f;
`;

export const ContactWrapper = styled.div`
    max-width: 1440px;
    display: flex;
    padding: 25px;
    align-items: center;
    margin: 0 auto;
    justify-content: center;
    flex-direction: column;

    @media screen and (max-width: 800px) {
        padding: 30px 20px;
    }
    @media screen and (max-width: 400px) {
        padding: 15px;
    }
`;

export const Heading = styled.div`
    color: #1085e4;
    font-size: 40px;
    line-height: 48px;
    font-weight: normal;
    padding: 12px;
    margin-top: 30px;
    margin-bottom: 30px;
    @media screen and (max-width: 800px) {
        font-size: 36px;
        line-height: 44px;
    }
    @media screen and (max-width: 400px) {
        font-size: 32px;
        line-height: 40px;
    }
`;

export const FormWrap = styled.div`
    width: 100%;
    height: 100%;
    margin: 10px;
    display: flex;
    padding: 10px;
    border-radius: 10px;
    flex-wrap: wrap;

    @media screen and (max-width: 400px) {
        padding: 0;
    }
`;

export const MapContainer = styled.div`
    width: 50%;
    height: auto;
    background: #88c2f2;
    padding: 5px;
    border-radius: 10px;

    @media screen and (max-width: 820px) {
        width: 100%;
    }
`;

export const FormContainer = styled.div`
    padding: 30px 10px 30px 40px;
    width: 50%;
    height: auto;

    @media screen and (max-width: 820px) {
        width: 100%;
    }
    @media screen and (max-width: 550px) {
        padding: 30px 10px;
    }
`;

export const Location = styled.iframe`
    border-radius: 7px;
    overflow: hidden;
`;
