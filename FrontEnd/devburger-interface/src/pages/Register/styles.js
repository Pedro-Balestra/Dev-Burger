import { Link as ReactLink } from 'react-router-dom';
import styled from 'styled-components';
import Background from '../../assets/background.svg';

export const Container = styled.div`
    height: 100vh;
    width: 100vw;
    background: url('${Background}');
    background-size: cover;
    display: flex;
    justify-content: center;
    align-items: center;

    p{
        color: ${(props) => props.theme.white};
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;

export const RegisterImage = styled.img`
    height: 80%;
    border-radius: 10px 0px 0px 10px;
`;
export const ContainerItens = styled.div`
    background: #373737;
    border-radius: 0 10px 10px 0;
    height: 80%;
    padding: 25px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;
  
`;
export const Title = styled.h2`
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    color: ${(props) => props.theme.white};
    text-align: center;
    margin-top: 19px;
`;
export const From = styled.form`
    display: flex;
    flex-direction: column;

`;
export const InputContainer = styled.div`

    display: flex;
    flex-direction: column;
    gap: 5px;
    width: 100%;
    margin: 5px 0;

    input{
        width: 100%;
        border: ${(props) => (props.error ? '1.5px solid #cc1717' : 'none')};
        height: 52px;
        border-radius: 5px;
        padding: 0 16px;
    }

    label{
        font-size: 12px;
        color: ${(props) => props.theme.white};
        font-weight: 500;
    }

    p{
        font-size: 14px;
        line-height: 80%;
        color: ${(props) => props.theme.darkRed};
        height: 10px;
    }

`;

export const Link = styled(ReactLink)`
    color: ${(props) => props.theme.white};
    text-decoration: underline;

`;
