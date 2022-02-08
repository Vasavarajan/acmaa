import styled from "styled-components";

export const CardImg = styled.img`
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    height: 300px;
    transition: all 0.5s ease-in-out;
`;

export const CardContent = styled.div`
    position: relative;
    width: 50%;
    left: 20%;
    padding: 20px 20px 20px 40px;
    opacity: 0;
    visibility: hidden;
    transition: all 0.3s ease-in-out;
`;

export const CardContainer = styled.div`
    position: relative;
    width: 600px;
    height: 350px;
    margin: 20px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    border-radius: 20px;
    background: linear-gradient(135deg, #c1f9ff, #1085e4);

    &:hover ${CardImg} {
        left: 75%;
        height: 350px;
    }

    &:hover ${CardContent} {
        left: 0%;
        opacity: 1;
        visibility: visible;
    }
`;

export const CardH2 = styled.h2`
    color: #fff;
    text-transform: uppercase;
    font-size: 1.4em;
    line-height: 1em;
    padding-bottom: 15px;
    letter-spacing: 1.5px;
`;
export const CardP = styled.p`
    color: #fff;
`;
export const CardLink = styled.a`
    position: relative;
    display: inline-block;
    color: #111;
    padding: 10px 20px;
    border-radius: 10px;
    background: #fff;
    margin-top: 10px;
    cursor: pointer;
    text-decoration: none;
`;
