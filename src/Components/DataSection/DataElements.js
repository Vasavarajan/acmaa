import styled from "styled-components";

export const DataContainer = styled.div`
    background: #f5fbff;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    /* height: 250px; */
`;

export const Datarapper = styled.div`
    /* height: 100%; */
    max-width: 1440px;
    width: 100%;
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 50px;
    padding: 20px 50px;
    justify-content: space-between;

    @media screen and (max-width: 850px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 10px 20px;
    }
`;
export const Data = styled.div`
    display: flex;
    height: 250px;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 20px;
    transition: all 0.2s ease-in-out;

    &:hover {
        transform: scale(1.05);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 850px) {
        height: 200px;
    }

    @media screen and (max-width: 480px) {
        height: 150px;
    }
`;

export const ImgWrap = styled.div`
    height: 40%;
    margin-bottom: 10px;
`;

export const Img = styled.img`
    /* height: 100%; */
    width: 100px;

    @media screen and (max-width: 850px) {
        width: 80px;
    }

    @media screen and (max-width: 480px) {
        width: 70px;
    }
`;
export const Title = styled.h1`
    font-size: 24px;
    line-height: 32px;
    color: #02121f;
    margin-bottom: 10px;
    text-align: center;
    font-weight: normal;
    height: 20%;

    @media screen and (max-width: 850px) {
        white-space: nowrap;
    }
`;
