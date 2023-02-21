import styled from '@emotion/styled';

import arrow from '../../assets/down_arrow_square.png';
import Graph from './Graph';
import Title from './Title';
import Days from './Days';
import Enrolled from './Enrolled';
import Icon from './Icon';


function InternshipDetails() {

  const MainData = [
    {
      title: 'Product Design GVI',
      description: 'Amet minim mollit non deserunt est sit aliqua dolor do amet sint.',
      days: Math.floor(Math.random() * 120),
      createdTs: 1634039062,
      enrolled: 5000 + Math.floor(Math.random() * 15000),
    },
    {
      title: 'Product Design GVI',
      description: 'Amet minim mollit non deserunt est sit aliqua dolor do amet sint.',
      days: Math.floor(Math.random() * 120),
      createdTs: 1634039062,
      enrolled: 5000 + Math.floor(Math.random() * 15000),
    },
    {
      title: 'Product Design GVI',
      description: 'Amet minim mollit non deserunt est sit aliqua dolor do amet sint.',
      days: Math.floor(Math.random() * 120),
      createdTs: 1634039062,
      enrolled: 5000 + Math.floor(Math.random() * 15000),
    },
    {
      title: 'Product Design GVI',
      description: 'Amet minim mollit non deserunt est sit aliqua dolor do amet sint.',
      days: Math.floor(Math.random() * 120),
      createdTs: 1634039062,
      enrolled: 5000 + Math.floor(Math.random() * 15000),
    },
    {
      title: 'Product Design GVI',
      description: 'Amet minim mollit non deserunt est sit aliqua dolor do amet sint.',
      days: Math.floor(Math.random() * 120),
      createdTs: 1634039062,
      enrolled: 5000 + Math.floor(Math.random() * 15000),
    }
  ];

  return (
    <InternshipDetailsContainer>
  <TitleSection>
    <HeaderOne>
      <h3>Internship Title</h3>
      <button>
        <img src={arrow} alt='arrow_icon' />
      </button>
    </HeaderOne>
    {MainData.map(data => (
      <Title title={data.title} description={data.description} />
    ))}
  </TitleSection>
  <CompletionSection>
    <HeaderTwo>
      <h3>Completion Period</h3>
      <button>
        <img src={arrow} alt='arrow_icon' />
      </button>
    </HeaderTwo>
    {MainData.map(data => (
      <Days days={data.days} createdTs={data.createdTs} />
    ))}
  </CompletionSection>
  <TotalSection>
    <HeaderThree>
      <h3>Total Enrolled</h3>
      <button>
        <img src={arrow} alt='arrow_icon' />
      </button>
    </HeaderThree>
    {MainData.map(data => (
      <Enrolled enrolled={data.enrolled} />
    ))}
  </TotalSection>
  <QualifiedSection>
    <HeaderFour>
      <h3>Qualified Candidates</h3>
      <button>
        <img src={arrow} alt='arrow_con' />
      </button>
    </HeaderFour>
    {MainData.map(data => (
      <Graph />
    ))}
  </QualifiedSection>
  <OptionSection>
    <HeaderFive />
    {MainData.map(data => (
      <Icon />
    ))}
  </OptionSection>
</InternshipDetailsContainer>

    )
}

export default InternshipDetails

const InternshipDetailsContainer = styled.div`
    display: flex;
    border-radius: 16px;
    padding-top: 24px;
    padding-bottom: 24px;
    flex-wrap: wrap;
`
const TitleSection = styled.div`
  background-color: #fff;
  border-radius: 16px 0 0 16px;
  display: flex;
  flex-direction: column;
  flex: 2;
`
const HeaderOne = styled.div`
    background-color: #F6F5F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    border-top-left-radius: 16px;
    height: 56px;
    h3 {
      padding-left: 12px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
    button {
      background-color: #F6F5F9;
      border: none;
      padding-right: 12px;
      cursor: pointer;
    }
    img {
      width: 20px;
      height: 20px;
    }
`
const CompletionSection = styled.div`
    display: flex;
    flex: 1;
    flex-direction: column;
    background-color: white;
`
const HeaderTwo = styled.div`
    background-color: #F6F5F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 56px;   
    h3 {
      padding-left: 12px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
    button {
      background-color: #F6F5F9;
      border: none;
      padding-right: 12px;
      cursor: pointer;
  }
    img {
      width: 20px;
      height: 20px;
    }
`
const TotalSection = styled.div `
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
`
const HeaderThree = styled.div`
    background-color: #F6F5F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 56px;   
    h3 {
      padding-left: 12px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
    }
    button {
      background-color: #F6F5F9;
      border: none;
      padding-right: 12px;
      cursor: pointer;
  }
    img {
      width: 20px;
      height: 20px;
    }
`
const QualifiedSection = styled.div`
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;
`
const HeaderFour = styled.div`
    background-color: #F6F5F9;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    height: 56px;

    h3 {
      padding-left: 12px;
      font-weight: 500;
      font-size: 14px;
      line-height: 24px;
      white-space: nowrap;
    }
    button {
      background-color: #F6F5F9;
      border: none;
      padding-right: 12px;
      cursor: pointer;
    }
    img {
      width: 20px;
      height: 20px;
    }
`
const OptionSection = styled.div`
    flex: 1;
    background-color: white;
    display: flex;
    flex-direction: column;

    border-top-right-radius: 12px;
    border-bottom-right-radius: 12px;
`
const HeaderFive = styled.div`
    background-color: #F6F5F9;
    height: 56px;
    border-top-right-radius: 12px;
`
