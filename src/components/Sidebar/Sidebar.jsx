import { ReactComponent as Cycle } from '../../assets/cycle.svg'
import { ReactComponent as Muscle } from '../../assets/muscle.svg'
import { ReactComponent as Swim } from '../../assets/swim.svg'
import { ReactComponent as Yoga } from '../../assets/yoga.svg'
import style from './Sidebar.module.scss'

const Sidebar = () => {

  const getCurrentYear = () => {
    return new Date().getFullYear();
    };

  return (
 <aside className={style.sidebar}>
  <div>
      <button>
        <Yoga />
      </button>
      <button>
        <Swim />
      </button>
      <button>
        <Cycle />
      </button>
      <button>
        <Muscle />
      </button>
  </div>
  
    {/* Copyright message */}
    <p>Copyright SportSee {getCurrentYear()}.</p>
</aside>
  )
}

export default Sidebar
