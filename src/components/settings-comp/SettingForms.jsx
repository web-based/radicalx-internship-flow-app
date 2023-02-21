import styled from "@emotion/styled";

export default function SettingForms({settingValues, toggle, modifyValue}) {
    
    return(
        <SettingFormsContainer>
            <SettingsForm>
                <FormTitle>Internship URL</FormTitle>
                <textarea
                    type='text'
                    name='Question'
                    value={settingValues[toggle].val}
                    placeholder="Internship URL"
                    onChange={(e) => modifyValue(e.target.value)}
                    required
                />
                {/* check both articles for how to store checkbox values */}
                {toggle === 'Basic' ? 
                    <>
                        <AccessBox>
                            <AccessTitle>Access</AccessTitle>
                            <label>
                                <input type="checkbox"/>
                                <p>Private Internship</p>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <p>Hidden Internship</p>
                            </label>
                        </AccessBox>
                        <SecurityBox>
                            <SecurityTitle>Security</SecurityTitle>
                            <label>
                                <input type="checkbox"/>
                                <p>Disable Text Copying</p>
                            </label>
                        </SecurityBox>
                    </>
                    :
                    null
                }
                {toggle === 'Hero' ? 
                    <>
                        <AccessBox>
                            <AccessTitle>Access</AccessTitle>
                            <label>
                                <input type="checkbox" />
                                <p>Private Internship</p>
                            </label>
                            <label>
                                <input type="checkbox"/>
                                <p>Hidden Internship</p>
                            </label>
                        </AccessBox>
                        <SecurityBox>
                            <SecurityTitle>Security</SecurityTitle>
                            <label>
                                <input type="checkbox"/>
                                <p>Disable Text Copying</p>
                            </label>
                        </SecurityBox>
                    </>
                    :
                    null
                }
            </SettingsForm>
        </SettingFormsContainer>
    )
}

const SettingFormsContainer = styled.div`
    flex: 1;
    display: flex;
    flex-direction: column;

    background-color: white;
    border-radius: 20px;
    padding-bottom: 24px;
`
const SettingsForm = styled.div`
    padding: 24px 0 0 24px; 
    width: calc(100% - 46px);

    textarea {
        height: 36px;
        width: calc(100% - 16px);
        padding: 12px 0 0 16px;

        font-family: 'Space Grotesk';
        font-size: 16px;

        background-color: #F1F4F8;
        border: 1px solid #CECECE;
        border-radius: 16px;
        resize: none;
    }
`
const FormTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #333333;
    margin: 0;
    padding-bottom: 16px;
`
const AccessBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;

    label {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        height: 23px;

        p{
            font-family: 'Space Grotesk';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            letter-spacing: 0.3px;
            color: #333333;
        }
        input {
            height: 20px;
            width: 20px;
        }
    }
`
const AccessTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #333333;
    margin: 0;
    padding-top: 24px;
    padding-bottom: 7px;
`
const SecurityBox = styled.div`
    display: flex;
    flex-direction: column;
    gap: 13px;

    label {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 12px;
        height: 23px;

        p{
            font-family: 'Space Grotesk';
            font-style: normal;
            font-weight: 400;
            font-size: 18px;
            letter-spacing: 0.3px;
            color: #333333;
        }

        input {
            height: 20px;
            width: 20px;
        }
    }
`
const SecurityTitle = styled.p`
    font-weight: 500;
    font-size: 20px;
    line-height: 18px;
    color: #333333;
    margin: 0;
    padding-top: 24px;
    padding-bottom: 7px;
`