import styled from "@emotion/styled";
import { useState } from "react";

import menu from '../../assets/menu.png';
import additem from '../../assets/add_item.png';
import rightmenu from '../../assets/right_menu.png';

export default function SurveyListNames({surveyValues, toggleFunction, SurveyName}) {
    const [toggle, setToggle] = useState('Survey 1');

    function handleClick(key) {
        setToggle(surveyValues[key].name);
        toggleFunction(key);
    }
    return (
        <SurveyListNamesContainer>
            {SurveyName.map((key) => (
                <SurveyListItem key={key}>
                    <MenuIcon>
                        <img 
                            src={menu} 
                            alt='menu logo'
                        />
                    </MenuIcon>
                    <NameImgBox onClick={() => handleClick(key)} className={toggle === surveyValues[key].name ? 'highlight' : null}>
                        <p>{surveyValues[key].name}</p>
                        <img 
                            src={rightmenu} 
                            alt='Right menu arrow'
                        />
                    </NameImgBox>
                </SurveyListItem>
            ))}
            <AddOption>
                <img src={additem} alt='Add Icon'/>
                Add Survey
            </AddOption>
        </SurveyListNamesContainer>
    )
}

const SurveyListNamesContainer = styled.ul`
    flex: 1;
    display: flex;
    flex-direction: column;
    gap: 24px;
    list-style: none;
    padding: 0;
    margin: 0;
`
const SurveyListItem = styled.li`
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: 24px;
    width: 100%;

    img {
        width: 24px;
        height: 24px;
    }
`
const MenuIcon = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`
const NameImgBox = styled.div`
    width: 100%;
    height: 72px;
    background-color: white;
    border: 1px solid #E0E0E0;
    border-radius: 16px;
    padding: 0 20px 0 20px;

    display: flex;
    align-items: center;
    justify-content: space-between;
    font-weight: 500;
    font-size: 18px;
    color: #333333;
    
    cursor: pointer;

    &.highlight {
        border: 1px solid #793EF5;
        box-shadow: 0px 24px 34px rgba(0, 0, 0, 0.12);
        border-radius: 16px;
    }

`
const AddOption = styled.button`
    display: flex;
    align-items: center;
    justify-content: center;
    height: 56px;
    margin: 0 0 0 48px;

    background-color: #665FEF33;
    font-size: 18px;
    color: #793EF5;

    border: solid 1px #793EF5;
    border-radius: 12px;
    gap: 12px;
    cursor: pointer;
    
    img{
        width: 20px;
        height: 20px;
    }
`