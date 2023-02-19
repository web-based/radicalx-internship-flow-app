import styled from '@emotion/styled';
import { useState } from 'react';
import { BarChart, Bar, Cell, ResponsiveContainer, Tooltip } from 'recharts';

import React from 'react'

function Graph() {
  const [focusPoint, SetFocusPoint] = useState(null);

  const data = [
    { value: 60 }, { value: 80 }, { value: 100 },
    { value: 80 }, { value: 80 }, { value: 60 },
    { value: 80 }, { value: 100 }, { value: 110 },
    { value: 120 }, { value: 110 }, { value: 100 },
    { value: 140 }, { value: 120 }, { value: 110 },
    { value: 80 }, { value: 100 }, { value: 60 },
    { value: 50 }, { value: 40 }
  ];

  const handleMouse = (toolInfo) => {
    SetFocusPoint(getToolIndex(toolInfo));
}

const getToolIndex = (toolInfo) => {
    if (toolInfo.isTooltipActive) {
        return toolInfo.activeTooltipIndex;
    } 
    return null; 
}

  const toolStyle = { 
    display: 'flex', justifyContent: 'center', backgroundColor: '#793EF5', 
    color:'white', width: '40px', height: '24px', alignItems: 'center', borderRadius: '4px',
    fontFamily: 'Space Grotesk', fontWeight: 600, fontSize: '12px'
};

const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
        return (
        <div className="custom-tooltip">
            <p style={toolStyle} className="label">
            {`${payload[0].value}`}
            </p>
        </div>
        );
    }
  return null;
};    


   return (
    <GraphContainer>
      <ResponsiveContainer width="80%" height="45%">
        <BarChart data={data} onMouseMove={handleMouse}>
          <Tooltip
            cursor={false}
            content={<CustomTooltip />}
            wrapperStyle={{ outline: "none" }}
            position={{ y: -35 }}
          />
          {focusPoint === null ? (
             <Bar
               dataKey="value"
               barSize={6}
               fill="#C4C4C4" r
               adius={[10, 10, 0, 0]}
             />
          ) : (
            <Bar
              dataKey="value"
              barSize={6}
              fill={data[focusPoint].fill}
              radius={[10, 10, 0, 0]}
            >
              {data.map((entry, index) => (
                <Cell
                  key={index}
                  fill={focusPoint === index ? "#793EF5" : "#C4C4C4"}
                />
              ))}
            </Bar>
          )}
        </BarChart>
      </ResponsiveContainer>
    </GraphContainer>

    )
}
export default Graph

const GraphContainer = styled.div`
    display: flex;
    height: 96px;
    width: 250px;
    align-items: center;
    justify-content: center;
    `
