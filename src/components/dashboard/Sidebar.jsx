import logo from '../../assets/radicalx_logo.png';
import book from '../../assets/book.png';
import briefcase from '../../assets/briefcase.png';
import dashboard from '../../assets/dashboard.png';
import medal from '../../assets/medal_star.png';
import setting from '../../assets/setting.png';
import styled from '@emotion/styled';


function Sidebar() {
  return (
    <MainContainer>
      <MainLogoAndIcons>
        <RadicalImg src={logo} alt="radicalx_logo"></RadicalImg>
        <SideIcons>
          <button>
            <img src={dashboard} alt="dashboard_icon" />
            Dashboard
          </button>
          <button>
            <img src={medal} alt="medalstar_icon" />
            Apprenticeship
          </button>
          <button>
            <img src={book} alt="book_icon" />
            Internships
          </button>
          <button>
            <img src={briefcase} alt="briefcase_icon" />
            Jobs
          </button>
          <button>
            <img src={setting} alt="settings_icon" />
            Settings
          </button>
        </SideIcons>
      </MainLogoAndIcons>
      <LoginUser>
        <div>
          <p>Adam Scott</p>
        </div>
      </LoginUser>
   </MainContainer>
  );
}

export default Sidebar;


const MainContainer = styled.div`
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  align-items:left;
  background:#fff;
  border-radius:22px;
  box-shadow: 0 12px 34px rgba(0,0,0,0.5 );
  box-sizing: border-box;
  margin:16px;
`
const MainLogoAndIcons = styled.div`
    padding: 34px 20px;
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 50px;
`
const RadicalImg = styled.img`
    width: 160px;
    height: 32px;
`

const SideIcons  = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    gap: 12px;
    width: 189px;

    button {
      font-family: "Space Grotesk", sans-serif;
      cursor: pointer;
      transition: 0.3s;
      display: flex;
      flex-direction: row;
      align-items: center;
      height: 48px;
      width: 189px;
      padding-left: 15px;
      font-size: 16px;
      background-color: #fff;
      border: 1px solid transparent;
      border-radius: 16px;
      gap: 10px;
      letter-spacing: 0.3px;

    :hover {
      background-color: #5047f233;
      color: #793EF5;
      border: 1px solid #793EF5;
            
    img {
      filter: invert(36%) sepia(78%) saturate(7009%) hue-rotate(253deg) brightness(100%) contrast(93%);
      }
        }
    }
    img {
      height: 24px;
      width: 24px;
    }
`

const LoginUser = styled.div`
    display: flex;
    flex-direction: row;
    padding: 0 20px 29px 20px;
    gap: 10px;

    div {
      background: #E2E6EB;
      border-radius: 16px;
      height: 50px;
      width: 50px;
    }

    p {
      font-size: 16px;
      font-family: 'Space Grotesk';
      font-weight: 400;
      line-height: 24px;
      letter-spacing: 0.3px;
    }
`