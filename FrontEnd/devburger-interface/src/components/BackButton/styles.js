import styled from "styled-components";

export const BackButton = styled.button`
    height: 40px;
    width: 40px;
    background: ${(props) => props.theme.purple};
    border: none;
    border-radius: 50%;
    color: white;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 50px;
    left: 20px;

    &:hover {
        opacity: 0.8;
    }
`;