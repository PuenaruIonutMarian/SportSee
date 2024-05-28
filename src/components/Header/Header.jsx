import PropTypes from 'prop-types'
import style from './Header.module.scss'
import DataAdapter from '../../utils/adapters/DataAdapter'

// Composant Header
const Header = ({ userData, error }) => {
  // Adaptation des données utilisateur
  let adaptedUserData
  try {
    adaptedUserData = DataAdapter.adaptUserData(userData.data)
  } catch (e) {
    adaptedUserData = null
  }

  return (
    <div className={style.header}>
      {!adaptedUserData || error ? (
        <>
          <h1>Bonjour</h1>
          <p>
            Les données personnelles de l&lsquo;utilisateur ne sont pas
            disponibles
          </p>
        </>
      ) : (
        <>
          <h1>
            <span>Bonjour</span>{' '}
            <span className={style.name}>{adaptedUserData.name}</span>
          </h1>
          <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </>
      )}
    </div>
  )
}

// PropTypes
Header.propTypes = {
  userData: PropTypes.object.isRequired,
  adaptedUserData: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }),
  error: PropTypes.string,
}

export default Header
