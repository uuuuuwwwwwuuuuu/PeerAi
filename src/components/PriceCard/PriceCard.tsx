import { FC } from "react";
import './PriceCard.scss';
import styled from "styled-components";

const PriceArticle = styled.article`
    padding: 21px 25px 25px 25px;
    border: 1px solid ${({theme}) => theme.accent};
    flex: 0 0 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    text-align: start;
`;

const CardHeader = styled.div`
    width: 100%;
    height: 100px;

    h2 {
        font-family: Inter;
        font-weight: 500;
        font-size: 2.5rem;
        line-height: 35px;
        letter-spacing: -0.34px;
    }

    p {
        font-family: Inter;
        font-weight: 400;
        font-size: 1.5rem;
        line-height: 24px;
        letter-spacing: -0.14px;

        color: ${({theme}) => theme.textSecond};
    }
`;

interface IPrors {
    title: string;
    info: string;
    price: number;
    options: string[];
}

const PriceContainer = styled.div`
    width: 100%;
    height: 180px;
    display: flex;
    align-items: center;
`;

const PricePerMonth = styled.div`
    display: flex;
`;

const PriceCard: FC<IPrors> = ({title, info, price, options}) => {
    return (
        <PriceArticle>
            <CardHeader>
                <h2>{title}</h2>
                <p>{info}</p>
            </CardHeader>
            <PriceContainer>
                <div className="price_per_month_container">
                    <PricePerMonth>
                        <span>$`${price}`</span>
                        
                    </PricePerMonth>
                </div>
            </PriceContainer>
        </PriceArticle>
    )
};

export default PriceCard;