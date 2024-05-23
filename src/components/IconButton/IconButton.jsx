import PropTypes from 'prop-types'
import Icon from '../Icon/Icon'

// Composant IconButton
const IconButton = ({ IconComponent, altText, onClick }) => {
  return (
    // Bouton avec icône
    <button onClick={onClick}>
      {/* Utilisation du composant Icon avec l'icône spécifiée */}
      <Icon IconComponent={IconComponent} alt={altText} />
    </button>
  )
}

// Définition des types de propriétés attendues
IconButton.propTypes = {
  IconComponent: PropTypes.elementType.isRequired, // Icône sous forme de composant
  altText: PropTypes.string.isRequired, // Texte alternatif pour l'icône
  onClick: PropTypes.func, // Gestionnaire d'événements de clic (optionnel)
}

export default IconButton
