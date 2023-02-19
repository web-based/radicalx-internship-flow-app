import styled from "@emotion/styled";
import { useState, useRef, useEffect } from "react";

import downarrow from '../../assets/down_arrow.png';
import location from '../../assets/location.png';
import close from '../../assets/close.png';

export default function Location({ modifySectionValue, value}) {
    const [locationName, setLocationName] = useState('');
    const autoCompleteRef = useRef();
    const inputRef = useRef();
    
    useEffect(() => {
        const options = {
            componentRestrictions: { country: "us" },
           };
           
        autoCompleteRef.current = new window.google.maps.places.Autocomplete(
         inputRef.current,
         options
        );
        autoCompleteRef.current.addListener("place_changed", async function () {
            const place = await autoCompleteRef.current.getPlace();
            if (place.formatted_address !== undefined)
            {
                modifySectionValue([...value, place.formatted_address]);
                setLocationName('');
            }
        });
       }, [value, modifySectionValue]);

    function handleSubmit(e) {
        e.preventDefault();
        if (!value.includes(locationName))
            modifySectionValue([...value, locationName]);

        setLocationName('');
    };

    function filterArray(name) {
        modifySectionValue(value.filter(item => item !== name));
    };

    return (
        <LocationContainer>
            <SectionTitle>Location</SectionTitle>
            <form onSubmit={(e) => handleSubmit(e)}>
                <div>
                    <img src={location} alt='Location Pin Icon'/>
                    <input
                        type="text" 
                        name="locationCategory" 
                        value={ locationName }
                        placeholder='Select Location' 
                        onChange={(e) => setLocationName(e.target.value)}
                        ref={inputRef}
                        required
                    />
                </div>
                <img src={downarrow} alt='Down Arrow Icon'/>
            </form>
            <LocationDisplay>
                {value.map((loc) => (
                    <LocationItem key={loc}>
                        <p>{loc}</p>
                        <button onClick={() => filterArray(loc)}>
                            <img src={close} alt='Close Icon'/>
                        </button>
                    </LocationItem>
                ))}
            </LocationDisplay>
        </LocationContainer>
    )
}

const LocationContainer = styled.div`
    padding: 0 24px 24px 24px;
    background-color: white;
    border-radius: 20px;
    width: 100%;

    form {
        display: flex;
        position: relative;
        justify-content: flex-end;
        align-items: center;
        
        div {
            display: flex;
            position: relative;
            align-items: center;
            width: 100%;

            img {
                position: absolute;
                width: 20px;
                height: 20px;
                padding-left: 16px;
                cursor: default;
            }
        }

        img {
            position: absolute;
            width: 20px;
            height: 20px;
            padding-right: 14px;
            cursor: pointer;
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
const LocationDisplay = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`
const LocationItem = styled.div`
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