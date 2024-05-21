import style from './Score.module.scss';
import DataAdapter from '../../../utils/adapters/DataAdapter';
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";
import NoData from '../../Error/NoData';

const Score = ({ userData }) => {
  const adaptedData = DataAdapter.adaptUserData(userData.data);
  // const adaptedData = 0;

  const score = [
    { name: 'Score', value: adaptedData.score },
    { name: 'Remaining', value: 1 - adaptedData.score }
  ];

  return (
    <div className={style.score}>
      {!adaptedData ? (<NoData />) : (<> 
      <h2 className={style.scoreTitle}>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={score}
            dataKey="value"
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
            endAngle={360 + 90}
          >
            {score.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? '#ff0000' : '#FBFBFB'} cornerRadius={10} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className={style.scoreText}>
        <span className={style.scoreTextValue}>
          {adaptedData.score * 100}%
        </span>
        <span>de votre</span>
        <span>objectif</span>
      </p>
    </>) }
    </div>
  );
}

export default Score;
