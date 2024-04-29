import CaloriesIcon from '../../assets/calories-icon.svg';
import ProteinIcon from '../../assets/protein-icon.svg';
import CarbsIcon from '../../assets/carbs-icon.svg';
import FatIcon from '../../assets/fat-icon.svg';
import style from './Results.module.scss';

const Results = ({ calorieCount, proteinCount, carbohydrateCount, lipidCount }) => {
  return (
    <div className={style.results}>
      {renderDataItem(calorieCount, CaloriesIcon, 'Calories', 'kCal')}
      {renderDataItem(proteinCount, ProteinIcon, 'Protéines', 'g')}
      {renderDataItem(carbohydrateCount, CarbsIcon, 'Glucides', 'g')}
      {renderDataItem(lipidCount, FatIcon, 'Lipides', 'g')}
    </div>
  );
};

const renderDataItem = (dataCount, icon, label, unit) => {
  // Format dataCount avec Intl.NumberFormat
  const formattedDataCount = dataCount ? 
    new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 3 }).format(dataCount) : 
    null;

  return dataCount ? (
    <div className={style.resultsDataItem}>
      <img src={icon} alt={`${label} Icon`} />
      <div>
        <span>{formattedDataCount}{unit}</span>
        <p>{label}</p>
      </div>
    </div>
  ) : (
    <div className={style.resultsDataItem}>
      <p className={style.noData}>No data available</p>
    </div>
  );
};

export default Results;

