import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import img from "../../Assets/Images/HERO_IMAGE.jpg";

export const HeroContainer = styled.div`
    background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.3),
            rgba(0, 0, 0, 0.3)
        ),
        url(${img});
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;
    max-height:900px;

    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;

    @media screen and (max-width: 991px) {
        padding-right: 30px;
        padding-left: 30px;
    }
`;

export const Content = styled.div`
    position: absolute;
    margin:24px;
    max-width:1440px;
    flex: 1;
    background: rgb(0 0 0 / 80%);
    padding: 25px;
    border-radius: 15px;

    @media screen and (max-width: 800px) {
        max-width: 100%;
    }
`;

export const HeroH1 = styled.h1`
    color: #e1f0fc;
    font-size: 40px;
    font-weight: normal;
    line-height: 48px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 32px;
        line-height: 40px;
    }

    @media screen and (max-width: 480px) {
        font-size: 24px;
        line-height: 32px;
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
export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 20px;
`;
