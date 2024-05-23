import logo from '../../assets/Group.svg'
import styles from './Navbar.module.scss'
import { Link } from 'react-router-dom'

// Composant Navbar
const Navbar = () => {
  return (
    <nav className={styles.navbar}>
      <div>
        {/* Logo */}
        <img src={logo} alt="logo" />
        {/* Titre */}
        <h1>SportSee</h1>
      </div>
      <ul>
        {/* Liens vers différentes pages */}
        <li>
          <Link to="/" className={styles.link}>
            Accueil
          </Link>
        </li>
        <li>Profil</li>
        <li>Réglage</li>
        <li>Communauté</li>
      </ul>
    </nav>
  )
}

export default Navbar
