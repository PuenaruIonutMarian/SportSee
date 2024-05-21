import { ReactComponent as CycleIcon } from '../../assets/cycle.svg';
import { ReactComponent as MuscleIcon } from '../../assets/muscle.svg';
import { ReactComponent as SwimIcon } from '../../assets/swim.svg';
import { ReactComponent as YogaIcon } from '../../assets/yoga.svg';
import IconButton from '../IconButton/IconButton';
import style from './Sidebar.module.scss';

const Sidebar = () => {
  const getCurrentYear = () => new Date().getFullYear();

  return (
    <aside className={style.sidebar}>
      <div>
        <IconButton IconComponent={YogaIcon} altText="Yoga" />
        <IconButton IconComponent={SwimIcon} altText="Swim" />
        <IconButton IconComponent={CycleIcon} altText="Cycle" />
        <IconButton IconComponent={MuscleIcon} altText="Muscle" />
      </div>
      <p>Copyright SportSee {getCurrentYear()}.</p>
    </aside>
  );
};

export default Sidebar;
