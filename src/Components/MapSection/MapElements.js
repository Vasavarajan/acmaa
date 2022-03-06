import styled from "styled-components";

export const MapContainer = styled.div`
    background: #02121f;
    display: flex;
    flex-direction: column;
    place-items: center;
    padding-top: 24px;

    /* height: 100vh; */
`;
export const ImgWrap = styled.div`
    max-width: 1440px;
    /* height: 500px; */
    align-items: center;
    justify-content: center;
    display: flex;
    margin: 16px;

    /* height:100vh; */
    /* width: 100%; */
`;

export const Img = styled.img`
    width: 80%;
    border: 2px solid #88c2f2;
    border-radius: 45px;

    padding: 16px;

    @media screen and (max-width: 768px) {
        width: 100%;
        border-radius: 25px;
    }
    @media screen and (min-width: 1440px) {
        width: 100%;
        border-radius: 50px;
    }
`;

export const HeadLine = styled.h1`
    color: #e1f0fc;
    font-size: 32px;
    line-height: 40px;
    font-weight: normal;
    padding: 12px 24px 50px 24px;
    align-items: center;
    justify-content: center;
    text-align: center;

    @media screen and (max-width: 960px) {
        font-size: 28px;
        line-height: 36px;
        padding: 12px 24px 30px 24px;
    }

    @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
        padding: 12px 24px 24px 24px;
    }

    @media screen and (max-width: 480px) {
        font-size: 20px;
        line-height: 28px;
        padding: 0 24px 16px 24px;
    }
    @media screen and (max-width: 360px) {
        font-size: 16px;
        line-height: 24px;
        padding: 0 24px 16px 24px;
    }
`;
