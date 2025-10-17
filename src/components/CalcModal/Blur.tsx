import { FC } from "react";
import styled from "styled-components";

const BlurDiv = styled.div`
    width: 100%;
    height: 100svh;
    position: fixed;
    backdrop-filter: blur(10px);
    filter: brightness(0.7);
    top: 0;
    left: 0;
    z-index: 4;
`;

const Blur: FC = () => {
    return <BlurDiv />
} 

export default Blur;