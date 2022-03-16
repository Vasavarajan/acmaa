import styled from "styled-components";
import { Carousel } from "3d-react-carousal";

export const ServicesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    background: #02121f;
    height: 800px;
    width: 100%;
`;

export const ServicesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
`;

export const ServicesH1 = styled.h1`
    color: #1085e4;
    font-size: 40px;
    line-height:48px;
    font-weight: normal;
    padding: 12px;
    margin-top: 50px;
    margin-bottom: 50px;

    @media screen and (max-width: 800px) {
        font-size: 36px;
        line-height: 44px;
    }
    @media screen and (max-width: 400px) {
        font-size: 32px;
        line-height: 40px;
    }
`;

export const CarouselSection = styled.div`
    width: 100%;
    cursor: pointer;
    padding-bottom: 100px;
`;

export const ServicesCarousel = styled(Carousel)`
    max-width: 1440px;
    margin: 0 auto;
`;

export const ServicesCard = styled.div`
    background: #010a11;
    width: 60%;
    min-width: 270px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 10px;
    padding: 0 30px;
    height: 500px;
    border-bottom: 5px solid #1085e4;

    @media screen and (max-width: 1000px) {
        width: 80%;
    }
    @media screen and (max-width: 600px) {
        width: 100%;
    }
    @media screen and (max-width: 320px) {
        min-width: 240px;
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH2 = styled.h2`
    margin-bottom: 10px;
    text-align: center;
    color: #1085e4;
    font-size: 28px;
    line-height: 36px;
    font-weight: 700;
    padding-bottom: 12px;

    @media screen and (max-width: 800px) {
        font-size: 24px;
        line-height: 32px;
    }
    @media screen and (max-width: 400px) {
        font-size: 20px;
        line-height: 28px;
    }
`;

export const ServicesList = styled.ul`
    font-size: 20px;
    line-height: 28px;
    font-weight: normal;
    padding-left: 10px;

    @media screen and (max-width: 800px) {
        font-size: 16px;
        line-height: 24px;
    }
    @media screen and (max-width: 400px) {
        font-size: 12px;
        line-height: 20px;
    }
`;

export const List = styled.li`
    padding-bottom: 5px;

    font-weight: normal;
    color: #f5fbff;
`;
