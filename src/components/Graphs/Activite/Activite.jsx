import style from './Activite.module.scss';
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, ResponsiveContainer, CartesianGrid } from 'recharts';
import DataAdapter from '../../../utils/adapters/DataAdapter';


//TODO: 1. De corectat culoarea la data 
//      2. De corectat marginea stanga la coloana Y in dreata.
//      3. De corectat marginea dreapta la efectul de hover la ultima data.


const Activite = ({ userActivity }) => {
  const userData = DataAdapter.adaptUserActivity(userActivity.data);

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
      <ResponsiveContainer width="95%" height='80%' style={{ margin: '0px 32px' }} className={style.chart}>
        <h2 className={style.title} style={{ fontSize: '1.5rem', paddingLeft: '4px' }}>Activité quotidienne</h2>
        <BarChart data={userData} barGap={8} barCategoryGap={1}     overflow={'hidden'}  margin={{ top: 5, right: 0, left: 20, bottom: 5 }}>
          <CartesianGrid vertical={false} strokeDasharray="1 1" />
          {/* <XAxis dataKey="day" tick={{ fontSize: '1.4rem', dy: 15 }} tickLine={false} scale='point' padding={{ left: 10, right: 10 }} stroke="1 1" /> */}

          {/* AICI AM DE GASIT O CALE SA MODIFIC CULOAREA */}
          <XAxis dataKey="day" tick={{ fontSize: '1.4rem', dy: 15, color: '#74798C' }} tickLine={false} padding={{ left: -45, right: -45 }} overflow={'hidden'} stroke="1 1" />


          <YAxis yAxisId="kilogram" type="number" domain={['dataMin - 1', 'dataMax + 1']} tickCount={4} axisLine={false} orientation="right" tickLine={false} tick={{ fontSize: '1.4rem'}} dx={15} />
          <YAxis yAxisId="calories" orientation="left" hide axisLine={false} />


          <Tooltip content={<CustomTooltip />} />
          <Legend iconType="circle" verticalAlign="top" align="right" iconSize={8} wrapperStyle={{ right: 6, top: -30 }} formatter={(value) => <span style={{ color: '#74798C', fontSize: '1.4rem', verticalAlign: 'middle' }}>{value}</span>} />
          <Bar yAxisId="kilogram" dataKey="kilogram" fill="#282D30" name="Poids (kg)" barSize={7} radius={[3.5, 3.5, 0, 0]} />
          <Bar yAxisId="calories" dataKey="calories" fill="#E60000" name="Calories brûlées (kCal)" barSize={7} radius={[3.5, 3.5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Activite;