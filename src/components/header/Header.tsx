import styled from 'styled-components';
import './Header.scss'
import useScreenSize from '../../detectScreenSize';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';

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


    button {
        font-family: Inter;
        font-weight: 400;
        font-size: 2.4rem;
        line-height: 100%;
        transition: 0.3s ease all;
        text-align: center;

        @media (hover:hover) {
            &:hover {
                color: ${({theme}) => theme.accent};
            }
        }
    }

    & {
        img {
            transition: 0.3s ease all;
        }
        @media (hover:hover) {
            img:hover {
                transform: scale(1.1);
            }
        }
    }

    @media screen and (max-width: 770px) {
        & {
            nav {
                display: flex;
                align-items: center;
                gap: 10px;

                button {
                    font-size: 1.8rem;
                    padding: 3px;
                }
            }
        }
    }
`;

const Header= () => {
    const {width} = useScreenSize();

    const navigate = useNavigate();


    return (
        <HeaderComponent>
            <HeaderLine>
                <nav>
                    <img onClick={() => navigate('/')} src={`${process.env.PUBLIC_URL}/icons/peer_black.svg`} alt="peer icon" />
                    <button>About</button>
                    <button>Discord</button>
                    <button>Github</button>
                </nav>
                <div className='header_sign_in'>
                    {
                        width <= 470
                            ? <Link to={'/login'}>
                                <img src={`${process.env.PUBLIC_URL}/icons/person.svg`} alt="person icon" />
                            </Link>
                            : <img src={`${process.env.PUBLIC_URL}/icons/person.svg`} alt="person icon" />
                    }
                    <div>
                        <button onClick={() => navigate('/login')}>Sign in</button>
                        <span>/</span>
                        <button onClick={() => navigate('/signup')}>Sign up</button>
                    </div>
                </div>
            </HeaderLine>
        </HeaderComponent>
    )
}

export default Header