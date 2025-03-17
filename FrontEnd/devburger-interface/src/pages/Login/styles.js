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
        color: #FFF;
        font-size: 14px;
        font-style: normal;
        font-weight: 400;
        line-height: normal;
    }
`;
export const LoginImage = styled.img`
    height: 80%;
`;
export const ContainerItens = styled.div`
    background: #373737;
    border-radius: 0 10px 10px 0;
    height: 80%;
    padding: 25px 75px;
    display: flex;
    flex-direction: column;
    justify-content: center;

    form{
        display: flex;
        flex-direction: column;
        align-items: center;
    }
`;
export const Title = styled.h2`

    font-style: normal;
    font-weight: 500;
    font-size: 24px;
    line-height: 28px;
    color: #FFFFFF;
    text-align: center;
    margin-top: 30px;

`;
export const InputContainer = styled.div`
    display: flex;
    flex-direction: column;
    label{
        font-style: normal;
        font-weight: 500;
        font-size: 12px;
        line-height: 14px;
        color: #FFFFFF;
        margin-top: 28px;
        margin-bottom: 5px;
    }
    input{
        width: 391.416px;
        height: 38.319px;
        border-radius: 5px;
        background: #FFF;
        box-shadow: 3px 3px 10px 0px rgba(74, 144, 226, 0.19);
        border: ${(props) => (props.error ? '1.5px solid #cc1717' : 'none')};
        padding-left: 10px;
    }

    p{
        font-style: normal; 
        font-size: 12px;
        line-height: 14px;
        color: #cc1717;
        height: 10px;
        margin-top: 5px;
    }
`;

export const Link = styled(ReactLink)`
    color: #FFF;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`;
