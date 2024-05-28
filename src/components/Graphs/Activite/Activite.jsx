import PropTypes from 'prop-types'
import style from './Activite.module.scss'
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
  CartesianGrid,
} from 'recharts'
import DataAdapter from '../../../utils/adapters/DataAdapter'
import NoData from '../../Error/NoData'

/**
 * Composant Activite affichant l'activité quotidienne de l'utilisateur.
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Object} props.userActivity - Les données de l'activité quotidienne de l'utilisateur.
 * @param {boolean} props.error - Indique si une erreur est survenue.
 * @returns {JSX.Element} Composant Activite.
 */
const Activite = ({ userActivity, error }) => {
  let userData
  // Adapter les données de l'activité quotidienne de l'utilisateur
  // Try to adapt user activity data
  try {
    userData = DataAdapter.adaptUserActivity(userActivity.data)
  } catch (e) {
    // If there's an error in adapting the data, set userData to null
    userData = null
  }

  // Composant CustomTooltip pour personnaliser le tooltip des barres
  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className={style.GraphTooltip}>
          <p className={style.Tooltip}>{payload[0].value}kg</p>
          <p>{payload[1].value}kcal</p>
        </div>
      )
    }
    return null
  }
  CustomTooltip.propTypes = {
    active: PropTypes.bool,
    payload: PropTypes.arrayOf(
      PropTypes.shape({
        value: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
      }),
    ),
  }

  // Afficher le composant NoData si les données sont inexistantes ou vides
  if (!userData || userData.length === 0 || error) {
    return <NoData />
  }

  return (
    <div className={style.activite}>
      {/* Afficher le graphique d'activité quotidienne */}
      {!userData ? (
        <NoData />
      ) : (
        <ResponsiveContainer width="92%" height="75%" className={style.chart}>
          <h2 className={style.title}>Activité quotidienne</h2>
          <BarChart data={userData} barGap={8} barCategoryGap={1}>
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
              tick={{ fontSize: '1.4rem' }}
              dx={33}
            />
            <YAxis
              yAxisId="calories"
              orientation="left"
              hide
              axisLine={false}
              padding={{ left: 35 }}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend
              iconType="circle"
              verticalAlign="top"
              align="right"
              iconSize={8}
              wrapperStyle={{ right: 0, top: -30 }}
              formatter={(value) => (
                <span
                  style={{
                    color: '#74798C',
                    fontSize: '1.4rem',
                    fontWeight: '500',
                    verticalAlign: 'middle',
                  }}
                >
                  {value}
                </span>
              )}
            />
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
  )
}

// Définir les types de propriétés attendues
Activite.propTypes = {
  userActivity: PropTypes.shape({
    data: PropTypes.shape({
      sessions: PropTypes.arrayOf(
        PropTypes.shape({
          day: PropTypes.string.isRequired, // Jour de l'activité
          kilogram: PropTypes.number.isRequired, // Poids (en kg)
          calories: PropTypes.number.isRequired, // Calories brûlées (en kCal)
        }),
      ).isRequired, // Les données de l'activité quotidienne
    }).isRequired, // Les données de l'activité quotidienne de l'utilisateur
  }).isRequired,
  error: PropTypes.string,
}

export default Activite
