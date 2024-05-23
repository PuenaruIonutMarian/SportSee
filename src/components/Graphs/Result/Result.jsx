import PropTypes from 'prop-types'
import Icon from '../../Icon/Icon'
import { ReactComponent as CaloriesIcon } from '../../../assets/calories-icon.svg'
import { ReactComponent as ProteinIcon } from '../../../assets/protein-icon.svg'
import { ReactComponent as CarbsIcon } from '../../../assets/carbs-icon.svg'
import { ReactComponent as FatIcon } from '../../../assets/fat-icon.svg'
import style from './Result.module.scss'
import DataAdapter from '../../../utils/adapters/DataAdapter'
import NoData from '../../Error/NoData'

/**
 * Composant Result affichant les données nutritionnelles telles que les calories, les protéines, les glucides et les lipides.
 * @param {Object} props - Les propriétés passées au composant.
 * @param {Object} props.data - Les données nutritionnelles de l'utilisateur.
 * @param {string} props.category - La catégorie de données à afficher ('calories', 'proteines', 'glucides' ou 'lipides').
 * @returns {JSX.Element} Composant Result.
 */
const Result = ({ data, category }) => {
  // Adapter les données de l'utilisateur
  const adaptedData = DataAdapter.adaptUserData(data.data)

  // Définir les catégories de données avec les icônes associées
  const categories = {
    calories: {
      count: adaptedData.calorieCount,
      icon: CaloriesIcon,
      label: 'Calories',
      unit: 'kCal',
    },
    proteines: {
      count: adaptedData.proteinCount,
      icon: ProteinIcon,
      label: 'Protéines',
      unit: 'g',
    },
    glucides: {
      count: adaptedData.carbohydrateCount,
      icon: CarbsIcon,
      label: 'Glucides',
      unit: 'g',
    },
    lipides: {
      count: adaptedData.lipidCount,
      icon: FatIcon,
      label: 'Lipides',
      unit: 'g',
    },
  }

  // Récupérer les données de la catégorie spécifiée
  const categoryData = categories[category]

  // Afficher un message d'erreur si la catégorie spécifiée n'existe pas
  if (!categoryData) return null

  return (
    <div className={style.resultsDataItem}>
      {!categoryData.count ? (
        <NoData />
      ) : (
        <>
          {/* Afficher l'icône de la catégorie */}
          <div className={style.iconWrapper}>
            <Icon
              IconComponent={categoryData.icon}
              alt={`${categoryData.label} Icon`}
            />
          </div>
          {/* Afficher le nombre et l'unité de la catégorie */}
          <div>
            <span>
              {formatDataCount(categoryData.count)}
              {categoryData.unit}
            </span>
            <p>{categoryData.label}</p>
          </div>
        </>
      )}
    </div>
  )
}

/**
 * Formater le nombre de données en utilisant un format spécifique.
 * @param {number} dataCount - Le nombre de données à formater.
 * @returns {string|null} Le nombre formaté ou null si le nombre est inexistant.
 */
const formatDataCount = (dataCount) => {
  return dataCount
    ? new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 4 }).format(
        dataCount,
      )
    : null
}

// Définir les types de propriétés attendues
Result.propTypes = {
  data: PropTypes.shape({
    data: PropTypes.object.isRequired,
  }).isRequired, // Les données nutritionnelles de l'utilisateur
  category: PropTypes.oneOf(['calories', 'proteines', 'glucides', 'lipides'])
    .isRequired, // La catégorie de données à afficher
}

export default Result
