// import { Link } from "react-router-dom";
// import style from "./Home.module.scss";
// import Karl from "../../assets/Karl.png";
// import Cecilia from "../../assets/Cecilia.png";
// import { useState } from "react";
// import {useData} from '../../utils/context/MockContext';


// // export let isUsingMockData;

// const Home = () => {
//   const {  setIsUsingMockData } = useData(); // Use the useData hook to access the context

//   const [choice1, setChoice1] = useState("");
//   const [choice2, setChoice2] = useState("");
//   const [userId, setUserId] = useState(null);

//   const handleChoiceChange = (event) => {
//     const { name, value } = event.target;
//     if (name === "choice1") {
//       setChoice1(value);
//       setIsUsingMockData(value === "Mock Data");
//     } else if (name === "choice2") {
//       setChoice2(value);
//       if (value === "Karl") {
//         setUserId(12);
//       } else if (value === "Cecilia") {
//         setUserId(18);
//       }
//     }
//   };

//   return (
//     <main className={style.home}>
//       <h1>Select a user</h1>
//       <form>
//         <label>
//           <span>Use data from:</span>
//           <input
//             type="checkbox"
//             name="choice1"
//             value="API"
//             checked={choice1 === "API"}
//             onChange={handleChoiceChange}
//           />
//           <span>API</span>
//         </label>
//         <label>
//           <span>Mock Data</span>
//           <input
//             type="checkbox"
//             name="choice1"
//             value="Mock Data"
//             checked={choice1 === "Mock Data"}
//             onChange={handleChoiceChange}
//           />
//         </label>
//         <label>
//           <span>User:</span>
//           <input
//             type="checkbox"
//             name="choice2"
//             value="Karl"
//             checked={choice2 === "Karl"}
//             onChange={handleChoiceChange}
//           />
//           <img src={Karl} alt="Karl" />
//         </label>
//         <label>
//           <input
//             type="checkbox"
//             name="choice2"
//             value="Cecilia"
//             checked={choice2 === "Cecilia"}
//             onChange={handleChoiceChange}
//           />
//           <img src={Cecilia} alt="Cecilia" />
//         </label>
//       </form>
//       {/* Render Link conditionally based on userId */}
//       {userId !== null && (
//         <Link to={`/dashboard/user/${userId}`}>
//           <button>Submit</button>
//         </Link>
//       )}
//     </main>
//   );
// };

// export default Home;




















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