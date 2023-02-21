import styled from "@emotion/styled";
import { useState } from "react";

import add3 from '../../assets/add_v3.png';
import close from '../../assets/close.png';

export default function SurveyFormSection({toggle, surveyValues, modifyValue}) {
    const [inputValue, setInputValue] = useState('');

    function handleSubmit(e) {
        e.preventDefault();
        if (!surveyValues[toggle].val.includes(inputValue))
            modifyValue([...surveyValues[toggle].val, inputValue])

        setInputValue('');
    };

    function filterArray(question) {
        modifyValue(surveyValues[toggle].val.filter(item => item !== question));
    }
    
    return(
        <SurveyFormSectionContainer>
            <SurveyForm>
                <FormTitle>{surveyValues[toggle].name}</FormTitle>
                <FormContainer onSubmit={(e) => handleSubmit(e)}>
                    <input
                        type='text'
                        name='Question'
                        value={inputValue}
                        placeholder="Question"
                        onChange={(e) => setInputValue(e.target.value)}
                        required
                    />
                </FormContainer>
                <AddBox>
                    <img
                        src={add3}
                        alt='add icon'
                    />
                    Add Question
                </AddBox>
                <InputsDisplay>
                    {surveyValues[toggle].val.map((question) => (
                        <InputItem key={question}>
                            <p>{question}</p>
                            <button onClick={() => filterArray(question)}>
                                <img src={close} alt='Close Icon'/>
                            </button>
                        </InputItem>
                    ))}
                </InputsDisplay>
            </SurveyForm>
        </SurveyFormSectionContainer>
    )
}

const SurveyFormSectionContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    background-color: white;
    border-radius: 20px;
    padding-bottom: 24px;
`
const SurveyForm = styled.div`
    padding: 24px 0 0 24px; 
    width: calc(100% - 46px);
`
const FormTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #333333;
    margin: 0;
    padding-bottom: 16px;
`
const FormContainer = styled.form`

    input {
        height: 48px;
        width: calc(100% - 16px);
        padding: 0 0 0 16px;

        font-family: 'Space Grotesk';
        font-size: 16px;

        background-color: #F1F4F8;
        border: 1px solid #CECECE;
        border-radius: 16px;
        resize: none;
    }
`
const AddBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    width: 158px;
    height: 38px;
    border: 1px dashed #793EF5;
    border-radius: 12px;
    margin-top: 16px;

    font-weight: 500;
    font-size: 15px;
    color: #793EF5;

    cursor: pointer;

    img{
        width: 22px;
        height: 22px;
    }
`
const InputsDisplay = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`
const InputItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    background-color: #665FEF33;
    border: 1px solid #793EF5;
    border-radius: 32px;
    
    p {
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        color: #793EF5;
        flex-wrap: wrap;
        padding-left: 16px;
    }

    button{
        border: none;
        background-color: transparent;
        display: flex;
        align-items: center;
        cursor: pointer;
        padding-right: 12px;

        img{
            width: 22px;
            height: 22px;
        }
    }
`