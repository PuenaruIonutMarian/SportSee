import style from './Header.module.scss';

const Header = ({ name }) => {
  return (
    <div className={style.header}>
      <h1>
        <span>Bonjour</span> <span className={style.name}>{name}</span>
      </h1>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
};

export default Header;

