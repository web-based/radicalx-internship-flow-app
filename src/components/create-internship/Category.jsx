import styled from "@emotion/styled";
import { useState } from "react";

import search from '../../assets/search.png';
import close from '../../assets/close.png';

export default function Category({ modifySectionValue, value }) {
    const [categoryName, setCategoryName] = useState('')

    function handleSubmit(e) {
        e.preventDefault();
        if (!value.includes(categoryName))
            modifySectionValue([...value, categoryName]);

        setCategoryName('');
    }

    function filterArray(name) {
        modifySectionValue(value.filter(item => item !== name));
    }

    return (
        <CategoryContainer>
            <SectionTitle>Category</SectionTitle>
            <form onSubmit={(e) => handleSubmit(e)}>
                <input
                    type="text"
                    name="searchCategory"
                    value={categoryName}
                    placeholder='Search Category'
                    onChange={(e) => setCategoryName(e.target.value)}
                    required
                />
                <img src={search} alt='Search Icon' />
            </form>
            <CategoryDisplay>
                {value.map((cat) => (
                    <CategoryItem key={cat}>
                        <p>{cat}</p>
                        <button onClick={() => filterArray(cat)}>
                            <img src={close} alt='close_icon' />
                        </button>
                    </CategoryItem>
                ))}
            </CategoryDisplay>
        </CategoryContainer>
    )
}

const CategoryContainer = styled.div`
    padding: 0 24px 24px 24px;
    background-color: white;
    border-radius: 20px;
    width: 100%;

    form {
        display: flex;
        position: relative;
        justify-content: flex-end;
        align-items: center;

        img {
            position: absolute;
            width: 20px;
            height: 20px;
            padding-right: 14px;
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
        padding-left: 16px;
    }
`
const SectionTitle = styled.p`
    font-weight: 500;
    font-size: 24px;
    line-height: 18px;
    color: #333333;
`
const CategoryDisplay = styled.div`
    padding-top: 16px;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
`
const CategoryItem = styled.div`
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