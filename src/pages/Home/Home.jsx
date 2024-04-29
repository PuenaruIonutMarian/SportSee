import { Link } from "react-router-dom"
import style from "./Home.module.scss"
import Karl from "../../assets/Karl.png"
import Cecilia from "../../assets/Cecilia.png"

const Home = () => {
  return (
    <main className={style.home}>
      <h1>Selectionner un utilisateur</h1>
      <div>
        <Link to="/dashboard/user/12" className={style.link}>
          <img src={Karl} alt="Karl" />
          <h2>Karl</h2>
        </Link>
        <Link to="/dashboard/user/18" className={style.link}>
          <img src={Cecilia} alt="Cecilia" />
          <h2>Cecilia</h2>
        </Link>
      </div>
    </main>

  )
}

export default Home