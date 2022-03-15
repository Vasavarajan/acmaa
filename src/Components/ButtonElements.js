import styled from "styled-components";
import { Link as LinkS } from "react-scroll";


export const Button = styled(LinkS)`
    border-radius: ${({ radius }) => (radius ? "25px" : "20px")};
    background: ${({ primary }) => (primary ? "#1085e4" : "#02121f")};
    white-space: nowrap;
    padding: ${({ big }) => (big ? "14px 48px" : "12px 30px")};
    padding-top: 20px;
    padding-bottom: 20px;
    height: ${({ height }) => (height ? "50px" : "40px")};
    color: ${({ dark }) => (dark ? "#f5fbff" : "#88c2f2")};
    font-size: ${({ fontBig }) => (fontBig ? "22px" : "18px")};
    outline: none;
    border: none;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    transition: all 0.2s ease-in-out;
    width: ${({ wide }) => (wide ? "100%" : null)};

    &:hover {
        transition: all 0.2s ease-in-out;
        background: ${({ primary }) => (primary ? "#f5fbff" : "#1085e4")};
        color: ${({ dark }) => (dark ? "#02121f" : "#88c2f2")};
    }
`;
