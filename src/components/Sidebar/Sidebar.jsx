import { ReactComponent as CycleIcon } from '../../assets/cycle.svg'
import { ReactComponent as MuscleIcon } from '../../assets/muscle.svg'
import { ReactComponent as SwimIcon } from '../../assets/swim.svg'
import { ReactComponent as YogaIcon } from '../../assets/yoga.svg'
import IconButton from '../IconButton/IconButton'
import style from './Sidebar.module.scss'

// Composant Sidebar
const Sidebar = () => {
  // Fonction pour obtenir l'année actuelle
  const getCurrentYear = () => new Date().getFullYear()

  return (
    <aside className={style.sidebar}>
      <div>
        {/* Boutons d'icône pour les différentes activités */}
        <IconButton IconComponent={YogaIcon} altText="Yoga" />
        <IconButton IconComponent={SwimIcon} altText="Swim" />
        <IconButton IconComponent={CycleIcon} altText="Cycle" />
        <IconButton IconComponent={MuscleIcon} altText="Muscle" />
      </div>
      {/* Copyright avec l'année actuelle */}
      <p>Copyright SportSee {getCurrentYear()}.</p>
    </aside>
  )
}

export default Sidebar
