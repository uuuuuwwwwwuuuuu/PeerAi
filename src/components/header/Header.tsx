import { FC } from 'react';
import styled from 'styled-components';
import './Header.scss'

const HeaderComponent = styled.header`
    width: 100%;
    padding: 24px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    background-color: ${({theme}) => theme.bgSecond};
`

const Header = () => {
    
    return (
        <HeaderComponent>
            <div className='header_line'>
                <nav>
                    <img src={`${process.env.PUBLIC_URL}/icons/peer.svg`} alt="peer icon" />
                    <a href="#" target='_blank'>About</a>
                    <a href="#" target='_blank'>Discord</a>
                    <a href="#" target='_blank'>Github</a>
                </nav>
                <div className='header_sign_in'>

                </div>

            </div>
        </HeaderComponent>
    )
}

export default Header