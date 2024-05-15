import style from './Intensite.module.scss';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from "recharts";
import DataAdapter from '../../../utils/adapters/DataAdapter';


//TODO : fontsize, font width, marimi grafice

const Intensite = ({ userPerformance }) => {
  const data = DataAdapter.adaptUserPerformance(userPerformance.data);

  return (
    <div className={style.intensite}>
      <ResponsiveContainer width="100%" height="100%">
        <RadarChart cx='50%' cy='50%' outerRadius='65%' data={data}>
          <PolarGrid gridType="polygon" radialLines={false}/>
          <PolarAngleAxis dataKey="kind" stroke='white' tickLine={false} axisLine={false} tick={{ fontSize: 10 }} />
          <Radar dataKey='value' stroke='#FF0101' fill='#FF0101' fillOpacity={0.7} />
        </RadarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Intensite;
