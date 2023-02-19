import styled from "@emotion/styled";
import { useState } from "react";

import video from '../../assets/doc_upload.png';
import close from '../../assets/close.png';

export default function SectionsForms(props) {
    const [dragValues, setDragValues] = useState({
        Overview: {Brief: false, Requirements: false, Milestones: false},
        Schedule: {Duration: false, Timeline: false, Deliverables: false},
        Resources: {Curated: false, Events: false}
    })

    function handleDrag(e, option) {
        e.preventDefault();
        e.stopPropagation();
        
        if (e.type === 'dragenter' || e.type === 'dragover')
        {
            const newDragValues = {...dragValues};
            newDragValues[props.toggle][option] = true;
            setDragValues(newDragValues);
        }
        else if (e.type === "dragleave")
        {
            const newDragValues = {...dragValues};
            newDragValues[props.toggle][option] = false;
            setDragValues(newDragValues);
        }
    }

    function handleDrop(e, option) {
        e.preventDefault();
        e.stopPropagation();

        const newDragValues = {...dragValues};
        newDragValues[props.toggle][option] = false;
        setDragValues(newDragValues);

        if (e.dataTransfer.files){
            props.modifyVideoValue(e.dataTransfer.files[0].name.toString(), option)
        }
    }

    function filterArray(name, option) {
        props.modifyVideoValue('', option);
    }

    return (
        <SectionFormsContainer>
            {props.getArray(props.toggle).map((option) => (
                <Section key={option}>
                    <OptionTitle>{option}</OptionTitle>
                    <DescriptionForm>
                        <textarea 
                            type="text"
                            value={props.formValues[props.toggle][option]} 
                            name="Description" 
                            placeholder='Description'
                            onChange={(e) => props.modifySectionValue(e.target.value, option)}
                            required
                        />
                    </DescriptionForm>
                    <DragForm 
                        onDragEnter={(e) => handleDrag(e, option)}
                        onSubmit={(e) => e.preventDefault()}
                    >
                        <input type='file'multiple={false}/>
                        <DragBox className={dragValues[props.toggle][option] ? "drag-active" : "" }>
                            <p>Drag n drop to upload your video</p>
                            <img src={video} alt='video_icon'/>
                        </DragBox>
                        { 
                            dragValues[props.toggle][option] && 
                            <InvisibleDiv 
                                onDragEnter={(e) => handleDrag(e, option)} 
                                onDragLeave={(e) => handleDrag(e, option)} 
                                onDragOver={(e) => handleDrag(e, option)} 
                                onDrop={(e) => handleDrop(e, option)}
                            />
                        }
                    </DragForm>
                    <VideoDisplay>
                        <VideoItem className={props.videoValues[props.toggle][option] ? null : "hide"}>
                            <p>{props.videoValues[props.toggle][option]}</p>
                            <button onClick={() => filterArray(props.videoValues[props.toggle][option], option)}>
                                <img src={close} alt='close_icon'/>
                            </button>
                        </VideoItem>
                    </VideoDisplay>
                </Section>
            ))}
        </SectionFormsContainer>
    )
}

const SectionFormsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    background-color: white;
    border-radius: 20px;
    padding-bottom: 24px;
`
const Section = styled.div`
    padding: 24px 0 0 24px; 
    width: calc(100% - 46px);
`
const OptionTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #333333;
    margin: 0;
    padding-bottom: 16px;
`
const DescriptionForm = styled.form`
    padding-bottom: 16px;

    textarea {
        height: 32px;
        width: calc(100% - 16px);
        padding: 10px 0 0 16px;

        font-family: 'Space Grotesk';
        font-size: 16px;

        background-color: #F1F4F8;
        border: 1px solid #CECECE;
        border-radius: 16px;
        resize: none;
    }
`
const DragForm = styled.form`
    input {
        display: none;
    }
`
const DragBox = styled.div `
    height: 68px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 1px dashed #B2B6BC;
    border-radius: 12px;
    color: #778188;

    p{
        font-weight: 400;
        font-size: 14px;
    }

    img {
        width: 20px;
        height: 20px;
    }

    &.drag-active {
        background-color: #665FEF33;
        color: #793EF5;
        border: 2px dashed #793EF5;

        img {
            filter: brightness(0) saturate(100%) invert(33%) sepia(73%) saturate(7001%) hue-rotate(253deg) brightness(102%) contrast(92%);
        }
    }
`
const InvisibleDiv = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0px;
    right: 0px;
    bottom: 0px;
    left: 0px;
`
const VideoDisplay = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: row;
`
const VideoItem = styled.div`
    display: flex;
    align-items: center;
    height: 46px;
    background-color: #EDEAFF;
    border-radius: 12px;

    &.hide {
        display: none;
    }
    
    p {
        font-weight: 500;
        font-size: 15px;
        line-height: 22px;
        color: #793EF5;
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