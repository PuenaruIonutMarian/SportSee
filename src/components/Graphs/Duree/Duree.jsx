import style from './Duree.module.scss';
import { AreaChart, Area, XAxis, YAxis, ResponsiveContainer, Tooltip} from 'recharts';
import DataAdapter from '../../../utils/adapters/DataAdapter';

//TODO : 1. De corectat marginilele. 
      // 2. De corectat bug-ul cu borderRadius stanga. 
      // 3. De alungit pana jos culoarea la Area 
      // 4.De micsorat grosimea la litere

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
      <ResponsiveContainer width="100%" height="100%" borderRadius="5px">
      <h2 className={style.sessionTitle} >Durée moyenne des sessions</h2>
        <AreaChart data={userSessionsData} margin={{ left: 0 }}
          onMouseMove={(e) => {
            if (e.isTooltipActive === true) {
              let div = document.querySelector('.Duree_duree__sgir7 .recharts-responsive-container')
              let windowWidth = div.clientWidth
              let mouseXpercentage = Math.round(
                (e.activeCoordinate.x / windowWidth) * 100
              )
              div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(0,0,0,0.0975) ${mouseXpercentage}%, rgba(0,0,0,0.0975) 100%)`
            }
          }}
        >
          <defs>
            <linearGradient id="areaGradient" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgba(255, 255, 255, 0.1004)" />
              <stop offset="100%" stopColor="rgba(255, 255, 255, 0.11)" />
            </linearGradient>
          </defs>
          <XAxis
            type="category"
            dataKey="day"
            tickLine={false}
            axisLine={false}
            stroke="red"
            padding={{ right: 5, left: 5 }}
            tick={{ fontSize: '1.2rem', fontWeight: "100", lineHeight: "2.4rem", stroke: "#FFF", fill: "white", opacity: 0.8 }}
          />
          <YAxis
            dataKey="sessionLength"
            domain={[0, "dataMax + 30"]}
            hide={true}
          />
          <Tooltip content={<SessionsToolType />} cursor={false} />
          <Area type="monotone" dataKey="sessionLength" strokeWidth={2} stroke="rgba(255, 255, 255, 0.7)" fill="url(#areaGradient)" dot={false} activeDot={{ r: 4, strokeWidth: 4, stroke: "white" }} />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Duree;
