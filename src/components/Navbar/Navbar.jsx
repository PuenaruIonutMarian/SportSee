import logo from '../../assets/Group.svg'
import styles from "./Navbar.module.scss";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className={styles.navbar}>
        <div>
            <img src={logo} alt="logo" />
            <h1>SportSee</h1>
        </div>
        <ul>
            <li ><Link to="/">Accueil</Link></li>
            <li>Profil</li>
            <li>Réglage</li>
            <li>Communauté</li>
        </ul>
    </nav>
  )
}

export default Navbar
