import styled from '@emotion/styled';

import chart from '../../assets/chart.png';
import profile from '../../assets/profile.png';
import more from '../../assets/more.png';

function Icon() {
  return (
      <IconsContainer>
            <img src={chart} alt='chart_con'/>
            <img src={profile} alt='user_icon'/>
            <img src={more} alt='more_icon'/>
        </IconsContainer>
  )
}

export default Icon

const IconsContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 96px;
    gap: 10px;

    img {
      width: 28px;
      height: 28px;
      cursor: pointer;
    }
`