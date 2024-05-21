import style from './Activite.module.scss';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import DataAdapter from '../../../utils/adapters/DataAdapter';
import NoData from '../../Error/NoData';


const Activite = ({ userActivity }) => {
  const userData = DataAdapter.adaptUserActivity(userActivity.data);
  // const userData = 0;

  // Custom tooltip component
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={style.GraphTooltip}>
          <p className={style.Tooltip}>{payload[0].value}kg</p>
          <p>{payload[1].value}kcal</p>
        </div>
      );
    }
    return null;
  };
    if (!userData || userData.length === 0) {
    return <NoData />;
  }

  return (
    <div className={style.activite}>
    {!userData ? (<NoData />) : (
      <ResponsiveContainer width="92%" height='75%' className={style.chart}>
        <h2 className={style.title}>Activité quotidienne</h2>
        <BarChart data={userData} barGap={8} barCategoryGap={1} >
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          <XAxis
            dataKey="day"
            tick={{ fontSize: '1.4rem', dy: 15 }}
            tickLine={false}
            padding={{ left: -29, right: -30 }}
            overflow={'hidden'}
            stroke="1 1"
            style={{ fontSize: '1.4rem', fill: '#74798c', fontWeight: '500' }}
          />
          <YAxis 
            yAxisId="kilogram" 
            type="number" 
            domain={['dataMin - 1', 'dataMax + 1']} 
            tickCount={4} 
            axisLine={false} 
            orientation="right" 
            tickLine={false} 
            tick={{ fontSize: '1.4rem'}}
            dx={33}
          />
          <YAxis 
            yAxisId="calories" 
            orientation="left" 
            hide 
            axisLine={false} 
            padding={{left:35}}
          />
          <Tooltip content={<CustomTooltip />} />
          <Legend 
            iconType="circle" 
            verticalAlign="top" 
            align="right" 
            iconSize={8} 
            wrapperStyle={{ right: 0, top: -30 }} 
            formatter={(value) => <span style={{ color: '#74798C', fontSize: '1.4rem', fontWeight: '500', verticalAlign: 'middle' }}>{value}</span>} />
          <Bar 
            yAxisId="kilogram" 
            dataKey="kilogram" 
            fill="#282D30" 
            name="Poids (kg)" 
            barSize={7} 
            radius={[3.5, 3.5, 0, 0]} 
          />
          <Bar 
            yAxisId="calories" 
            dataKey="calories" 
            fill="#E60000" 
            name="Calories brûlées (kCal)" 
            barSize={7} 
            radius={[3.5, 3.5, 0, 0]} 
          />
        </BarChart>
      </ResponsiveContainer>
    )}
    </div>
  );
};

export default Activite;