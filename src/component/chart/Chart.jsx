import React from 'react';
import './chart.scss';
import {ResponsiveContainer,XAxis, CartesianGrid, Tooltip,AreaChart,Area} from 'recharts';



function Chart({aspect,title,data}) {
  return (
    <div className='chart'>
      <ResponsiveContainer width='100%'   aspect={aspect}>
        <div className="title">{title}</div>
       <AreaChart width={730} height={250} data={data}  margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
          <defs>
            <linearGradient id="total" x1="0" y1="0" x2="0" y2="1" >
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8}/>
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0}/>
            </linearGradient>
           
          </defs>
          <XAxis dataKey="name" stroke='gray'/>
          <CartesianGrid strokeDasharray="3 3" className='gridChart'/>
          <Tooltip />
          <Area type="monotone" dataKey="total" stroke="#8884d8" fillOpacity={1} fill="url(#total)"/>
      </AreaChart>
    </ResponsiveContainer >

    </div>
  )
}

export default Chart;
