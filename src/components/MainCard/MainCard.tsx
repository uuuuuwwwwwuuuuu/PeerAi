import React, { FC } from "react";
import './MainCard.scss';
import styled from "styled-components";

interface IProps {
    title: string;
    info: React.ReactNode;
    second_info: string;
    gifSrc: string;
    leftElementsmaxWith: number;
}

const LeftMainCardElements = styled.div<{_maxWidth: number}>`
    display: flex;
    flex-direction: column;
    gap: 24px;
    align-items: flex-start;
    max-width: ${({_maxWidth}) => `${_maxWidth}px`};
    width: 100%;
`;

const RightMainCardElements = styled.div`
    
`;

const MainCard: FC<IProps> = ({title, info, second_info, gifSrc, leftElementsmaxWith}) => {
    return (
        <article className="main_card_article">
            <LeftMainCardElements _maxWidth={leftElementsmaxWith}>
                <h2>{title}</h2>
                <p>{info}</p>
                <p>{second_info}</p>
            </LeftMainCardElements>
        </article>
    )
};

export default MainCard;