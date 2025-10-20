import { Dispatch, FC } from 'react';
import styled from 'styled-components';
import './Header.scss'
import { Pages } from '../app/App';

const HeaderComponent = styled.header`
    width: 100%;
    height: 810px;
    background-color: ${({theme}) => theme.bgMain};
    display: flex;
    flex-direction: column;
    align-items: center;
    border-bottom: 1px solid #EEEEEE;
`;

const HeaderLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.bgSecond};
    padding: 24px;
    width: 100%;


    a {
        font-family: Inter;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 100%;
        text-align: center;
    }
`;

const HeaderInfo = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 36px;
    margin-top: 72px;
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

const PeerCircle = styled.div`
    width: 100px;
    height: 100px;
    border: 1px solid ${({theme}) => theme.accent};
    border-radius: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    
    img {
        height: 50px;
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

interface IProps {
    setPage: Dispatch<React.SetStateAction<Pages>>
}

const Header: FC<IProps> = ({setPage}) => {
    
    return (
        <HeaderComponent>
            <HeaderLine>
                <nav>
                    <img src={`${process.env.PUBLIC_URL}/icons/peer_black.svg`} alt="peer icon" />
                    <a href="#" target='_blank'>About</a>
                    <a href="#" target='_blank'>Discord</a>
                    <a href="#" target='_blank'>Github</a>
                </nav>
                <div className='header_sign_in'>
                    <img src={`${process.env.PUBLIC_URL}/icons/person.svg`} alt="person icon" />
                    <div>
                        <button onClick={() => setPage('login')}>Sign in</button>
                        <span>/</span>
                        <button onClick={() => setPage('signup')}>Sign up</button>
                    </div>
                </div>
            </HeaderLine>
            <HeaderInfo>
                <div className='peer_wrapper'>
                    <PeerCircle>
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
            <hr />
        </HeaderComponent>
    )
}

export default Header