import { FC, MouseEvent, useEffect, useRef, useState } from "react";
import styled from "styled-components";

const ProgressWrapper = styled.div`
    background-color: #F9F9FB;
    padding: 16px 16px 30px 16px;
    width: 100%;
    height: 110px;
    border-radius: 20px;
`;

const ProgressInfoLine = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;

    span:first-child {
        font-family: Inter;
        font-weight: 600;
        font-size: 1.6rem;
        line-height: 26px;
        letter-spacing: -0.18px;
    }

    span:last-child {
        font-family: Inter;
        font-weight: 400;
        font-size: 1.4rem;
        line-height: 21.98px;
    }
`;

const BackgroundProgressBar = styled.div`
    width: 100%;
    height: 5px;
    border-radius: 100px;
    background-color: #E0E1E6;
`

const ProgressBar = styled.div`
    height: 100%;
    background-color: ${({theme}) => theme.accent};
    position: relative;
`

const ProgressBarCircle = styled.div`
    height: 24px;
    width: 24px;
    border-radius: 100%;
    border: 2px solid white;
    position: absolute;
    background-color: ${({theme}) => theme.accent};
    right: -10px;
    top: -10px;
    cursor: pointer;


    transition: 0.3s ease all;

    &:hover {
        transform: scale(0.85);
    }
`

const renderUnitOfMeasurement = (title: string) => {
    if (title == 'Monthly Active Users') {
        return 'MAUs';
    } else if (title == 'Builds') {
        return 'builds';
    } else {
        return 'mins';
    }
}

const convertWidthToPercents = (wrapperWidth: number, currentWidth: number) => {
    return currentWidth * 100 / wrapperWidth;
}


const CalcModalProgress: FC<{title: string}> = ({title}) => {
    const progressBarRef = useRef<HTMLDivElement>(null);
    const wrapperProgressBarRef = useRef<HTMLDivElement>(null);

    const [progressValue, setProgressValue] = useState(0);
    const [currentWidthValue, setCurrentWidthValue] = useState(0);
    
    const onChangeProgress = (event: MouseEvent<HTMLDivElement>) => {
        const currentMouseOffset = event.nativeEvent.offsetX;

        if (progressBarRef.current && wrapperProgressBarRef.current) {
            const wrapperProgressWidth = wrapperProgressBarRef.current.clientWidth;
            const progressWidth = convertWidthToPercents(wrapperProgressBarRef.current.clientWidth, currentMouseOffset);
            setCurrentWidthValue(convertWidthToPercents(wrapperProgressBarRef.current.clientWidth, currentMouseOffset));

            const currentPercentValue = convertWidthToPercents(wrapperProgressWidth, progressWidth);
            

            if (title == 'Monthly Active Users') {
                setProgressValue(Math.floor(currentPercentValue * 1000000 / 100));
            } else if (title == 'Builds') {
                setProgressValue(Math.floor(currentPercentValue * 1000 / 100));
            } else {
                setProgressValue(Math.floor(currentPercentValue * 1500 / 100));
            }

        }
    }

    return (
        <ProgressWrapper>
            <ProgressInfoLine>
                <span>{title}</span>
                <span>
                    {progressValue} {renderUnitOfMeasurement(title)}
                </span>
            </ProgressInfoLine>
            <BackgroundProgressBar onClick={onChangeProgress} ref={wrapperProgressBarRef}>
                <ProgressBar style={{width: currentWidthValue + '%'}} ref={progressBarRef}>
                    <ProgressBarCircle />
                </ProgressBar>
            </BackgroundProgressBar>
        </ProgressWrapper>
    );
}

export default CalcModalProgress;