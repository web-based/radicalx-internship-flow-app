import styled from "@emotion/styled";

import Unticked from '../../assets/incomplete_circle.png';

const phases = ['Internship Description', 'Internship Guide', 'Surveys', 'Settings']

export default function ProgressBar({name}) {
    
    return (
        <ProgressBarContainer>
            <ul>
                {phases.map((stage) => (
                    <li key={stage} style={stage === name ? null : {opacity: '0.3'}}>
                        <img 
                            src={Unticked} alt='Unticked circle icon'
                            style={stage === name ? null : {filter: 'invert(82%) sepia(8%) saturate(83%) hue-rotate(177deg) brightness(96%) contrast(91%)'}}
                        />
                        {stage}
                    </li>
                ))}
            </ul>
        </ProgressBarContainer>
    )
}

const ProgressBarContainer = styled.div`
    display: flex;
    height: 60px;
    width: calc(100% - 46px);
    margin-top: 20px;
    border: solid #D0D4DA 1px;
    border-radius: 20px;

    ul {
        width: 100%;
        display: flex;
        justify-content: space-between;
        list-style: none;
        letter-spacing: 0.3px;
        padding: 0 24px 0 24px;
    }
    
    li {
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 8px;

    }
    img{
        width: 24px;
        height: 24px;
    }
`