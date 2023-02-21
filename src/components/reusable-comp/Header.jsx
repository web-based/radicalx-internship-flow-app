import styled from "@emotion/styled";
import { useNavigate } from 'react-router-dom';

import leftarrow from '../../assets/left_arrow.png';
import rightarrow from '../../assets/right_arrow.png';

export default function HeaderBox({next}) {
    const navigate = useNavigate();

    return (
        <HeaderBoxContainer>
            <BackButton onClick={() => navigate(-1)}>
                <img src={leftarrow} alt='Left Arrow Icon'/>
                Back
            </BackButton>
            <HeaderTitle>
                Add New Internship
            </HeaderTitle>
            <NextButton id='completeNext' onClick={() => navigate(next)}>
                Continue To Next Step
                <img src={rightarrow} alt='Right Arrow Icon'/>
            </NextButton>
        </HeaderBoxContainer>
    )
}

const HeaderBoxContainer = styled.div`
    width: calc(100% - 46px);
    height: 80px;
    margin-top: 20px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-radius: 30px;
`
const HeaderTitle = styled.h1`
    font-size: 28px;
    color: #1E1E1E;
    font-weight: 500;
`
const BackButton = styled.button`
    background-color: white;
    border: none;
    font-family: 'Space Grotesk';
    font-size: 18px;
    letter-spacing: 0.3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: 24px;
    gap: 8px;
    cursor: pointer;

    img {
        width: 28px;
        height: 28px;  
    }
`
const NextButton = styled.button`
    width: 219px;
    height: 44px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #E2E6EB;
    border-radius: 12px;
    border: none;
    margin-right: 24px;
    font-family: 'Space Grotesk';
    font-size: 14px;
    letter-spacing: 0.4px;
    color: #828282;
    gap: 8px;
    pointer-events: none;


    &.sectionComplete{
        background-color: #793EF5;
        color: white;
        pointer-events: all;
        cursor: pointer;

        img{
            filter: saturate(100%) brightness(0%) invert(94%) sepia(9%) saturate(495%) hue-rotate(205deg) brightness(120%) contrast(100%);
        }
    }

    img {
        width: 20px;
        height: 20px;
    }
`