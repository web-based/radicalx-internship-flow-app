import styled from "@emotion/styled";
import { useState } from "react";

import url from '../../assets/url.png';
import add from '../../assets/add_v3.png'
import close from '../../assets/close.png';

export default function WebLinks({ modifySectionValue, value }) {
    const [UrlLink, setUrlLink] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if (!value.includes(UrlLink))
            modifySectionValue([...value, UrlLink]);

        setUrlLink('');
    }

    function filterArray(name) {
        modifySectionValue(value.filter(item => item !== name));
    }

    return (
        <WebLinksContainer>
            <SectionTitle>Web Links & Resources</SectionTitle>
            <form onSubmit={(e) => handleSubmit(e)}>
                <img src={url} alt='Search Icon'/>
                <input 
                    type="text" 
                    name="AddURL" 
                    value={ UrlLink }
                    placeholder='Add URL' 
                    onChange={(e) => setUrlLink(e.target.value)}
                    required
                />
            </form>
            <AddBox>
                <img src={add} alt="Add Icon"/>
                Add URL
            </AddBox>
            <UrlDisplay>
                {value.map((link) => (
                    <UrlItem key={link}>
                        <p>{link}</p>
                        <button onClick={() => filterArray(link)}>
                            <img src={close} alt='Close Icon'/>
                        </button>
                    </UrlItem>
                ))}
            </UrlDisplay>
        </WebLinksContainer>
    )
} 

const WebLinksContainer = styled.div`
    padding: 0 24px 24px 24px;
    background-color: white;
    border-radius: 20px;
    width: 100%;

    form {
        display: flex;
        position: relative;
        align-items: center;

        img {
            position: absolute;
            left: 16px;
            width: 20px;
            height: 20px;
        }
    }

    input {
        background-color: #F1F4F8;
        font-family: 'Space Grotesk';
        font-size: 16px;
        border: 1px solid #CECECE;
        border-radius: 16px;
        width: 100%;
        height: 48px;
        padding-left: 44px;
    }
`
const SectionTitle = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 18px;
    color: #333333;
`
const AddBox = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 6px;

    width: 121px;
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
const UrlDisplay = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`
const UrlItem = styled.div`
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