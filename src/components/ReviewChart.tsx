import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Jan', users: 4000, satisfaction: 85 },
  { month: 'Feb', users: 5000, satisfaction: 88 },
  { month: 'Mar', users: 6800, satisfaction: 90 },
  { month: 'Apr', users: 8900, satisfaction: 92 },
  { month: 'May', users: 11200, satisfaction: 91 },
  { month: 'Jun', users: 14500, satisfaction: 93 },
];

const ReviewChart = () => {
  return (
    <div className="h-[400px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#ffffff20" />
          <XAxis dataKey="month" stroke="#ffffff60" />
          <YAxis stroke="#ffffff60" />
          <Tooltip
            contentStyle={{
              backgroundColor: '#1a1a3a',
              border: '1px solid rgba(255,255,255,0.1)',
              borderRadius: '0.5rem',
            }}
            labelStyle={{ color: '#fff' }}
            itemStyle={{ color: '#fff' }}
          />
          <Area
            type="monotone"
            dataKey="users"
            stackId="1"
            stroke="#3b82f6"
            fill="url(#colorUsers)"
          />
          <Area
            type="monotone"
            dataKey="satisfaction"
            stackId="2"
            stroke="#60a5fa"
            fill="url(#colorSatisfaction)"
          />
          <defs>
            <linearGradient id="colorUsers" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#3b82f6" stopOpacity={0} />
            </linearGradient>
            <linearGradient id="colorSatisfaction" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#60a5fa" stopOpacity={0.3} />
              <stop offset="95%" stopColor="#60a5fa" stopOpacity={0} />
            </linearGradient>
          </defs>
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default ReviewChart;