import CaloriesIcon from '../../assets/calories-icon.svg';
import ProteinIcon from '../../assets/protein-icon.svg';
import CarbsIcon from '../../assets/carbs-icon.svg';
import FatIcon from '../../assets/fat-icon.svg';
import style from './Results.module.scss'

const Results = ({ calorieCount, proteinCount, carbohydrateCount, lipidCount }) => {
  const hasData = calorieCount || proteinCount || carbohydrateCount || lipidCount;

  return (
    <div className={style.results}>
      {hasData && (
        <>
          <div className={style.resultsDataItem}>
            <img src={CaloriesIcon} alt="Calories Icon" />
            <span>{calorieCount} kcal</span>
            <p>Calories</p>
          </div>
          <div className={style.resultsDataItem}>
            <img src={ProteinIcon} alt="Protein Icon" />
            <span>{proteinCount} g</span>
            <p>Proteines</p>
          </div>
          <div className={style.resultsDataItem}>
            <img src={CarbsIcon} alt="Carbohydrates Icon" />
            <span>{carbohydrateCount} g</span>
            <p>Glucides</p>
          </div>
          <div className={style.resultsDataItem}>
            <img src={FatIcon} alt="Fat Icon" />
            <span>{lipidCount} g</span>
            <p>Lipides</p>
          </div>
        </>
      )}
      {!hasData && (
        <p className={style.noData}>Aucun information</p>
      )}
    </div>
  );
};

export default Results;
