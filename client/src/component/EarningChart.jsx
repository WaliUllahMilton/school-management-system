import React from 'react'
import { BarChart,Bar, ResponsiveContainer, XAxis } from 'recharts'

export const EarningChart = () => {
    const data = [
        {
          name: 'one',
          student: 4000,
        },
        {
          name: 'two',
          student: 3000,
        },
        {
          name: 'three',
          student: 400,
        },
        {
          name: 'four',
          student: 6000,
        },
        {
          name: 'five',
          student: 300,
        },
        {
          name: 'six',
          student: 4000,
        },
        {
          name: 'seven',
          student: 2500,
        },
        {
          name: 'eight',
          student: 8000,
        },
        {
          name: 'nine',
          student: 13000,
        },
        {
          name: 'ten',
          student: 2000,
        },
      ];
  return (
    <ResponsiveContainer width="100%" height="100%" >
        <BarChart width={300} height={40} data={data}>
            <XAxis dataKey="name"/>
        <Bar dataKey="student" 
        stroke='blue'
        fill='#3b81f5'
        />
    </BarChart>
    </ResponsiveContainer>
  )
}
