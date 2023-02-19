import styled from '@emotion/styled';

function Days(props) {
  const createdDate = new Date(props.createdTs * 1000);

  return (
      <DaysContainer>
            <h4>{props.days} {props.days > 1 ? 'days' : 'day'}</h4>
            <p>(created on {createdDate.toLocaleDateString()})</p>
      </DaysContainer>
  )
}

export default Days

const DaysContainer = styled.div`
display: flex;
flex-direction: column;
justify-content: center;
    height: 96px;
    width: 195px;
    padding-left: 12px;

    h4{
        margin: 0;
        font-weight: 500;
        font-size: 16px;
    }
    p {
        margin: 0;
        color: #828282;
        font-size: 12px;
        line-height: 16px;
    }
`
