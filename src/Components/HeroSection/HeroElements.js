import styled from "styled-components";
import { MdArrowForward, MdKeyboardArrowRight } from "react-icons/md";
import img from "../../Assets/Images/HERO_IMAGE.jpg";

export const HeroContainer = styled.div`
    background: linear-gradient(
            to right,
            rgba(0, 0, 0, 0.5),
            rgba(0, 0, 0, 0.5)
        ),
        url(${img});
    height: calc(100vh - 60px);
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 1;

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
    margin: 0 24px;
    padding-right: 15px;
    padding-left: 15px;
    flex: 1;
    background: rgb(0 0 0 / 70%);
    padding: 25px;
    border-radius: 15px;

    @media screen and (max-width: 800px) {
        max-width: 100%;
    }
`;

export const HeroH1 = styled.h1`
    color: #e1f0fc;
    font-size: 28px;
    font-weight: normal;
    line-height: 36px;
    text-align: center;

    @media screen and (max-width: 768px) {
        font-size: 24px;
        line-height: 32px;
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
