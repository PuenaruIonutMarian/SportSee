import style from './Duree.module.scss';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip} from 'recharts';
import DataAdapter from '../../../utils/adapters/DataAdapter';

const Duree = ({ averageSessions }) => {
  const userSessionsData = DataAdapter.adaptAverageSessions(averageSessions.data);

  function SessionsToolType({ active, payload }) {
    if (active) {
      return (
        <div className={style.tooltipWrapper}>
          <p className={style.tooltipValue}>{payload[0].value}min</p>
        </div>
      );
    }
    return null;
  }

  return (
    <div className={style.duree}>
      <ResponsiveContainer width="100%" height="100%" >
      <h2 className={style.sessionTitle} >Durée moyenne des sessions</h2>
        <AreaChart
          className={style.areaChart} 
          data={userSessionsData} 
          margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
            let div = document.querySelector(`.${style.duree} .recharts-responsive-container`)
              let windowWidth = div.clientWidth
              let mouseXpercentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              )
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(0,0,0,0.0975) ${mouseXpercentage}%, rgba(0,0,0,0.0975) 100%)`
            }
          }}
          
        >
        <defs>
          <linearGradient id="linear-gradient" x1="100%" y1="0%" x2="0%" y2="0%">
            <stop offset="20%" stop-color="rgba(255, 255, 255, 0.7)" />
            <stop offset="81.04%" stop-color="rgba(255, 255, 255, 0.403)" />
          </linearGradient>
        </defs>
          <XAxis
            className={style.rechartsXAxis}
            type="category"
            dataKey="day"
            tickLine={false}
            axisLine={false}
            tick={{ dx:-20, fontSize: '1.2rem', fontWeight: "300", lineHeight: "2.4rem", stroke: "rgba(255, 255, 255, 0.3)", fill: "rgba(255, 255, 255, 0.3)" }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={<SessionsToolType />} cursor={false} />
          <Area 
            type="monotone" 
            dataKey="sessionLength" 
            strokeWidth={2} 
            fill="rgba(255, 255, 255, 0.11)"  
            stroke="url(#linear-gradient)"
            dot={false}  
            activeDot={{ r: 4, fill: 'white', stroke: 'rgba(255, 255, 255, 0.3)', strokeWidth: 8 }} 
          />
        </AreaChart>
      </ResponsiveContainer>
      <div className={style.dureeBackground}></div>
    </div>
  );
};

export default Duree;

