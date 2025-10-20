import { FC } from "react";
import styled from "styled-components";
import CalcModalProgress from "./CalcModalProgress";

const ModalWindow = styled.div`
    position: fixed;
    max-width: 1024px;
    width: 100%;
    height: 600px;
    background-color: ${({theme}) => theme.bgMain};
    border-radius: 10px;
    top: 50%;
    left: 50%;
    margin-top: -300px;
    margin-left: -512px;
    z-index: 5;
`;

const ModalHeader = styled.div`
    width: 100%;
    height: 69px;
    border-bottom: 1px solid #EEEEEE;
    background-color: ${({theme}) => theme.bgSecond};
    border-radius: 10px 10px 0 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24px;

    button {
        background-color: transparent;
    }
`

const HeaderLeftElements = styled.div`
    display: flex;
    align-items: center;
    gap: 12px;

    span {
        font-family: JetBrains Mono;
        font-weight: 700;
        font-size: 2rem;
        line-height: 30px;
        text-transform: uppercase;
        color: ${({theme}) => theme.text};
    }
    
    img {
        height: 100%;
    }
`

interface IProps {
    setIsVisibleCalcModal: React.Dispatch<React.SetStateAction<boolean>>
}

const ModalMain = styled.div`
    padding: 16px 25px 25px 25px;
    height: 100%;
    width: 100%;
    display: flex;
    justify-content: space-between;
`;

const MainLeftElements = styled.div`
    max-width: 447px;
    width: 100%;
    height: 100%;

`;

const ProgressWrapper = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    gap: 16px;
`

const StyledP = styled.p`
    white-space: pre;
    text-align: start;
`

const MainRightElements = styled.div`
    max-width: 447px;
    width: 100%;
`

const CalcModal: FC<IProps> = ({setIsVisibleCalcModal}) => {
    return (
        <ModalWindow>
            <ModalHeader>
                <HeaderLeftElements>
                    <img src={`${process.env.PUBLIC_URL}/icons/calculator.svg`} alt="calculator icon" />
                    <span>Usage plan calculator</span>
                </HeaderLeftElements>
                <button onClick={() => setIsVisibleCalcModal(false)}>
                    <img src={`${process.env.PUBLIC_URL}/icons/cross.svg`} alt="cross" />
                </button>
            </ModalHeader>
            <ModalMain>
                <MainLeftElements>
                    <ProgressWrapper>
                        <CalcModalProgress unitTypes="MAUs" title="Monthly Active Users" />
                        <CalcModalProgress unitTypes="builds" title="Builds" />
                        <CalcModalProgress unitTypes="mins" title="Workflows CI/CD minutes" />
                    </ProgressWrapper>
                </MainLeftElements>
                <MainRightElements>

                </MainRightElements>
            </ModalMain>
        </ModalWindow>
    )
}

export default CalcModal