import React, { FC } from "react";
import './MainCard.scss';
import styled from "styled-components";

interface IProps {
    title: string;
    info: React.ReactNode;
    second_info: string;
    gifSrc: string;
}

const LeftMainCardElements = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    flex: 0 1 430px;

    h2 {
        font-family: Inter;
        font-weight: 700;
        font-size: 36px;
        line-height: 100%;
        letter-spacing: -3%;
        color: ${({theme}) => theme.accent};
        margin: 0;
    }

    p {
        font-family: Inter;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: -3%;
        color: ${({theme}) => theme.text};
    }

    @media screen and (max-width: 1000px) {
        & {
            gap: 14px;
            align-items: center;
            flex-basis: 200px;

            h2 {
                text-align: center;
            }

            p {
                text-align: center
            }

            max-width: 600px;
        }
    }
`;

const RightMainCardElements = styled.div`
    flex: 0 1 800px;
    height: 100%;
    margin-left: 20px;

    img {
        width: 100%;
        height: 100%;
        border-radius: 16px;
        object-fit: cover;
    }

    @media screen and (max-width: 1000px) {
        & {
            width: 100%;
            flex-basis: 350px;
            margin: 0;
        }    
    }
`;

const MainCard: FC<IProps> = ({title, info, second_info, gifSrc}) => {
    return (
        <article className="main_card_article">
            <LeftMainCardElements>
                <h2>{title}</h2>
                {info}
                <p>{second_info}</p>
            </LeftMainCardElements>
            <RightMainCardElements>
                <img src={gifSrc} alt="gif" />
            </RightMainCardElements>
        </article>
    )
};

export default MainCard;