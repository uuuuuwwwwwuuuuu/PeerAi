import { useEffect, useState } from "react";
import styled from "styled-components";
import CalcModalProgress from "./CalcModalProgress";
import PriceCard from "../main/PriceCard/PriceCard";
import { useNavigate } from "react-router-dom";
import useScreenSize from "../../detectScreenSize";

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
    transition: 0.5s ease all;
    

    @media screen and (max-width: 1120px) {
        & {
            max-width: 800px;
            margin-left: -400px;
            section {
                width: 350px;
            }
        }
    }

    @media screen and (max-width: 870px) {
        & {
            width: 680px;
            margin-left: -340px;
        }
    }
    
    @media screen and (max-width: 700px) {
        & {
            width: 380px;
            margin-left: -190px;
        }
    }

    @media screen and (max-width: 400px) {
        & {
            width: 270px;
            margin-left: -135px;
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
        text-transform: uppercase;
        color: ${({theme}) => theme.text};
    }
    
    img {
        height: 100%;
    }

    @media screen and (max-width: 400px) {
        & {
            span {
                font-size: 1.8rem;
            }
        }
    }
`

const ModalMain = styled.div`
    padding: 16px 25px 25px 25px;
    height: calc(100% - 70px);
    width: 100%;
    display: flex;
    justify-content: space-between;

    @media screen and (max-width: 1120px) {
        gap: 30px;
    }

    @media screen and (max-width: 870px) {
        flex-direction: column-reverse;
        gap: 20px;
        justify-content: space-between;
        align-items: center;
    }

    @media screen and (max-width: 700px) {
        & {
            padding: 10px;
        }
    }
`;

const MainLeftElements = styled.div`
    width: 100%;
    height: 100%;
    flex: 0 1 447px;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    
    p {
        text-align: start;
        font-weight: 400;
        font-size: 12px;
    }

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

    @media screen and (max-width: 870px) {
        & {
            gap: 10px;
        }

        & > div {
            height: 75px;
            border-radius: 10px;
            padding: 10px 30px;
        }
    }
`;

const MainRightElements = styled.section`
    max-width: 447px;
    width: 100%;

    article {
        border-radius: 16px;
        border-color: #E0E1E6;
    }

    @media screen and (max-width: 870px) {
        & {
            article {
                height: max-content;
            }
        }
    }

    @media screen and (max-width: 400px) {
        & {
            max-width: 250px;
        }
    }
`;

const TextWrapper = styled.div`
    display: flex;
    /* margin-top: 12px; */

    span {
        margin-right: 5px;
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

const CalcModal = () => {
    const [MAUsValue, setMAUsValue] = useState(0);
    const [buildsValue, setBuildsValue] = useState(0);
    const [minsValue, setMinsValue] = useState(0);

    const [currentPlan, setCurrentPlan] = useState<Plans>('free');

    const { width } = useScreenSize();

    useEffect(() => {
        if (MAUsValue > 50000 || buildsValue > 225 || minsValue > 1000) {
            setCurrentPlan('enterprise');
        } else if (MAUsValue > 3000 || buildsValue > 45 || minsValue > 350) {
            setCurrentPlan('production');
        } else if (MAUsValue > 1000 || buildsValue > 30 || minsValue > 60) {
            setCurrentPlan('starter');
        } else {
            setCurrentPlan('free');
        }
    }, [MAUsValue, buildsValue, minsValue])

    const navigate = useNavigate();

    return (
        <ModalWindow>
            <ModalHeader>
                <HeaderLeftElements>
                    <img src={`${process.env.PUBLIC_URL}/icons/calculator.svg`} alt="calculator icon" />
                    <span>Usage plan calculator</span>
                </HeaderLeftElements>
                <button onClick={() => navigate(-1)}>
                    <img src={`${process.env.PUBLIC_URL}/icons/cross.svg`} alt="cross" />
                </button>
            </ModalHeader>
            <ModalMain>
                <MainLeftElements>
                    <ProgressWrapper>
                        <CalcModalProgress 
                            unitType="MAUs"
                            title="Monthly Active Users"
                            setProgressDataValue={setMAUsValue}   
                        />
                        <CalcModalProgress 
                            unitType="builds"
                            title="Builds"
                            setProgressDataValue={setBuildsValue}    
                        />
                        <CalcModalProgress 
                            unitType="mins"
                            title="Workflows CI/CD minutes"
                            setProgressDataValue={setMinsValue}  
                        />
                    </ProgressWrapper>
                    {
                        width > 880 &&
                        <>
                            <p>Expecting over 1,000,000 MAU? <span>Contact us</span> for a more accurate estimate</p>
                            <TextWrapper>
                                <span>*</span>
                                <p>Your bill may vary from the estimated extra usage based on your specific
                                    usage. Estimates are based on average MAU, build, and CI/CD minute costs.
                                    Extra usage is charged when exceeding the resource allotment included in the
                                    subscription plan.</p>
                            </TextWrapper>
                        </>
                    }

                </MainLeftElements>
                <MainRightElements>
                    {renderPriceCard(currentPlan)}
                </MainRightElements>
            </ModalMain>
        </ModalWindow>
    )
}

export default CalcModal