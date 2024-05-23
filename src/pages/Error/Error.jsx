import { Link } from 'react-router-dom'
import styles from './Error.module.scss'

/**
 * Composant pour afficher une erreur 404.
 * @module Error
 * @returns {JSX.Element} Le composant représentant l'erreur 404.
 */
function Error() {
  return (
    <div className={styles.error}>
      <h1> 404</h1>
      <h3>Oups! La page que vous demandez n&apos;existe pas.</h3>
      <Link to="/">Retourner sur la page d&apos;accueil</Link>
    </div>
  )
}

export default Error
