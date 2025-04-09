import styled from 'styled-components';

export const ContainerButton = styled.button`
    width: 50%;
    height: 36px;
    border: none;
    border-radius: 10px;
    background-color: ${(props) => props.theme.purple};
    font-size: 16px;
    color: ${(props) => props.theme.white};
    margin-top: 74px;
    margin-bottom: 25px;

    &:hover{
        opacity: 0.8;
    }

    &:active{
        opacity: 0.6;
    }
`;
