import styled from "styled-components";

export const ContactContainer = styled.div`
    background: #fff;
    /* width: 100%;
    align-items: center;
    justify-content: center;
    place-content: center;
    place-items: center;
    place-self: center; */
`;

export const ContactWrapper = styled.div`
    max-width: 1440px;
    display: flex;
    padding: 25px;
    align-items: center;
    margin: 0 auto;
    justify-content: center;

    @media screen and (max-width: 800px) {
        padding: 30px 20px;
    }
    @media screen and (max-width: 400px) {
        padding: 15px;
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

    @media screen and (max-width: 820px) {
        width: 100%;
    }
`;

export const FormContainer = styled.div`
    padding: 30px 10px 30px 30px;
    width: 50%;
    height: auto;

    @media screen and (max-width: 820px) {
        width: 100%;
    }
    @media screen and (max-width: 550px) {
        padding: 30px 10px;
    }
`;

export const Location = styled.iframe``;
