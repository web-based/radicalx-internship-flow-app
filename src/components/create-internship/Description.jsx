import styled from "@emotion/styled";

export default function Description({ value, modifySectionValue }) {
    return (
        <DescriptionContainer>
            <p>Description</p>
            <form>
                <textarea
                    type="text" 
                    name="Description" 
                    value={value}
                    placeholder='Description' 
                    onChange={(e) => modifySectionValue(e.target.value)}
                    required
                />
            </form>
        </DescriptionContainer>
    )
}

const DescriptionContainer = styled.div`
    padding: 0 24px 24px 24px;
    background-color: white;
    border-radius: 20px;
    width: 100%;  

    p {
        font-family: 'Space Grotesk';
        font-weight: 500;
        font-size: 24px;
        line-height: 18px;
        color: #333333;
    }

    textarea {
        display: flex;
        padding: 10px 16px;
        width: calc(100% - 34px);
        height: 197px;
        background: #F1F4F8;
        border: 1px solid #CECECE;
        border-radius: 16px;
        resize: none;

        font-family: "Space Grotesk", sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.3px;
    }
`