import styled from "styled-components";
import { Carousel } from "3d-react-carousal";

export const ServicesContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    background: #02121f;
    padding: 50px;
`;

export const ServicesWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

export const ServicesH1 = styled.h1`
    color: #1085e4;
    font-size: 40px;
    line-height: 32px;
    font-weight: normal;
    padding: 12px;
    margin-bottom: 50px;

    @media screen and (max-width: 800px) {
        font-size: 36px;
        line-height: 28px;
    }
    @media screen and (max-width: 400px) {
        font-size: 32px;
        line-height: 24px;
    }
`;

export const CarouselSection =styled.div`
width: 100%;
`

export const ServicesCarousel = styled(Carousel)`
    max-width: 1440px;
    margin: 0 auto;
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    /* justify-content: flex-start; */
    align-items: center;
    border-radius: 10px;
    min-height: 340px;
    padding: 30px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
    transition: all 0.2s ease-in-out;
    /* 
    &:hover {
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    } */
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH2 = styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
    white-space: nowrap;
`;

export const ServicesList = styled.ul`
    font-size: 1rem;
    text-align: center;
`;

export const List = styled.li`
    font-size: 1rem;
    text-align: center;
`;
