import React from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, BarChart, Legend, Bar, Rectangle } from 'recharts';

export const StudentAreaChart = () => {
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
    <ResponsiveContainer width="100%" height="100%">
          <AreaChart width={500} height={400} data={data}>
          <YAxis dataKey="student"/>
          <XAxis dataKey="name" />
          <CartesianGrid strokeDasharray="5 5"/>
          <Tooltip />
          <Legend/>
          <Area 
          dataKey="student" 
          type={'monotone'}
          margin={{ top: 10, right: 0, left: 0, bottom: 0 }}
          stroke='#7c3aed'
          fill='#8b5cfb'
          stackId="1"
          />
          </AreaChart>
    </ResponsiveContainer>
  )
}

// const CustomTooltip = ({active,payload,label})=>{   content={<CustomTooltip/>}
//     if(active && payload && payload.length){
//       return (
//         <div className='p-4 bg-slate-900 flex flex-col gap-4 rounded-md'>
//             <p>{label}</p>
//             <p>product : 1
//               <span>${payload[0].value}</span>
//             </p>
//             <p>{label}</p>
//             <p>product : 2
//               <span>${payload[1].value}</span>
//             </p>
//         </div>
//       )
//     }
//   }