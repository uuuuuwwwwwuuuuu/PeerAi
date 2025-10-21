import { FC } from "react";
import './PriceCard.scss';
import styled from "styled-components";
import useScreenSize from "../../../detectScreenSize";

const PriceArticle = styled.article<{$border: 'left' | 'right' | 'none', $size: 'big' | 'small'}>`
    padding: 21px 25px 25px 25px;
    border: 1px solid ${({theme}) => theme.accent};
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
    height: ${({$size}) => $size == 'big' ? 640 : 489}px;
    border-radius: ${({$border}) => {
        if ($border === 'left') {
            return '16px 0 0 16px'
        } else if ($border === 'right') {
            return '0 16px 16px 0';
        } else {
            return 0
        }
    }};
    transition: 0.5s ease all;
`;

const CardHeader = styled.div`
    width: 100%;
    height: 100px;

    h2 {
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 35px;
        letter-spacing: -0.34px;
    }

    p {
        font-weight: 400;
        font-size: 1.5rem;
        letter-spacing: -0.14px;

        color: ${({theme}) => theme.textSecond};
    }
`;

interface IPrors {
    title: string;
    info: string;
    price: number;
    options: readonly string[];
    border: 'left' | 'right' | 'none';
    size: 'big' | 'small'
}

const PriceContainer = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;

    @media screen and (max-width: 870px) {
        & {
            height: max-content;
        }

    }
`;

const PricePerMonth = styled.div<{$priceValue: boolean}>`
    display: flex;
    align-items: ${({$priceValue: price}) => price ? 'center' : 'flex-start'};
`;

const ExtraUsage = styled.div<{$priceValue: boolean}>`
    margin-left: 3.5px;
    width: 83px;
    font-family: JetBrains Mono;
    font-weight: 500;
    font-size: 1.2rem;
    line-height: 12px;
    letter-spacing: -0.34px;
    text-transform: uppercase;
    align-self: ${({$priceValue: price}) => price ? 'center' : 'self-start'};
    margin-top: ${({$priceValue: price}) => price ? 0 : '5px'};
`;

export const WideStyledButton = styled.button`
    width: 100%;
    height: 36px;
    font-weight: 500;
    font-size: 1.4rem;
    line-height: 14px;
    border-radius: 100px;
    background-color: ${({theme}) => theme.accent};
    color: ${({theme}) => theme.bgMain};
    transition: 0.3s ease all;
    @media (hover:hover) {
        &:hover {
            transform: scale(1.05)
        }       
    }
`;

const PriceCardFooter = styled.div<{$isInModal?: boolean}>`
    margin-top: 41px;
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;

    & > span {
        font-family: JetBrains Mono;
        font-weight: 500;
        font-size: 1.2rem;
        line-height: 18.96px;
        letter-spacing: -0.18px;
        text-transform: uppercase;
        color: ${({theme}) => theme.textSecond};
    }

    @media screen and (max-width: 870px) {
        & {
            display: ${({$isInModal}) => $isInModal ? 'none' : 'flex'};
        }
    }
`;

const StyledLi = styled.li`
    display: flex;
    gap: 14px;
    align-items: center;
    
    img {
        width: 16px;
        height: 16px
    }

    div {
        width: 100%;
        display: flex;

        a {
            display: flex;
            align-items: center;
            color: ${({theme}) => theme.link};
            font-size: 1.4rem;
            font-weight: 400;
        }
    }

    span {
        font-family: Inter;
        font-weight: 400;
        font-size: 1.4rem;
    }
`;

const ViewFeatures = styled.div`
    display: flex;
    width: 100%;
    font-family: Inter;
    font-weight: 500;
    font-size: 1.4rem;
    align-items: center;
    gap: 4px;

    img {
        width: 20px;
        height: 20px;
    }
`;

const OptionsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    max-width: 250px;
`

const renderIcon = (text: string) => {
    if (text.toLowerCase().startsWith('low')) {
        return <img src={`${process.env.PUBLIC_URL}/icons/low_priority.svg`} alt="low priority icon" />
    } else if (text.toLowerCase().startsWith('high')) {
        return <img src={`${process.env.PUBLIC_URL}/icons/high_priority.svg`} alt="high priority icon" />
    } else {
        return <img src={`${process.env.PUBLIC_URL}/icons/check_mark.svg`} alt="check mark" />
    }
}

const LiElement: FC<{text: string}> = ({text}) => {
    return (
        <StyledLi>
            {renderIcon(text)}
            <span>{text}</span>
        </StyledLi>
    )
}

const PriceCard: FC<IPrors> = ({title, info, price, options, border, size}) => {
    const {width} = useScreenSize();

    return (
        <PriceArticle $size={size} $border={border}>
            <CardHeader>
                <h2>{title}</h2>
                <p>{info}</p>
            </CardHeader>
            <PriceContainer>
                <div className="price_per_month_container">
                    <PricePerMonth $priceValue={price > 0 ? true : false}>
                        <span className="price">{`$${price}`}</span>
                        <ExtraUsage $priceValue={price > 0 ? true : false}>
                            /month<br/>
                            {price ? '+extra usage' : ''}
                        </ExtraUsage>
                    </PricePerMonth>
                    <WideStyledButton>{price ? 'Select Plan' : 'Start for Free'}</WideStyledButton>
                </div>
            </PriceContainer>
            <PriceCardFooter $isInModal={size === 'small' && true}>
                <OptionsWrapper>
                    <span>INCLUDES:</span>
                    <ul className="options_ul">
                        {
                            options.map((option, index) => {
                                return <LiElement key={index} text={option} />
                            })
                        }
                        {
                            !price && <StyledLi>
                                {renderIcon('')}
                                <div>
                                    <span style={{whiteSpace: 'pre'}}>Access to </span>
                                    <a href="#" target="_blank">
                                        Launch
                                        <img src={`${process.env.PUBLIC_URL}/icons/arrow.svg`} alt="arrow" />
                                    </a>
                                </div>
                            </StyledLi>
                        }
                    </ul>
                </OptionsWrapper>
                <ViewFeatures>
                    <img src={`${process.env.PUBLIC_URL}/icons/download.svg`} alt="download icon" />
                    <span>View all features</span>
                </ViewFeatures>
            </PriceCardFooter>
        </PriceArticle>
    )
};

export default PriceCard;