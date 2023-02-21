import styled from '@emotion/styled';

function Title(props) {
  return (
    <InternshipPageContainer>
      <h4>{props.title}</h4>
      <p>{props.description}</p>
    </InternshipPageContainer>
  )
}

export default Title

const InternshipPageContainer = styled.div`
  height:96px;
  width:195px;
  padding-left:12px;

  h4{
    font-size:1rem;
    font-weight:bold;
    margin-bottom:0;
  }
  p{
    font-size:12px;
    line-height:16px;
  }
`