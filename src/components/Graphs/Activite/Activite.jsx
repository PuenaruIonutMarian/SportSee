import style from './Activite.module.scss'
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, ReferenceLine} from 'recharts';
import APIDataAdapter from '../../../utils/adapters/DataAdapter';

const Activite = ({ userActivity }) => {
  // const adaptedUserData = DataAdapter.adaptUserData(userActivity.data);
  //   const userActivityData = adaptedUserData.userActivity.sessions;
  // const dataForChart = userActivityData.map(session => ({
  //   day: session.day.split('-')[2].replace(/^0+/, ''),
  //   kilogram: session.kilogram,
  //   calories: session.calories
  // }));

  const adaptedUserData = APIDataAdapter.adaptUserActivity(userActivity.data);
  const dataForChart = adaptedUserData.day.map((day, index) => ({
    day: day.split('-')[2].replace(/^0+/, ''),
    kilogram: adaptedUserData.kilogram[index],
    calories: adaptedUserData.calories[index]
  }));


  // Ticks pour axe Y 
  const minPoids = Math.min(...dataForChart.map(item => item.kilogram)) - 1;
  const maxPoids = Math.max(...dataForChart.map(item => item.kilogram)) + 1;
  const yAxisTicks = [minPoids, (minPoids + maxPoids) / 2, maxPoids];

  // Custom X axis tick component
const CustomTickXAxis = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y + 6})`}>
      <text x={0} y={-3} dy={20} textAnchor="middle" fill="#9B9EAC">
        {payload.value}
      </text>
    </g>
  );
};


// Custom Y axis tick component
const CustomTickYAxis = (props) => {
  const { x, y, payload } = props;

  return (
    <g transform={`translate(${x},${y})`}>
      <text x={0} y={3} dx={40} textAnchor="end" fill="#9B9EAC">
        {payload.value}
      </text>
    </g>
  );
};


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

  return (
    <div className={style.activite}>
      <ResponsiveContainer width="95%" height={240} style={{ margin: '0 auto' }} className={style.chart}>
        <h2 className={style.title} style={{ fontSize: '1.5rem' }}>Activité quotidienne</h2>
          <BarChart data={dataForChart}>
            {yAxisTicks.map((tick, index) => (
              <ReferenceLine
                key={`line-${index}`}
                yAxisId="right"
                y={tick}
                strokeDasharray="3 3"
                stroke="#ccc"
              />
            ))}
            <XAxis dataKey="day" tick={<CustomTickXAxis />} tickLine={false} axisLine={false} scale='point' padding={{ left: 10, right: 10 }}/>
            <YAxis yAxisId="left" orientation="left" hide={true}  axisLine={false}/>
            <YAxis yAxisId="right" orientation="right" stroke="#282D30" domain={[minPoids, maxPoids]} ticks={yAxisTicks} axisLine={false} tick={<CustomTickYAxis />} tickLine={false} />
            <Tooltip content={<CustomTooltip />} />
            <Legend iconType="circle" verticalAlign="top" align="right" iconSize={8}  wrapperStyle={{ right: 6, top:-30}} formatter={(value) => <span style={{ color: '#74798C', fontSize: '1.4rem', verticalAlign: 'middle'}}>{value}</span>}/>
            <Bar yAxisId="right" dataKey="kilogram" fill="#282D30" name="Poids (kg)"  radius={[3.5, 3.5, 0, 0]} barSize={7} />
            <Bar yAxisId="left" dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" radius={[3.5, 3.5, 0, 0]} barSize={7} />
          </BarChart>
      </ResponsiveContainer>
    </div>
  );
};



export default Activite;
