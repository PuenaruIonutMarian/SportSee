import logo from '../../assets/Group.svg'
import styles from "./Navbar.module.scss";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <img src={logo} alt="logo" />
            <h1>SportSee</h1>
        </div>
        <ul>
            <li >Accueil</li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
        </ul>
    </nav>
  )
}

export default Navbar