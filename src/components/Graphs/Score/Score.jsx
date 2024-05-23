import PropTypes from 'prop-types'
import style from './Score.module.scss'
import DataAdapter from '../../../utils/adapters/DataAdapter'
import { ResponsiveContainer, PieChart, Pie, Cell } from 'recharts'
import NoData from '../../Error/NoData'

/**
 * Composant Score affichant le score de l'utilisateur sous forme de diagramme circulaire.
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Object} props.userData - Les données de l'utilisateur.
 * @returns {JSX.Element} Composant Score.
 */
const Score = ({ userData }) => {
  // Adapter les données de l'utilisateur
  const adaptedData = DataAdapter.adaptUserData(userData.data)

  // Créer les données pour le diagramme circulaire
  const score = [
    { name: 'Score', value: adaptedData.score },
    { name: 'Restant', value: 1 - adaptedData.score },
  ]

  return (
    <div className={style.score}>
      {/* Afficher un message d'erreur si les données adaptées sont inexistantes */}
      {!adaptedData ? (
        <NoData />
      ) : (
        <>
          <h2 className={style.scoreTitle}>Score</h2>
          {/* Créer le diagramme circulaire avec Recharts */}
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
                  <Cell
                    key={`cell-${index}`}
                    fill={index === 0 ? '#ff0000' : '#FBFBFB'}
                    cornerRadius={10}
                  />
                ))}
              </Pie>
            </PieChart>
          </ResponsiveContainer>
          {/* Afficher le texte du score */}
          <p className={style.scoreText}>
            <span className={style.scoreTextValue}>
              {adaptedData.score * 100}%
            </span>
            <span>de votre</span>
            <span>objectif</span>
          </p>
        </>
      )}
    </div>
  )
}

// Définir les types de propriétés attendues
Score.propTypes = {
  userData: PropTypes.object.isRequired, // Les données de l'utilisateur
  adaptedData: PropTypes.shape({
    score: PropTypes.number.isRequired, // Le score de l'utilisateur
    // Ajoutez ici d'autres PropTypes pour d'autres propriétés si nécessaire
  }),
}

export default Score
