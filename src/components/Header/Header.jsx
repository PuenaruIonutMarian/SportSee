import PropTypes from 'prop-types'
import style from './Header.module.scss'
import DataAdapter from '../../utils/adapters/DataAdapter'

// Composant Header
const Header = ({ userData }) => {
  // Adaptation des données utilisateur
  const adaptedUserData = DataAdapter.adaptUserData(userData.data)

  return (
    <div className={style.header}>
      <h1>
        <span>Bonjour</span>{' '}
        <span className={style.name}>{adaptedUserData.name}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  )
}

// PropTypes
Header.propTypes = {
  userData: PropTypes.object.isRequired,
  adaptedUserData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
}

export default Header
