import styled from "styled-components";
import { BiLoader } from "react-icons/bi";

export default function Loading(){
    return(
        <Load>
            <BiLoader/>
        </Load>
    )
}

const Load = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 800px;
    font-size: 200px;
    animation: spin 1s infinite; 


    @keyframes spin {
        from {
            transform: rotate(0deg);
        }
        to{
            transform: rotate(360deg);
        }
    }
`