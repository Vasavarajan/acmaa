import styled from "styled-components";

export const ClientContainer = styled.div`
    background: #f5fbff;
    display: flex;
    justify-content: center;
    align-items: center;
`;
export const ClientWrapper = styled.div`
    max-width: 1440px;
`;
export const ClientTitle = styled.div``;
export const ClientLogos = styled.div``;
export const ClientList = styled.div``;
export const ImgWrap = styled.div`
    margin: 16px;
`;
export const Img = styled.img`
    height: 50px;
    filter: grayscale(100%);

    &:hover {
        /* transform: scale(1.05);
        transition: all 0.2s ease-in-out; */
        filter: grayscale(0%);
    }
`;
