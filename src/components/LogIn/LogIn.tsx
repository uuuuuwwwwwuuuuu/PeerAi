import { FC } from "react";
import styled from "styled-components";
import { PeerCircle } from "../main/Main";
import { WideStyledButton } from "../main/PriceCard/PriceCard";
import { Link } from "react-router-dom";

const SignUpWrapper = styled.div`
    width: 100%;
    height: calc(100% - 76px);
    display: flex;
    justify-content: center;
    align-items: center;
`;

const SignUpInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 20px;
    max-width: 468px;
    width: 100%;
`;

const StyledForm = styled.form`
    width: 100%;
    border: 1px solid ${({theme}) => theme.accent};
    border-radius: 16px;
    padding: 37px 33px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

const InputWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 6px;
    align-items: flex-start;
    
    label {
        font-family: Inter;
        font-weight: 400;
        font-size: 1.56rem;
    }

    input {
        width: 100%;
        height: 48px;
        border-radius: 12px;
        border: 1px solid #B1B1B1;
        padding: 13px;

        font-family: Inter;
        font-weight: 400;
        font-size: 1.56rem;

        transition: 0.3s ease all;

        &::placeholder {
            color: #0B100F33;
        }

        &:focus {
            border-color: ${({theme}) => theme.accent}; 
        }
    }
`;

const WrapperForInputs = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;


    span {
        font-family: Inter;
        font-weight: 500;
        font-size: 1.4rem;
        line-height: 18.2px;
        letter-spacing: -0.29px;
        color: #0B100F80;

        a {
            display: inline;
            font-family: DM Sans;
            font-weight: 500;
            font-size: 1.4rem;
            line-height: 18.2px;
            letter-spacing: -0.29px;
            color: #096FFFB2;
        }
    }

    button {
        font-family: Figtree;
        font-weight: 600;
        font-size: 1.8rem;
    }
`;

const OrWrapper = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    gap: 10px;
    margin: 16px 0;
    span {
        font-family: Inter;
        font-weight: 400;
        font-size: 1.6rem;
        flex: 0 0;
        color: #0B100F80;
    }

    div {
        height: 2px;
        background-color: #0B100F80;
        width: 100%;
        opacity: 0.5;
    }
`;

const SignUpWithSocial = styled.div`
    display: flex;
    flex-direction: column;
    gap: 14px;
    margin-bottom: 32px;
    width: 100%;
    
    button {
        background-color: transparent;
        border: 1px solid #0B100F33;
        height: 42px;
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 12px;
        font-family: Figtree;
        font-weight: 600;
        font-size: 1.6rem;

        img {
            width: 20px;
            height: 20px;
        }
    }

    @media screen and (max-width: 400px) {
        & {
            button {
                font-size: 1.4rem;
            }
        }
    }
`;

const ToggleDiv = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
    
    span {
        font-weight: 500;
        font-size: 1.4rem;
        font-family: Inter;
        color: #0B100F80;
    }

    a {
        font-family: Inter;
        font-weight: 500;
        font-size: 1.35rem;
        color: #096FFFB2;
    }
`;

const FormContainer = styled.div`
    width: 100%;
    padding: 0 10px;
`

const Form: FC<{type: 'login' | 'signup'}> = ({type}) => {
    return (
        <FormContainer>
            <StyledForm>
                <WrapperForInputs>
                    <InputWrapper>
                        <label htmlFor="email">Email</label>
                        <input type="email" id="email" placeholder="Enter your email address" />
                    </InputWrapper>
                    <InputWrapper>
                        <label htmlFor="password">Password</label>
                        <input type="email" id="password" placeholder="Enter your password" />
                    </InputWrapper>
                    <span>Forgot password? <a href="#">Send reset code</a></span>
                    <WideStyledButton >{type === 'signup' ? 'Sign up' : 'Log in'}</WideStyledButton>
                </WrapperForInputs>
                <OrWrapper>
                    <div></div>
                    <span>or</span>
                    <div></div>
                </OrWrapper>
                <SignUpWithSocial>
                    <WideStyledButton>
                        <img src={`${process.env.PUBLIC_URL}/icons/google.svg`} alt="google" />
                        <span>Sign up with Google</span>
                    </WideStyledButton>
                    <WideStyledButton>
                        <img src={`${process.env.PUBLIC_URL}/icons/github.svg`} alt="google" />
                        <span>Sign up with GitHub</span>
                    </WideStyledButton>
                    <WideStyledButton>
                        <span>Sign up with SSO for Enterprise</span>
                    </WideStyledButton>
                </SignUpWithSocial>
                <ToggleDiv>
                    <span>Don't have an account? </span>
                    <Link to={type === 'signup' ? '/login' : '/signup'}>{type === 'signup' ? 'Log in' : 'Sign up'}</Link>
                </ToggleDiv>
            </StyledForm>
        </FormContainer>
    )
}

const Login: FC<{type: 'login' | 'signup'}> = ({type}) => {
    return (
        <SignUpWrapper>
            <SignUpInfoWrapper>
                <div className='peer_wrapper'>
                    <PeerCircle $size="small">
                        <img src={`${process.env.PUBLIC_URL}/icons/peer_accent.svg`} alt="peer accent color" />
                    </PeerCircle>
                    <span style={{fontWeight: 400, fontSize: '2.6rem'}}>{type === 'signup' ? 'Sign up' : 'Log in'}</span>
                </div>
                <Form type={type} />
            </SignUpInfoWrapper>
        </SignUpWrapper>
    )
}

export default Login;