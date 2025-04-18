import { Link } from "react-router-dom";
import styled from "styled-components";
import Background from '../../assets/background.svg';
import BannerHamburger from "../../assets/banner-hamburger.svg";


export const Container = styled.div`
    width: 100%;
    min-height: 100vh;
    background-color: ${(props) => props.theme.secondWhite};
    background: url('${Background}');
    background-size: cover;
    background-position: center;
    width: 100vw;
    display: flex;
    flex-direction: column;

`;
export const Banner = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 480px;
    width: 100%;
    position: relative;

    background: url('${BannerHamburger}') no-repeat;
    background-color: ${(props) => props.theme.mainBlack};
    background-position: center;
    background-size: cover;

    h1 {
        font-size: 80px;
        line-height: 75px;
        color: ${(props) => props.theme.white};
        position: absolute;

        right: 20%;
        top:30%;

        span{
          display: block;
          color: ${(props) => props.theme.white};
          font-size: 20px;
        }
    }
`;
export const CategoryMenu = styled.div`
    display: flex;
    justify-content: center;
    gap: 50px;
    margin-top: 30px;
`;

export const CategoryButton = styled(Link)`
    text-decoration: none;
    cursor: pointer;
    background: none;
    color: ${props => props.$isActiveCategory ? (props) => props.theme.purple: '#696969'};
    font-size: 24px;
    font-weight: 500;
    padding-bottom: 5px;
    line-height: 20px;
    border: none;
    border-bottom: ${props => props.$isActiveCategory && `3px solid ${(props) => props.theme.purple}`};
`;
export const ProductsContainer = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    padding: 40px;
    gap: 60px;
    justify-content: center;
    max-width: 1280px;
    margin: 50px auto;
`;