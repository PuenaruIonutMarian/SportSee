import style from './Intensite.module.scss';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import DataAdapter from '../../../utils/adapters/DataAdapter';
import NoData from '../../Error/NoData';

const CustomTick = ({ payload, x, y, cx, cy }) => {
  return (
    <text
      x={x + (x - cx) / 4} 
      y={y + (y - cy) / 10} 
      fill="#fff" 
      fontSize="12" 
      textAnchor="middle"
      dominantBaseline="central"
    >
      {payload.value}
    </text>
  );
};

const Intensite = ({ userPerformance }) => {
  const data = DataAdapter.adaptUserPerformance(userPerformance.data);
  // const data = 0;

  return (
    <div className={style.intensite}>
      {!data ? (<NoData />) : (<>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx='50%' cy='50%' outerRadius='70%' data={data}>
          <PolarGrid gridType="polygon" radialLines={false}/>
          <PolarAngleAxis
            dataKey="kind"
            stroke='white'
            tickLine={false}
            axisLine={false}
            tick={<CustomTick />}
          />
          <Radar dataKey='value' stroke='#FF0101' fill='#FF0101' fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </>)}
    </div>
  );
};

export default Intensite;
