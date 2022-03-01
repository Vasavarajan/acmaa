import styled from "styled-components";
import { Link as LinkR } from "react-router-dom";
import { Link as LinkS } from "react-scroll";

export const Nav = styled.nav`
    background: #02121f;
    height: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 10;

    @media screen and (max-width: 960px) {
        transition: 0.8s all ease;
    }
`;

export const NavbarContainer = styled.div`
    display: flex;
    justify-content: space-between;
    height: 100%;
    z-index: 1;
    width: 100%;
    padding: 0 24px 0 0;
    max-width: 1440px;
`;

export const NavLogo = styled(LinkR)`
    color: #1085e4; // company logo color
    justify-self: flex-start;
    cursor: pointer;
    letter-spacing: 1px;
    font-size: 28px;
    line-height: 36px;
    display: flex;
    align-items: center;
    margin-left: 16px;
    font-weight: 600;
    text-decoration: none;
`;

export const LogoIcon = styled.img`
    height: 50px;
    width: 50px;
    /* margin-bottom: 10px; */
`;

export const MobileIcon = styled.div`
    display: none;

    @media screen and (max-width: 800px) {
        display: block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-60%, 40%);
        font-size: 2rem;
        cursor: pointer;
        color: #88c2f2;
    }
`;

export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align: center;
    /* margin-right: -22px; */

    @media screen and (max-width: 800px) {
        display: none;
    }
`;
export const NavItems = styled.li`
    height: 62px;
`;
export const NavLinks = styled(LinkS)`
    color: #88c2f2;
    display: flex;
    font-size: 20px;
    line-height: 28px;
    font-weight: normal;
    align-items: center;
    text-decoration: none;
    letter-spacing: 1px;
    padding: 0 16px;
    height: 100%;
    cursor: pointer;

    &.active {
        font-weight: 600;

        border-bottom: 2px solid #1085e4;
    }
`;


