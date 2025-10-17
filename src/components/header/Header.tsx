import { FC } from 'react';
import styled from 'styled-components';
import './Header.scss'

const HeaderComponent = styled.header`
    width: 100%;
    padding: 24px;
    background-color: ${({theme}) => theme.bgSecond};
`;

const HeaderLine = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    a {
        font-family: Inter;
        font-weight: 400;
        font-style: Regular;
        font-size: 24px;
        line-height: 100%;
        letter-spacing: 0%;
        text-align: center;

    }
`

const Header = () => {
    
    return (
        <HeaderComponent>
            <HeaderLine>
                <nav>
                    <img src={`${process.env.PUBLIC_URL}/icons/peer.svg`} alt="peer icon" />
                    <a href="#" target='_blank'>About</a>
                    <a href="#" target='_blank'>Discord</a>
                    <a href="#" target='_blank'>Github</a>
                </nav>
                <div className='header_sign_in'>
                    <img src={`${process.env.PUBLIC_URL}/icons/person.svg`} alt="person icon" />
                    <div>
                        <a href="#" target='_blank'>sign in</a>
                        <span>/</span>
                        <a href="#" target='_blank'>sign up</a>
                    </div>
                </div>

            </HeaderLine>
        </HeaderComponent>
    )
}

export default Header