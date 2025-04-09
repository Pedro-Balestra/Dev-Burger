import styled from "styled-components";

export const Container = styled.div`
    .carousel-item{
        padding:40px;
    }
    overflow-x: hidden;

    .react-multi-carousel-list{
        overflow: visible;
    }
`;
export const Title = styled.h2`
    font-size: 32px;
    font-weight: 800;
    color: ${(props) => props.theme.gren};
    padding-bottom: 12px;
    position: relative;
    text-align: center;
    margin: 70px 0;
    &::after{
        content: '';
        position: absolute;
        bottom: 0;
        width: 56px;
        height: 4px;
        background-color: ${(props) => props.theme.gren};
        left: calc(50% - 28px);

    }
`;