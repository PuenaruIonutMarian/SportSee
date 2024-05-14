import style from './Header.module.scss';
import DataAdapter from '../../utils/adapters/DataAdapter';

const Header = ({ userData }) => {
  const adaptedUserData = DataAdapter.adaptUserData(userData.data);

  return (
    <div className={style.header}>
      <h1>
        <span>Bonjour</span> <span className={style.name}>{adaptedUserData.name}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Header;
