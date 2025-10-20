import { FC } from 'react';
import './Main.scss';
import MainCard from './MainCard/MainCard';
import styled from 'styled-components';
import PriceCard from './PriceCard/PriceCard';

const Prices = styled.div`
    width: 100%;
    height: max-content;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: ${({theme}) => theme.bgSecond};
`;


const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    max-width: max-content;
    width: 100%;
    max-width: 904px;

    h1 {
        font-size: 5.6rem;
        margin: 0;
        span {
            color: $accent;
        }
    }

    p {
        font-family: Figtree;
        font-weight: 500;
        font-size: 2.4rem;
        text-align: center;
        color: ${({theme}) => theme.textSecond};
    }
`;

export const PeerCircle = styled.div<{$size: 'big' | 'small'}>`
    width: ${({$size}) => $size === 'big' ? '100px' : '75px'};
    height: ${({$size}) => $size === 'big' ? '100px' : '75px'};
    border: 1px solid ${({theme}) => theme.accent};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        height: 50px;
    }
`;

const CompareWrapper = styled.div`
    display: flex;
    gap: 15px;
    align-self: self-start;
    height: 32px;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 38px;

    span {
        font-family: JetBrains Mono;
        font-weight: 700;
        font-size: 2rem;
        line-height: 30px;
        letter-spacing: -0.27px;
        text-transform: uppercase;
    }
`;

const CompareButton = styled.button`
    padding: 8px 13px;
    display: flex;
    gap: 6px;
    border-radius: 6px;
    border: 1px solid ${({theme}) => theme.accent};
    align-items: center;
    background-color: transparent;

    span {
        font-family: Inter;
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 12px;
        letter-spacing: -0.18px;
        text-align: center;
        text-transform: capitalize;
    }
`;

export const StyledButton = styled.button<{$fill: boolean}>`
    height: 50px;
    width: 190px;
    background-color: ${({theme, $fill}) => $fill ? theme.accent : theme.bgMain};
    font-family: 'Figtree';
    font-weight: 600;
    font-size: 2rem;
    border-radius: 100px;
    color: ${({theme, $fill}) => $fill ? theme.bgMain : theme.accent};
    border: ${({theme, $fill}) => $fill ? '' : '1px solid ' + theme.accent};
`;

const HeaderInfoWrapper = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    height: 744px;
    border-bottom: 1px solid ${({theme}) => theme.bgSecond};
`;

interface IProps {
    setIsVisibleCalcModal: React.Dispatch<React.SetStateAction<boolean>>
}

const Main: FC<IProps> = ({setIsVisibleCalcModal}) => {
    return (
        <main>
            <HeaderInfoWrapper>
                <HeaderInfo>
                    <div className='peer_wrapper'>
                        <PeerCircle $size='big'>
                            <img src={`${process.env.PUBLIC_URL}/icons/peer_accent.svg`} alt="peer accent color" />
                        </PeerCircle>
                        <span>Peer AI</span>
                    </div>
                    <h1>
                        The Open Source <span>AI-Powered</span> Code Editor
                    </h1>
                    <p>
                        Speed up your development process by seamlessly  integrating AI into your workflow. Afraid of switching editors? No need, Pear is a fork of VSCode and retains all its features, you’ll feel right at home
                    </p>
                    <div className='header_buttons_wrapper'>
                        <StyledButton $fill={false}>More Details</StyledButton>
                        <StyledButton $fill={true}>Join Waitlist</StyledButton>
                    </div>
                </HeaderInfo>
            </HeaderInfoWrapper>
            <section className="main_container">
                <MainCard 
                    title='No more switching between files.'
                    info={<p>To add missing context: directly reference code by including other files in the chat by adding <b>@filename</b>.</p>}
                    second_info='This also works for folders, docs, terminal content, codebase, and more 😈'
                    gifSrc={`${process.env.PUBLIC_URL}/img/first_main_card.gif`}
                />
                <MainCard 
                    title='No more tedious changes, or forgetting language syntax.'
                    info={<p>Directly make changes inline by pressing CMD+I (ALT+L on Windows), and choose what you want to keep.</p>}
                    second_info='Here, we ask Pear to help us handle edge cases 😏'
                    gifSrc={`${process.env.PUBLIC_URL}/img/second_main_card.gif`}
                />
                <MainCard 
                    title='No more tiresome copy pasting.'
                    info={<p>Directly bring your code to the chat by selecting it and pressing CMD+L (ALT+L on Windows).</p>}
                    second_info='Prompt it right away 😎'
                    gifSrc={`${process.env.PUBLIC_URL}/img/third_main_card.gif`}
                />
            </section>
            <Prices>
                <div style={{gap: 0}} className="main_container">
                    <h3>Grow confidently with predictable pricing</h3>
                    <CompareWrapper>
                        <span>COMPARE</span>
                        <CompareButton onClick={() => setIsVisibleCalcModal(true)}>
                            <img src={`${process.env.PUBLIC_URL}/icons/calculator.svg`} alt="calculator icon" />
                            <span>Calculator</span>
                        </CompareButton>
                    </CompareWrapper>
                    <section className='price_cards_wrapper'>
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
                            size='big'
                        />
                        <PriceCard
                            title='Starter'
                            info='For solo developers working on a passion project.'
                            price={0}
                            options={[
                                '15 Android and 15 iOS builds',
                                'Low-priority queue',
                                '60 min. on CI/CD Workflows',
                                'Submit to app stores',
                                'Send updates to 1K MAUs',
                            ]}
                            border='none'
                            size='big'
                        />
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
                            border='none'
                            size='big'
                        />
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
                            border='right'
                            size='big'
                        />
                    </section>
                </div>
            </Prices>
        </main>
    )
}

export default Main;