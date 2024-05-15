import style from './Score.module.scss'
import DataAdapter from '../../../utils/adapters/DataAdapter'
import { ResponsiveContainer, PieChart, Pie, Cell } from "recharts";

//TODO : fontsize, font width, marimi grafice

const Score = ({userData}) => {
// Adapt user data using DataAdapter
  const adaptedData = DataAdapter.adaptUserData(userData.data);

  let score = [{ name: 'Score', value: adaptedData.score }];

  // If todayScore is close to 1, set the remaining score to 0
  if (adaptedData.score >= 0.99) {
    score.push({ name: 'Remaining', value: 0 });
  } else {
    score.push({ name: 'Remaining', value: 1 - adaptedData.score });
  }

  return (
    <div className={style.score}>
      <h2 className={style.scoreTitle}>Score</h2>
      <ResponsiveContainer width="100%" height="100%">
        <PieChart>
          <Pie
            data={score}
            innerRadius={70}
            outerRadius={85}
            startAngle={90}
            endAngle={360 + 90}
            background={{ fill: '#FFFFFF' }}
          >
            {score.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={index === 0 ? '#ff0000' : '#FBFBFB'} cornerRadius={10} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
      <p className={style.scoreText}>
        <span className={style.scoreTextValue}>
          {adaptedData.score * 100}%<br />
        </span>
        de votre<br /> objectif
      </p>
    </div>
  );
}

export default Score