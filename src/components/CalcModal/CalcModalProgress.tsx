import { Dispatch, FC, MouseEvent, SetStateAction, useRef, useState } from "react";
import styled from "styled-components";
import useScreenSize from "../../detectScreenSize";

const ProgressWrapper = styled.div`
    background-color: #F9F9FB;
    padding: 16px 16px 30px 16px;
    width: 100%;
    height: 110px;
    border-radius: 20px;
    display: flex;
    flex-direction: column;

    @media screen and (max-width: 870px) {
        justify-content: space-around;
    }
`;

const ProgressInfoLine = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    margin-bottom: 24px;
    align-items: center;

    span:first-child {
        font-family: Inter;
        font-weight: 600;
        font-size: 1.6rem;
        letter-spacing: -0.18px;
    }

    span:last-child {
        font-family: Inter;
        font-weight: 400;
        font-size: 1.4rem;
    }

    @media screen and (max-width: 870px) {
        & {
            margin-bottom: 5px;
        }
    }

    @media screen and (max-width: 400px) {
        & {
            span:first-child {
                font-size: 1.1rem;
            }
            
            span:last-child {
                font-size: 1.1rem;
            }
        }
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
    border-radius: 100px;
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
    @media (hover:hover) {
        &:hover {
            transform: scale(0.85);
        }
            
    }

    @media screen and (max-width: 700px) {
        & {
            width: 15px;
            height: 15px;
            top: -5px;
        }
    }
`;


const convertWidthToPercents = (currentWidth: number, wrapperWidth: number) => {
    return +((currentWidth * 100) / wrapperWidth).toFixed(4);
};

const convertPercentsToValue = (unit: unitTypes, currentPercents: number) => {
    let maxValue: number;
    
    if (unit === 'MAUs') {
        maxValue = 1000000;
    } else if (unit === 'builds') {
        maxValue = 1000;
    } else {
        maxValue = 3000;
    }
    
    const t = currentPercents / 100;
    const exponentialProgress = Math.pow(t, 3);
    
    const value = Math.floor(exponentialProgress * maxValue);

    return value;
};

export type unitTypes = 'MAUs' | 'builds' | 'mins';

interface IProps {
    title: string;
    unitType: unitTypes;
    setProgressDataValue: Dispatch<SetStateAction<number>>;
}

const CalcModalProgress: FC<IProps> = ({title, unitType, setProgressDataValue}) => {
    const [isMouseDown, setIsMouseDown] = useState(false);
    const [progressWidth, setProgressWidth] = useState(0);
    const [progressValue, setProgressValue] = useState(0);

    const {width} = useScreenSize();

    const progressRef = useRef<HTMLDivElement | null>(null);

    
    const slide = (event: MouseEvent<HTMLDivElement>) => {
        if (isMouseDown && progressRef.current) {
            const progressRect = progressRef.current.getBoundingClientRect();
            const mouseX = event.clientX - progressRect.left;

            const newProgress = convertWidthToPercents(mouseX, progressRect.width);
            
            setProgressWidth(() => {
                if (newProgress <= 0) {
                    return 0;
                } else if (newProgress >= 100) {
                    return 100;
                } else {
                    return newProgress;
                }
            });

            
            setProgressValue(convertPercentsToValue(unitType, newProgress));
            setProgressDataValue(progressValue);
        }
    };

    const touchSlide = (event: React.TouchEvent<HTMLDivElement>) => {
        if (isMouseDown && progressRef.current) {
            const progressRect = progressRef.current.getBoundingClientRect();
            const touch = event.touches[0];
            const touchX = touch.clientX - progressRect.left;

            const newProgress = convertWidthToPercents(touchX, progressRect.width);
            
            setProgressWidth(() => {
                if (newProgress <= 0) {
                    return 0;
                } else if (newProgress >= 100) {
                    return 100;
                } else {
                    return newProgress;
                }
            });

            setProgressValue(convertPercentsToValue(unitType, progressWidth));
            setProgressDataValue(progressValue);
        }
    };

    const renderProgressValue = (progressValue: number) => {
        if (width <= 400) {
            if (progressValue >= 1000000) {
                return progressValue.toString()[0] + 'M'
            } else if (progressValue >= 100000) {
                return progressValue.toString().substring(0, 3) + 'K'
            } else if (progressValue >= 10000) {
                return progressValue.toString().substring(0, 2) + 'K'
            } else if (progressValue >= 1000) {
                return progressValue.toString()[0] + 'K'
            }
            return progressValue
        }
        return progressValue
    }

    return (
        <ProgressWrapper>
            <ProgressInfoLine>
                <span>{title}</span>
                <span>
                    {renderProgressValue(progressValue)} {unitType}
                </span>
            </ProgressInfoLine>
            <BackgroundProgressBar ref={progressRef}>
                <ProgressBar style={{width: progressWidth + '%'}}>
                    <ProgressBarCircle 
                        onMouseDown={() => setIsMouseDown(true)}
                        onMouseUp={() => setIsMouseDown(false)}
                        onMouseLeave={() => setIsMouseDown(false)}

                        onTouchStart={() => setIsMouseDown(true)}
                        onTouchEnd={() => setIsMouseDown(false)}


                        onMouseMove={slide}
                        onTouchMove={touchSlide}
                    />
                </ProgressBar>
            </BackgroundProgressBar>
        </ProgressWrapper>
    );
}

export default CalcModalProgress;