import { FC } from "react";
import styled from "styled-components";
import { StyledButton } from "../main/Main";

const StyledFooter = styled.footer`
    display: flex;
    flex-direction: column;
    width: 100%;
`;

const FirstFooterSection = styled.div`
    width: 100%;
    padding: 100px 30px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 36px;

    @media screen and (max-width: 770px) {
        & {
            padding: 50px 20px
        }
    }
`;

const FooterInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    max-width: 1142px;
    width: 100%;

    h4 {
        font-family: Inter;
        font-weight: 500;
        font-size: 4.8rem;
    }

    p {
        text-align: center;
        font-family: Inter;
        font-weight: 400;
        font-size: 2.4rem;
        
        span {
            color: ${({theme}) => theme.accent}
        }
    }

    @media screen and (max-width: 770px) {
        & {
            h4 {
                font-size: 2.8rem;
            }

            p {
                font-size: 1.8rem;
            }
        }
    }
`;

const ButtonsWrapper = styled.div`
    display: flex;
    gap: 16px;

    button {
        height: 60px;
        width: 232px;
        transition: 0.3s ease all;
        
        @media (hover:hover) {
            &:hover {
                transform: scale(1.05)
            }       
        }
    }

    @media screen and (max-width: 770px) {
        & {
            button {
                height: 40px;
                
            }
        }
    }

    @media screen and (max-width: 570px) {
        & {
            flex-direction: column;
            width: 100%;

            button {
                width: 100%;
            }
        }
    }

`;

const SecondFooterSection = styled.div`
    padding: 63px 34px;
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media screen and (max-width: 770px) {
        & {
            padding: 30px 15px;
        }
    }

    @media screen and (max-width: 570px) {
        & {
            flex-direction: column;
        }
    }
`;

const PrivacyBigWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    font-family: Inter;
    font-weight: 200;
    font-size: 1.6rem;
    gap: 12px;
`;

const PrivacySmallWrapper = styled.div`
    display: flex;
    gap: 16px;
    align-items: center;

    span {
        font-family: Inter;
        font-weight: 300;
        font-size: 1.6rem;
    }
`;

const LinksWrapper = styled.div`
    display: flex;
    gap: 12px;
    a {
        font-family: Inter;
        font-weight: 300;
        font-size: 1.6rem;
        transition: 0.3s ease all;

        @media (hover:hover) {
            &:hover {
                color: ${({theme}) => theme.accent};
            }   
        }
    }
`;

const Footer: FC = () => {
    return (
        <StyledFooter>
            <FirstFooterSection>
                <FooterInfoWrapper>
                    <h4>Interested in contributing to PearAI?</h4>
                    <p>Pear is built by a large community of developers. If you have questions, or would like to discuss, you can join our <span>Discord</span> and talk to us directly! 🗣️</p>
                    <p>Help the community out by giving <span>the repo</span> a star! 🤩</p>
                </FooterInfoWrapper>
                <ButtonsWrapper>
                    <StyledButton $fill>Contributing 101</StyledButton>
                    <StyledButton $fill={false}>PearAI Master Doc</StyledButton>
                </ButtonsWrapper>
            </FirstFooterSection>
            <SecondFooterSection>
                <PrivacyBigWrapper>
                    <PrivacySmallWrapper>
                        <span>Privacy Policy</span>
                        <span>Terms of Service</span>
                    </PrivacySmallWrapper>
                    <span>© Pear AI - All rights reserved.</span>
                </PrivacyBigWrapper>
                <LinksWrapper>
                    <a href="#">Github</a>
                    <a href="#">Discord</a>
                    <a href="#">About</a>
                </LinksWrapper>
            </SecondFooterSection>
        </StyledFooter>
    )
}

export default Footer;