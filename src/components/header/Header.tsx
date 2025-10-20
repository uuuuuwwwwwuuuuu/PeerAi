import { Dispatch, FC } from 'react';
import styled from 'styled-components';
import './Header.scss'
import { Pages } from '../app/App';

const HeaderComponent = styled.header`
    width: 100%;
    height: 76px;
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



interface IProps {
    setPage: Dispatch<React.SetStateAction<Pages>>
}

const Header: FC<IProps> = ({setPage}) => {
    
    return (
        <HeaderComponent>
            <HeaderLine>
                <nav>
                    <img onClick={() => setPage('main')} src={`${process.env.PUBLIC_URL}/icons/peer_black.svg`} alt="peer icon" />
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
        </HeaderComponent>
    )
}

export default Header