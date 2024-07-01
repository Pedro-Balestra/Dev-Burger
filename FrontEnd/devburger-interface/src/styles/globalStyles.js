import 'react-toastify/dist/ReactToastify.css';
import { createGlobalStyle } from 'styled-components';

const globalStyles = createGlobalStyle`
*{
    margin: 0;
    padding:0;
    box-sizing: border-box;
    outline: none;
    font-family: 'Roboto', sans-serif;

}
button, a{
    cursor: pointer;
}
`;
export default globalStyles;
