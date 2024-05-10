import { Link } from "react-router-dom";
import style from "./Home.module.scss";
import Karl from "../../assets/Karl.png";
import Cecilia from "../../assets/Cecilia.png";
import Thomas from "../../assets/Thomas.png";
import Cristina from "../../assets/Cristina.png";
import { isUsingMockData } from "../../services/DataService/DataService";


let users;
if (!isUsingMockData) {
      users = [  { id: 12, name: "Karl", image: Karl },
      { id: 18, name: "Cecilia", image: Cecilia },]}
else {
      users = [  { id: 13, name: "Thomas", image: Thomas },
      { id: 19, name: "Christine", image: Cristina },]
  }

const Home = () => {
  return (
    <main className={style.home}>
      <h1>Selectionner un utilisateur</h1>
      <div>
        {users.map((user) => (
          <Link key={user.id} to={`/dashboard/user/${user.id}`} className={style.link}>
            <img src={user.image} alt={user.name} />
            <h2>{user.name}</h2>
          </Link>
        ))}
      </div>
    </main>
  );
};

export default Home;
