import PropTypes from 'prop-types';
import Icon from '../../Icon/Icon'; 
import { ReactComponent as CaloriesIcon } from '../../../assets/calories-icon.svg';
import { ReactComponent as ProteinIcon } from '../../../assets/protein-icon.svg';
import { ReactComponent as CarbsIcon } from '../../../assets/carbs-icon.svg';
import { ReactComponent as FatIcon } from '../../../assets/fat-icon.svg';
import style from './Result.module.scss';
import DataAdapter from '../../../utils/adapters/DataAdapter';
import NoData from '../../Error/NoData';

const Result = ({ data, category }) => {
  const adaptedData = DataAdapter.adaptUserData(data.data);

  const categories = {
    calories: {
      count: adaptedData.calorieCount,
      icon: CaloriesIcon,
      label: 'Calories',
      unit: 'kCal'
    },
    proteines: {
      count: adaptedData.proteinCount,
      icon: ProteinIcon,
      label: 'Protéines',
      unit: 'g'
    },
    glucides: {
      count: adaptedData.carbohydrateCount,
      icon: CarbsIcon,
      label: 'Glucides',
      unit: 'g'
    },
    lipides: {
      count: adaptedData.lipidCount,
      icon: FatIcon,
      label: 'Lipides',
      unit: 'g'
    }
  };

  const categoryData = categories[category];

  if (!categoryData) return null;

  return (
    <div className={style.resultsDataItem}>
      {!categoryData.count ? (
        <NoData />
      ) : (
        <>
        <div className={style.iconWrapper}>
          <Icon IconComponent={categoryData.icon} alt={`${categoryData.label} Icon`} />
        </div>
          <div>
            <span>{formatDataCount(categoryData.count)}{categoryData.unit}</span>
            <p>{categoryData.label}</p>
          </div>
        </>
      )}
    </div>
  );
};

const formatDataCount = (dataCount) => {
  return dataCount ? new Intl.NumberFormat("en-IN", { maximumSignificantDigits: 4 }).format(dataCount) : null;
};

Result.propTypes = {
  data: PropTypes.object.isRequired,
  category: PropTypes.oneOf(['calories', 'proteines', 'glucides', 'lipides']).isRequired
};

export default Result;
