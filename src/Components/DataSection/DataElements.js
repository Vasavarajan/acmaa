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
    display: grid;
    margin: 0 auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 50px;
    padding: 0 50px;

    @media screen and (max-width: 850px) {
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 480px) {
        grid-template-columns: 1fr;
        padding: 0 20px;
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
`;

export const ImgWrap = styled.div`
    height: 40%;
    margin-bottom: 10px;
`;

export const Img = styled.img`
    /* height: 100%; */
    width: 100px;
`;
export const Title = styled.h1`
    font-size: 24px;
    line-height:32px;
    color: #02121f;
    margin-bottom: 10px;
    text-align: center;
    font-weight: normal;
    height: 20%;

    /* @media screen and (max-width: 480px) {
        font-size: 16px;
    } */
`;
