import ReactSelect from "react-select";
import styled from "styled-components";
import { Button } from "../../../components";

export const Container = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    min-height: 100vh;
`;
export const Form = styled.form`
    border-radius: 20px;
    background-color: ${(props) => props.theme.black};
    padding: 32px;
    width: 100%;
    max-width: 380px;
    display: flex;
    flex-direction: column;
    gap: 16px;
`;
export const InputGroup = styled.div`
    display: flex;
    flex-direction: column;
    gap: 4px;

`;
export const Label = styled.label`
    color: ${(props) => props.theme.white};
    font-size: 14px;
`;
export const Input = styled.input`
    width: 100%;
    height: 48px;
    padding: 12px;
    border-radius: 5px;
    border: none;
    padding: 0 12px;
`;
export const LabelUpload = styled.label`
    cursor: pointer;
    border: 1px solid ${(props) => props.theme.white};
    border-radius: 5px;
    padding: 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    color: ${(props) => props.theme.white};
    margin-top: 8px;

    > svg{
        width: 24px;
        height: 24px;
        fill: ${(props) => props.theme.white};
        margin: 0 5px;
    }

    input{
        display: none;
    }

`;
export const Select = styled(ReactSelect)`
    padding-top: 5px;
`;
export const SubmitButton = styled(Button)`
    margin-top: 16px;
    width: 100%;
    height: 48px;
    background-color: ${(props) => props.theme.purple};
    color: ${(props) => props.theme.white};
    font-weight: bold;
    font-size: 16px;

    &:hover {
        background-color: ${(props) => props.theme.darkPurple};
    }
`;

export const ErrorMessage = styled.span`
    color: ${(props) => props.theme.darkRed};
    font-size: 14px;
    line-height: 80%;
    font-size: 600;
`;
