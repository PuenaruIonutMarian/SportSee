import PropTypes from 'prop-types'
import style from './Intensite.module.scss'
import {
  Radar,
  RadarChart,
  PolarGrid,
  PolarAngleAxis,
  ResponsiveContainer,
} from 'recharts'
import DataAdapter from '../../../utils/adapters/DataAdapter'
import NoData from '../../Error/NoData'

/**
 * Composant Intensite affichant les performances de l'utilisateur dans différentes catégories d'intensité.
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Object} props.userPerformance - Les données de performance de l'utilisateur.
 * @param {boolean} props.error - Indique si une erreur est survenue.
 * @returns {JSX.Element} Composant Intensite.
 */
const Intensite = ({ userPerformance, error }) => {
  let data
  // Adapter les données de performance de l'utilisateur
  try {
    data = DataAdapter.adaptUserPerformance(userPerformance.data)
  } catch (error) {
    data = null
  }

  return (
    <div className={style.intensite}>
      {/* Afficher le composant NoData si les données sont inexistantes */}
      {!data || error ? (
        <NoData />
      ) : (
        <>
          {/* Afficher le graphique radar des performances */}
          <ResponsiveContainer width="100%" height="100%">
            <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
              <PolarGrid gridType="polygon" radialLines={false} />
              <PolarAngleAxis
                dataKey="kind"
                stroke="white"
                tickLine={false}
                axisLine={false}
                tick={<CustomTick />}
              />
              <Radar
                dataKey="value"
                stroke="#FF0101"
                fill="#FF0101"
                fillOpacity={0.7}
              />
            </RadarChart>
          </ResponsiveContainer>
        </>
      )}
    </div>
  )
}

/**
 * Composant CustomTick pour personnaliser les étiquettes de l'axe radial.
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Object} props.payload - Les données de la balise.
 * @param {number} props.x - La position horizontale de la balise.
 * @param {number} props.y - La position verticale de la balise.
 * @param {number} props.cx - La position horizontale du centre du graphique radar.
 * @param {number} props.cy - La position verticale du centre du graphique radar.
 * @returns {JSX.Element} Composant CustomTick.
 */
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
  )
}

// Définir les types de propriétés pour CustomTick
CustomTick.propTypes = {
  payload: PropTypes.shape({
    value: PropTypes.string.isRequired,
  }),
  x: PropTypes.number,
  y: PropTypes.number,
  cx: PropTypes.number,
  cy: PropTypes.number,
}

// Définir les types de propriétés attendues
Intensite.propTypes = {
  userPerformance: PropTypes.shape({
    data: PropTypes.shape({
      kind: PropTypes.object.isRequired, // Les catégories d'intensité
      data: PropTypes.arrayOf(
        PropTypes.shape({
          value: PropTypes.number.isRequired, // La valeur de la performance
          kind: PropTypes.number.isRequired, // Le type d'intensité
        }),
      ).isRequired, // Les données de performance dans chaque catégorie
    }).isRequired, // Les données de performance de l'utilisateur
  }).isRequired,
  error: PropTypes.string,
}

export default Intensite
