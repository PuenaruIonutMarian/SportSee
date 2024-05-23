import PropTypes from 'prop-types'
import style from './Icon.module.scss'

// Composant Icon
const Icon = ({ IconComponent, alt }) => {
  return <IconComponent className={style.icon} aria-label={alt} />
}

// Définition des types de propriétés attendues
Icon.propTypes = {
  IconComponent: PropTypes.elementType.isRequired, // Icône sous forme de composant
  alt: PropTypes.string.isRequired, // Texte alternatif pour l'icône
}

export default Icon
