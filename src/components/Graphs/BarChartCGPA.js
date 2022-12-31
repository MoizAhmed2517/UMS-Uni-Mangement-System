import React from 'react';
import { ResponsiveLine } from '@nivo/line'
import { Paper } from '@mui/material';

const data = [
    {
      "id": "2019-2024",
      "color": "blue",
      "data": [
        {
          "x": "Semester-1",
          "y": 3.2
        },
        {
          "x": "Semester-2",
          "y": 3.3
        },
        {
          "x": "Semester-3",
          "y": 3.8
        },
        {
          "x": "Semester-4",
          "y": 3.5
        },
        {
          "x": "Semester-5",
          "y": 3.76
        },
        {
          "x": "Semester-6",
          "y": 3.85
        },
      ]
    }
  ];


const BarChartCGPA = () => {
  return (
    <Paper sx={{padding: "5px", borderRadius: '10px', height: '350px'}} elevation={4}>
        <ResponsiveLine
            curve="monotoneX"
            data={data}
            margin={{ top: 50, right: 100, bottom: 50, left: 60 }}
            xScale={{ type: 'point' }}
            yScale={{
                type: 'linear',
                min: 0,
                max: 4,
                stacked: true,
                reverse: false
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                orient: 'bottom',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'Semester',
                legendOffset: 36,
                legendPosition: 'middle'
            }}
            axisLeft={{
                orient: 'left',
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'CGPA',
                legendOffset: -40,
                legendPosition: 'middle'
            }}
            pointSize={5}
            pointColor="yellow"
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-12}
            useMesh={true}
            legends={[
                {
                    anchor: 'bottom-right',
                    direction: 'column',
                    justify: false,
                    translateX: 100,
                    translateY: 0,
                    itemsSpacing: 0,
                    itemDirection: 'left-to-right',
                    itemWidth: 80,
                    itemHeight: 20,
                    itemOpacity: 0.75,
                    symbolSize: 12,
                    symbolShape: 'circle',
                    symbolBorderColor: 'rgba(0, 0, 0, .5)',
                    effects: [
                        {
                            on: 'hover',
                            style: {
                                itemBackground: 'rgba(0, 0, 0, .03)',
                                itemOpacity: 1
                            }
                        }
                    ]
                }
            ]}
        />
  </Paper>
  )
}

export default BarChartCGPA