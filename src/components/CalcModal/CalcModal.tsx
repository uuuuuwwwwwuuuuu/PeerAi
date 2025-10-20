import { FC, useEffect, useState } from "react";
import styled from "styled-components";
import CalcModalProgress from "./CalcModalProgress";
import PriceCard from "../main/PriceCard/PriceCard";

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
    

    @media screen and (max-width: 1120px) {
        & {
            max-width: 800px;
            margin-left: -400px;
            section {
                width: 350px;
            }
        }
    }
`;

const ModalHeader = styled.div`
    width: 100%;
    height: 70px;
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
    height: calc(100% - 70px);
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1120px) {
        gap: 30px
    }
`;

const MainLeftElements = styled.div`
    width: 100%;
    height: 100%;
    flex: 0 1 447px;

    @media screen and (max-width: 1120px) {
        flex-basis: 300px;
        flex-grow: 1;
    }
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

const MainRightElements = styled.section`
    max-width: 447px;
    width: 100%;

    article {
        border-radius: 16px;
        border-color: #E0E1E6;
    }
`;

type Plans = 'free' | 'starter' | 'production' | 'enterprise'

const renderPriceCard = (plan: Plans) => {
    switch (plan) {
        case 'free':
            return (
                <PriceCard
                    title='Free'
                    info='For solo developers working on a passion project.'
                    price={0}
                    options={[
                        '15 Android and 15 iOS builds',
                        'Low-priority queue',
                        '60 min. on CI/CD Workflows',
                        'Submit to app stores',
                        'Send updates to 1K MAUs',
                    ]}
                    border='left'
                    size='small'
                />
            );
        case 'starter':
            return (
                <PriceCard
                    title='Starter'
                    info='For developers ready to launch real-world apps.'
                    price={19}
                    options={[
                        '145 of builds',
                        'High-priority queue',
                        'Access to large workers',
                        'Send updates to 3K MAUs',
                    ]}
                    border='none'
                    size='small'
                />
            );
        case 'production':
            return (
                <PriceCard
                    title='Production'
                    info='For teams building and distributing production apps.'
                    price={199}
                    options={[
                        '225 builds',
                        '2 included concurrencies',
                        'Send updates to 50K MAUs',
                        'Priority support',
                        'Single sign-on (SSO)',
                    ]}
                    border='none'
                    size='small'
                />
            );
        case 'enterprise':
            return (
                <PriceCard
                    title='Enterprise'
                    info='For apps with scale, security, and compliance needs.'
                    price={1999}
                    options={[
                        '1,000 of builds',
                        '5 included concurrencies',
                        'Send updates to 1M MAUs',
                        'Slack and strategic support add-on available',
                    ]}
                    border='right'
                    size='small'
                />
            );
    }
}

const CalcModal: FC<IProps> = ({setIsVisibleCalcModal}) => {
    const [MAUsValue, setMAUsValue] = useState(0);
    const [buildsValue, setBuildsValue] = useState(0);
    const [minsValue, setMinsValue] = useState(0);

    const [currentPlan, setCurrentPlan] = useState<Plans>('free');

    useEffect(() => {
        if (MAUsValue > 50000 || buildsValue > 225 || minsValue > 1000) {
            setCurrentPlan('enterprise');
            console.log('enterprise');
        } else if (MAUsValue > 3000 || buildsValue > 45 || minsValue > 350) {
            setCurrentPlan('production');
            console.log('prod');
        } else if (MAUsValue > 1000 || buildsValue > 30 || minsValue > 60) {
            setCurrentPlan('starter');
            console.log('starter');
        } else {
            setCurrentPlan('free');
            console.log('free');
        }
    }, [MAUsValue, buildsValue, minsValue])

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
                        <CalcModalProgress 
                            unitType="MAUs"
                            title="Monthly Active Users"
                            setProgresDataValue={setMAUsValue}   
                        />
                        <CalcModalProgress 
                            unitType="builds"
                            title="Builds"
                            setProgresDataValue={setBuildsValue}    
                        />
                        <CalcModalProgress 
                            unitType="mins"
                            title="Workflows CI/CD minutes"
                            setProgresDataValue={setMinsValue}  
                        />
                    </ProgressWrapper>
                </MainLeftElements>
                <MainRightElements>
                    {renderPriceCard(currentPlan)}
                </MainRightElements>
            </ModalMain>
        </ModalWindow>
    )
}

export default CalcModal