import styled from "styled-components";

export const ClientContainer = styled.div`
    background: #f5fbff;
    
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ClientWrapper = styled.div`
    max-width: 1440px;
    display: flex;
    height: 300px;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    overflow: hidden;

`;
export const ClientTitle = styled.h1`
    color: #02121f;
    font-size: 40px;
    line-height: 32px;

    @media screen and (max-width: 800px) {
        font-size: 36px;
        line-height: 28px;
    }
    @media screen and (max-width: 400px) {
        font-size: 32px;
        line-height: 24px;
    }
`;

export const ClientList = styled.div`
    width: 100%;
    /* max-width: 1440px; */
    padding-top: 24px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 850px) {
        padding-top: 20px;
    }

    @media screen and (max-width: 480px) {
        padding-top: 16px;
    }
`;
export const ImgWrap = styled.div`
    margin: 24px;
    padding: 16px 24px;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 850px) {
        padding: 16px 20px;
    }

    @media screen and (max-width: 480px) {
        padding: 16px 0;
    }
`;
export const Img = styled.img`
    height: 70px;
    filter: grayscale(100%);

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
        filter: grayscale(0%);
    }

    @media screen and (max-width: 850px) {
        height: 60px;
    }

    @media screen and (max-width: 480px) {
        height: 50px;
    }
`;
