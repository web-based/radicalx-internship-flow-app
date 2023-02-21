import styled from "@emotion/styled";
import { useState } from "react";

import video from '../../assets/doc_upload.png';
import close from '../../assets/close.png';

export default function IntroVideo({ value, modifySectionValue }) {
    const [dragActive, setDragActive] = useState(false);

    function handleDrag(e) {
        e.preventDefault();
        e.stopPropagation();
        if (e.type === 'dragenter' || e.type === 'dragover')
            setDragActive(true);
        else if (e.type === "dragleave")
            setDragActive(false);
    }

    function handleDrop(e) {
        e.preventDefault();
        e.stopPropagation();
        setDragActive(false);
        if (e.dataTransfer.files){
            modifySectionValue(e.dataTransfer.files[0].name.toString())
        }
    }

    function filterArray(name) {
        modifySectionValue('');
    }
    
    return (
        <IntroVideoContainer>
            <SectionTitle>Intro Video</SectionTitle>
            <DragForm onDragEnter={handleDrag} onSubmit={(e) => e.preventDefault()}>
                <input
                    type='file'
                    multiple={false}
                />
                <DragContainer className={dragActive ? "drag-active" : "" }>
                    <p>Drag n drop to upload your video</p>
                    <img src={video} alt='video icon'/>
                </DragContainer>
                { dragActive && <InvisibleDiv onDragEnter={handleDrag} onDragLeave={handleDrag} onDragOver={handleDrag} onDrop={handleDrop}/> }
            </DragForm>
            <FileDisplay>
                <FileItem className={value ? null : "hide"}>
                    <p>{value}</p>
                    <button onClick={() => filterArray(value)}>
                        <img src={close} alt='Close Icon'/>
                    </button>
                </FileItem>
            </FileDisplay>
        </IntroVideoContainer>
    )
}

const IntroVideoContainer = styled.div`
    padding: 0 24px 24px 24px;
    background-color: white;
    border-radius: 20px;
    width: 100%;
`
const SectionTitle = styled.p`
     font-family: 'Space Grotesk';
    font-weight: 500;
    font-size: 24px;
    line-height: 18px;
    color: #333333;
`
const DragForm = styled.form`
    input {
        display: none;
    }
`
const DragContainer = styled.div`
    height: 68px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: 2px dashed #E2E6EB;
    border-radius: 8px;
    color: #778188;

    &.drag-active {
        background-color: #665FEF33;
        color: #793EF5;
        border: 2px dashed #793EF5;

        img {
            filter: brightness(0) saturate(100%) invert(33%) sepia(73%) saturate(7001%) hue-rotate(253deg) brightness(102%) contrast(92%);
        }
    }

    img {
        width: 20px;
        height: 20px;
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
const FileDisplay = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`
const FileItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 46px;
    background-color: #665FEF33;
    border: 1px solid #793EF5;
    border-radius: 32px;

    &.hide {
        display: none;
    }
    
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