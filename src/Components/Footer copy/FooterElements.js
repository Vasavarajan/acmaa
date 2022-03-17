import styled from "styled-components";
import { Link } from "react-router-dom";
import { MdLocationOn, MdCall } from "react-icons/md";

export const FooterContainer = styled.footer`
    background-color: #010a11;
`;

export const FooterWrap = styled.div`
    padding: 16px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1440px;
    margin: 0 auto;
`;

export const TopSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    margin-bottom: 24px;
    margin-top: 24px;
    /* align-items: center; */

    @media screen and (max-width: 820px) {
        flex-direction: column;
        justify-content:center;
        align-items: center;
    }
`;

export const CompanyLogo = styled(Link)`
    color: #1085e4; // company logo color
    justify-self: center;
    cursor: pointer;
    display: flex;
    align-items: center;
    /* margin-left: 16px; */
    /* margin-bottom: 4px; */
    text-decoration: none;

    @media screen and (max-width: 820px) {
        padding-bottom:16px;
    }
`;

export const LogoIcon = styled.img`
    height: 60px;
    width: 60px;
`;

export const CompanyName = styled.div`
    display: flex;
    justify-self: center;
    /* align-items: center; */
    flex-direction: column;
`;

export const Names = styled.p`
    letter-spacing: 1px;
    font-size: 22px;
    line-height: 30px;
    font-weight: 600;

    @media screen and (max-width: 1024px) {
        display: none;
    }
`;

export const Name = styled.p`
    letter-spacing: 1px;
    font-size: 24px;
    line-height: 32px;
    font-weight: 600;
    display: none;

    @media screen and (max-width: 1024px) {
        display: block;
    }
`;

export const AddressSectiion = styled.div`
    display: flex;
    justify-content: center;
    /* align-items:center; */

    @media screen and (max-width: 820px) {
        padding-bottom: 16px;
    }
`;

export const Wrap = styled.h2`

`;

export const Line = styled.p`
    color: #f5fbff;
    font-size: 16px;
    line-height: 24px;
    font-weight: normal;
`;

export const PhoneNumber = styled.div`
    display: flex;
    /* align-items: flex-start; */
    /* justify-content: flex-start; */

    @media screen and (max-width: 820px) {
        padding-bottom: 16px;
    }
`;

export const BottomSection = styled.div`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 820px) {
        flex-direction: column;
    }
`;

export const WebsiteRights = styled.small`
    color: #f5fbff;
    margin: 4px;
    margin-left: 16px;
    font-size: 14px;
    line-height: 22px;
    font-weight: normal;

    @media screen and (max-width: 320px) {
        font-size: 12px;
        line-height: 20px;
    }
`;

export const DesignBy = styled.h4`
    color: #f5fbff;
    margin: 4px;
    margin-left: 8px;
    font-size: 14px;
    line-height: 22px;
    font-weight: normal;
    letter-spacing: 2px;
    cursor: pointer;

    @media screen and (max-width: 320px) {
        font-size: 12px;
        line-height: 20px;
    }
`;
export const Location = styled(MdLocationOn)`
    margin-right: 8px;
    font-size: 24px;
    color: #1085e4;
`;
export const Phone = styled(MdCall)`
    margin-right: 8px;
    font-size: 24px;
    color: #1085e4;
`;
