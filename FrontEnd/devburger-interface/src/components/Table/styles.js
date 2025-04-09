import styled from "styled-components";

export const Root = styled.table`
    width: 100%;
    border-collapse: collapse;
    background-color: ${(props) => props.theme.white};
    border-radius: 20px;
    overflow: hidden;
`;
export const Header = styled.thead``;
export const Tr = styled.tr``;
export const Th = styled.th`
    padding: 16px;
    text-align: left;
    color: ${(props) => props.theme.white};
    background-color: ${(props) => props.theme.secondBlack};
    border-bottom: 1px solid ${(props) => props.theme.lightGray};
`;
export const Td = styled.td`
    padding: 16px;
    color: ${(props) => props.theme.secondBlack};
    font-weight: 500;
    line-height: 115%;
`;
export const Body = styled.tbody``;