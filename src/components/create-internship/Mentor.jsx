import styled from "@emotion/styled";

import image from '../../assets/img_icon.png';
import profile from '../../assets/profile_2.png';
import link from '../../assets/link.png';
import email from '../../assets/email_purple.png';


export default function MentorDetails({ modifySectionValue, value}) {
    return(
        <MentorContainer>
            <p>Mentor Details</p>
            <MentorPicture>
                <img src={image} alt='Icon'/>
            </MentorPicture>
            <UserEmailContainer>
                <div>
                    <ProfileIcon src={profile} alt='user icon'></ProfileIcon>
                    <textarea 
                        type="text" 
                        name="Mentor Name" 
                        placeholder='Name'
                        value={value.name}
                        onChange={(e) => modifySectionValue(e.target.value, 'name')}
                        required
                    />
                </div>
                <div>
                    <EmailIcon src={email} alt='email icon'></EmailIcon>
                    <textarea 
                        type="text" 
                        name="Email Address" 
                        placeholder='Email address' 
                        value={value.email}
                        onChange={(e) => modifySectionValue(e.target.value, 'email')}
                        required
                    />
                </div>
            </UserEmailContainer>
            <LinkContainer>
                <img src={link} alt='link icon'></img>
                <textarea
                    type="text" 
                    name="Linkedin URL" 
                    placeholder='LinkedIn URL (optional)'
                    value={value.link}
                    onChange={(e) => modifySectionValue(e.target.value, 'link')}
                />
            </LinkContainer>
        </MentorContainer>
    )
}

const MentorContainer = styled.div`
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
`
const MentorPicture = styled.div`
    width: 80px;
    height: 80px;
    background: #E2E6EB;
    border-radius: 20px;

    img{
        position: relative;
        top: 58px;
        left: 57px;
        width: 28px;
        height: 28px;
    }
`
const UserEmailContainer = styled.div`
    padding-top: 24px;
    display: flex;
    align-items: center;
    gap: 24px;

    div {
        width: 50%;
        position: relative;
        display: flex;
        align-items: center;
    }

    textarea {
        width: 100%;
        height: 34px;
        padding-left: 50px;
        padding-top: 12px;
        border: 1px solid #CECECE;
        border-radius: 14px;
        resize: none;

        font-family: 'Space Grotesk', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.3px;
    }
`
const ProfileIcon = styled.img`
    height: 24px;
    width: 24px;

    position: absolute;
    left: 15px;
`
const EmailIcon = styled.img`
    height: 24px;
    width: 24px;

    position: absolute;
    left: 15px;
`
const LinkContainer = styled.div`
    padding-top: 24px;
    display: flex;
    position: relative;
    align-items: center;
    gap: 24px;

    textarea {
        width: 100%;
        height: 34px;
        padding-left: 50px;
        padding-top: 12px;
        border: 1px solid #CECECE;
        border-radius: 14px;

        font-family: 'Space Grotesk', sans-serif;
        font-weight: 400;
        font-size: 16px;
        line-height: 24px;
        letter-spacing: 0.3px;
        resize: none;
    }

    img{
        position: absolute;
        left: 15px;
        height: 24px;
        width: 24px;
    }
`