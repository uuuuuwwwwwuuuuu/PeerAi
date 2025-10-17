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
    max-width: 433px;
    width: 100%;

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
`;

const RightMainCardElements = styled.div`
    max-width: 800px;
    width: 100%;
    height: 100%;

    img {
        width: 100%;
        height: 100%;
        border-radius: 16px;
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