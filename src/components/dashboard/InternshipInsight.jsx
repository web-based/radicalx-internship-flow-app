import React from "react";
import calendar from "../../assets/calendar.png";
import styled from "@emotion/styled";
import { AreaChart, Area, XAxis, ResponsiveContainer } from "recharts";

function InternshipInsight() {
  const data = [
    { name: "", value: "" },
    { name: "Total Enrollments", value: 100000 },
    { name: "Completion", value: 65000 },
    { name: "Qualified Candidates", value: 850 },
    { name: "Reached Out", value: 375 },
    { name: "Interview Set", value: 300 },
    { name: "Candidates Hired", value: 150 },
    { name: "", value: "" },
  ];

  return (
    <InternshipInsightContainer>
      <TextField>
        <h2>Internship s</h2>
        <p>
          In the eighteenth century the German philosoper Immanual Kant
          developed a theory of knowledge in which knowledge about space can be
          bothe prior and synthetic
        </p>
      </TextField>
      <DataContainer>
        <DateContainer>
          <div>
            <WeekButton>This Week</WeekButton>
            <MonthButton>This Month</MonthButton>
          </div>
          <div>
            <SelectDatesButton>
              <img src={calendar} alt="calendar_icon" />
              Select dates
            </SelectDatesButton>
          </div>
        </DateContainer>
        <ResponsiveContainer width="100%" height={174}>
          <AreaChart data={data}>
            <Area
              type="monotone"
              dataKey="value"
              fill="#665FEF33"
              stroke="none"
            />
            <XAxis
              xAxisId={0}
              interval={0}
              tick={{ fontSize: 21, fontWeight: 500 }}
              dataKey="value"
              axisLine={false}
              tickLine={false}
            />
            <XAxis
              xAxisId={1}
              interval={0}
              tick={{ fontSize: 12, fontWeight: 500 }}
              dataKey="name"
              axisLine={false}
              tickLine={false}
            />
          </AreaChart>
        </ResponsiveContainer>
      </DataContainer>
    </InternshipInsightContainer>
  );
}

export default InternshipInsight;

const InternshipInsightContainer = styled.div`
  background: #ffffff;
  padding: 16px;
  border-radius: 16px;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  gap: 10px;
`;

const TextField = styled.div`
  background: #f6f5f9;
  width: 280px;
  padding: 16px 0 0 16px;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  gap: 12px;

  h2 {
    font-size: 19px;
    font-weight: 600;
    margin: 0;
  }
  p {
    font-size: 14px;
    font-weight: 400;
    width: 230px;
    line-height: 20px;
    letter-spacing: 0.3px;
    margin: 0;
  }
`;

const DataContainer = styled.div`
  display: flex;
  width: calc(100% - 290px);
  flex-direction: column;
  flex-wrap: wrap;
`;

const DateContainer = styled.div`
  background: #f2f2f2;
  border-radius: 12px;
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  flex-wrap: wrap;
  padding: 8px;
  gap: 10px;

  div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
  }

  button {
    background: #fff;
    border-radius: 8px;
    border: none;
    font-family: "Space Grotesk";
    font-weight: 500;
    font-size: 14px;
    display: flex;
    align-items: center;
    justify-content: center;

    :hover {
      color: #fff;
      background-color: #793ef5;

    img {
      filter: invert(100%) sepia(8%) saturate(0%) hue-rotate(251deg)
      brightness(200%) contrast(102%);
      }
    }
  }
`

const WeekButton = styled.button`
    height: 32px;
    width: 100px;
    cursor: pointer;
`
const MonthButton = styled.button`
    height: 32px;
    width: 100px;
    cursor: pointer;
`
const SelectDatesButton = styled.button`
    height: 32px;
    width: 137px;
    gap: 8px;
    cursor: pointer;

    img {
      height: 20px;
      width: 20px;
    }
`
