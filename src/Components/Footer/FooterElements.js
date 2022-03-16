import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterContainer = styled.footer`
    background-color: #010a11;
`;

export const FooterWrap = styled.div`
    padding: 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
`;

export const SocialMedia = styled.section`
    width: 100%;
`;

export const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;
export const Left = styled.div`
    justify-self: flex-start;
    display: flex;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;
export const SocialLogo = styled(Link)`
    color: #1085e4; // company logo color
    justify-self: flex-start;
    cursor: pointer;
    letter-spacing: 1px;
    font-size: 20px;
    line-height: 28px;
    display: flex;
    align-items: center;
    margin-left: 16px;
    margin-bottom: 4px;
    font-weight: 600;
    text-decoration: none;
    padding-right: 8px;
    border-right: 1px solid #1085e4;

    @media screen and (max-width: 820px) {
        border: none;
    }
`;

export const LogoIcon = styled.img`
    height: 30px;
    width: 30px;
    /* margin-bottom: 10px; */
`;

export const WebsiteRights = styled.small`
    color: #fff;
    /* padding-left: 8px; */
    margin:4px;
    margin-left:8px;
    font-size: 14px;
    line-height:22px;
    font-weight:normal;
`;

export const DesignBy = styled.h4`
    color: #fff;
    /* padding-left: 8px; */
    margin: 4px;
    margin-left: 8px;
    font-size: 14px;
    line-height: 22px;
    font-weight: normal;
    letter-spacing: 2px
`;

