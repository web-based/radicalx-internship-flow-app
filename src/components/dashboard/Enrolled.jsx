import styled from '@emotion/styled';

function Enrolled(props) {
  const formattedEnrolled = props.enrolled.toLocaleString();
    return (
        <EnrolledContainer>
            <p>{formattedEnrolled}</p>
        </EnrolledContainer>
  )
}

export default Enrolled

const EnrolledContainer = styled.div`
  height: 96px;
  width: 160px;
  display: flex;
  justify-content: center;
  align-items: center;

p {
  color: #793EF5;
  background-color: #F0EFFD;
  border-radius: 8px;
  font-size: 18px;
  font-weight: 600;
  width: 94px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
    }

`