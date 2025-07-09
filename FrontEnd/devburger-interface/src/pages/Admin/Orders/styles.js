import Select from "react-select";
import styled from "styled-components";

export const ProductImage = styled.img`
    height: 80px;
    padding: 12px;
    border-radius: 16px;
`;

export const SelectStatus = styled(Select)`
    width: 240px;
`;

export const Filter = styled.div`
    display: flex;
    justify-content: center;
    margin: 28px 0;
    gap: 50px;
`;

export const FilterOptions = styled.button`
    cursor: pointer;
    background: none;
    border: none;
    color: ${(props) => props.$isActive ? props.theme.purple : props.theme.darkGray};
    font-size: 18px;
    line-height: 18px;
    padding-bottom: 5px;
    border-bottom: ${(props) => props.$isActive ? `2px solid ${props.theme.purple}` : 'none'};

`;