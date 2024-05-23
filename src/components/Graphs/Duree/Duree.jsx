import PropTypes from 'prop-types'
import style from './Duree.module.scss'
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import DataAdapter from '../../../utils/adapters/DataAdapter'
import NoData from '../../Error/NoData'

/**
 * Composant Duree affichant la durée moyenne des sessions de l'utilisateur.
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Object} props.averageSessions - Les données des sessions moyennes de l'utilisateur.
 * @returns {JSX.Element} Composant Duree.
 */
const Duree = ({ averageSessions }) => {
  // Adapter les données des sessions moyennes de l'utilisateur
  const userSessionsData = DataAdapter.adaptAverageSessions(
    averageSessions.data,
  )
  // const userSessionsData = 0;

  /**
   * Composant SessionsToolType pour personnaliser le tooltip des sessions.
   * @param {Object} props - Les propriétés passées au composant.
   * @param {boolean} props.active - Indique si le tooltip est actif.
   * @param {Object[]} props.payload - Les données du payload.
   * @returns {JSX.Element|null} Composant SessionsToolType.
   */
  function SessionsToolType({ active, payload }) {
    if (active) {
      return (
        <div className={style.tooltipWrapper}>
          <p className={style.tooltipValue}>{payload[0].value}min</p>
        </div>
      )
    }
    return null
  }

  SessionsToolType.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.number.isRequired,
      }),
    ),
  }

  return (
    <div className={style.duree}>
      {/* Afficher le composant NoData si les données sont inexistantes */}
      {!userSessionsData ? (
        <NoData />
      ) : (
        <>
          {/* Afficher le graphique d'aire de la durée moyenne des sessions */}
          <ResponsiveContainer width="100%" height="100%">
            <h2 className={style.sessionTitle}>Durée moyenne des sessions</h2>
            <AreaChart
              className={style.areaChart}
              data={userSessionsData}
              margin={{ top: 0, right: 0, left: 0, bottom: 0 }}
              onMouseMove={(e) => {
                if (e.isTooltipActive === true) {
                  let div = document.querySelector(
                    `.${style.duree} .recharts-responsive-container`,
                  )
                  let windowWidth = div.clientWidth
                  let mouseXpercentage = Math.round(
                    (e.activeCoordinate.x / windowWidth) * 100,
                  )
                  div.style.background = `linear-gradient(90deg, rgba(255,0,0,1) ${mouseXpercentage}%, rgba(0,0,0,0.0975) ${mouseXpercentage}%, rgba(0,0,0,0.0975) 100%)`
                }
              }}
            >
              <defs>
                <linearGradient
                  id="linear-gradient"
                  x1="100%"
                  y1="0%"
                  x2="0%"
                  y2="0%"
                >
                  <stop offset="20%" stopColor="rgba(255, 255, 255, 0.7)" />
                  <stop
                    offset="81.04%"
                    stopColor="rgba(255, 255, 255, 0.403)"
                  />
                </linearGradient>
              </defs>
              <XAxis
                className={style.rechartsXAxis}
                type="category"
                dataKey="day"
                tickLine={false}
                axisLine={false}
                tick={{
                  dx: -20,
                  fontSize: '1.2rem',
                  fontWeight: '300',
                  lineHeight: '2.4rem',
                  stroke: 'rgba(255, 255, 255, 0.3)',
                  fill: 'rgba(255, 255, 255, 0.3)',
                }}
              />
              <YAxis
                dataKey="sessionLength"
                domain={[0, 'dataMax + 30']}
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
                activeDot={{
                  r: 4,
                  fill: 'white',
                  stroke: 'rgba(255, 255, 255, 0.3)',
                  strokeWidth: 8,
                }}
              />
            </AreaChart>
          </ResponsiveContainer>
          <div className={style.dureeBackground}></div>
        </>
      )}
    </div>
  )
}

// Définir les types de propriétés attendues
Duree.propTypes = {
  averageSessions: PropTypes.shape({
    data: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.oneOfType([PropTypes.string, PropTypes.number])
            .isRequired,
          sessionLength: PropTypes.number.isRequired, // Durée de la session
        }),
      ).isRequired, // Les données des sessions
    }).isRequired, // Les données des sessions moyennes de l'utilisateur
  }).isRequired,
}

export default Duree
