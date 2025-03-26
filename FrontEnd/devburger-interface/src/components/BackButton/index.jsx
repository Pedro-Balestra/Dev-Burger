import { FiArrowLeft } from "react-icons/fi";
import { useNavigate } from "react-router-dom";
import { BackButton } from './styles';


export function BackButtonArrow({ path }) {

    const navigate = useNavigate();

    return <BackButton
        onClick={() => {
            navigate(
                {
                    pathname: path,
                }
            )
        }}
    > <FiArrowLeft size={30} /></BackButton>
}