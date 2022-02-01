import styled from "styled-components";
import { MdArrowForward, MdArrowRight } from "react-icons/md";

export const HeroContainer = styled.div`
    background: #fff; //#010606
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    z-index: 1;
    width: 100%;
    margin-left: auto;
    margin-right: auto;
    min-height: 850px;
    max-height: 1280px;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const HeroWrapper = styled.div`
    display: flex;
    max-width: 1100px;
    flex-wrap: wrap;
    align-content: stretch;
    align-items: center;

    
`;

export const Column = styled.div`
    margin-bottom: 15px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    max-width: 50%;
    flex-basis: 50%;

    @media screen and (max-width: 800px) {
        max-width: 100%;
        flex-basis: 100%;
    }
`;

export const HeroH1 = styled.h1`
    color: #1085e4;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`;

export const HeroP = styled.p`
    margin-top: 24px;
    color: #121212;
    font-size: 24px;
    text-align: center;

    @media screen and (max-width: 800px) {
        font-size: 21px;
    }

    @media screen and (max-width: 480px) {
        font-size: 18px;
    }
`;

export const HeroBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const ArrowForward = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 20px;
`;
export const ArrowRight = styled(MdArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;

export const ImgWrap = styled.div`
    max-width: 100%;
`;
export const Img = styled.img`
    max-width: 100%;
    border: 0;
    vertical-align: middle;
    display: inline-block;
`;
