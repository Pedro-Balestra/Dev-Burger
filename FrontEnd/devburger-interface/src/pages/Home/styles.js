import styled from "styled-components";
import Background from '../../assets/background.svg';
import BannerHome from '../../assets/banner-home.svg';

export const Banner = styled.div`
    background: url('${BannerHome}');
    background-size: cover;
    background-position: center;
    height: 480px;
    h1{
        font-size: 80px;
        color: ${(props) => props.theme.darkWhite};
        position: absolute;
        right: 20%;
        top: 10%;
    }
`;
export const Container = styled.section`
    background: url('${Background}');
    background-size: cover;
    background-position: center;
    width: 100vw;
    display: flex;
    flex-direction: column;
`;
export const Content = styled.div`
    padding-bottom: 70px;

`